from flask import Blueprint, request, jsonify, render_template, make_response
from . import db, bcrypt, jwt, limiter
from .models import User, CV, Template
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from .utils import render_cv_template, send_email
from .validators import validate_registration, validate_login, validate_cv
import pdfkit

bp = Blueprint('api', __name__)

@bp.route('/register', methods=['POST'])
@limiter.limit("5 per minute")
def register():
    data = request.get_json()
    errors = validate_registration(data)
    if errors:
        return jsonify(errors), 400

    username = data['username']
    email = data['email']
    password = data['password']

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "Email already registered"}), 400

    user = User(username=username, email=email)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()

    send_email(email, "Welcome to CV Builder", "Your account has been created successfully.")
    return jsonify({"message": "User registered successfully"}), 201

@bp.route('/login', methods=['POST'])
@limiter.limit("5 per minute")
def login():
    data = request.get_json()
    errors = validate_login(data)
    if errors:
        return jsonify(errors), 400

    email = data['email']
    password = data['password']

    user = User.query.filter_by(email=email).first()
    if user and user.check_password(password):
        access_token = create_access_token(identity=user.id)
        user.last_login = datetime.utcnow()
        db.session.commit()
        return jsonify(access_token=access_token), 200

    return jsonify({"message": "Invalid credentials"}), 401

@bp.route('/cv', methods=['POST'])
@jwt_required()
def create_cv():
    data = request.get_json()
    errors = validate_cv(data)
    if errors:
        return jsonify(errors), 400

    current_user_id = get_jwt_identity()
    cv = CV(
        user_id=current_user_id,
        name=data['name'],
        email=data['email'],
        phone=data['phone'],
        education=data['education'],
        experience=data['experience'],
        skills=data['skills']
    )
    db.session.add(cv)
    db.session.commit()
    return jsonify({"message": "CV created successfully"}), 201

@bp.route('/cv/<int:cv_id>/export', methods=['GET'])
@jwt_required()
def export_cv(cv_id):
    current_user_id = get_jwt_identity()
    cv = CV.query.filter_by(id=cv_id, user_id=current_user_id).first_or_404()

    rendered_html = render_cv_template(cv)
    pdf = pdfkit.from_string(rendered_html, False)

    response = make_response(pdf)
    response.headers['Content-Type'] = 'application/pdf'
    response.headers['Content-Disposition'] = 'attachment; filename=cv.pdf'
    return response

@bp.route('/templates', methods=['GET'])
def list_templates():
    templates = Template.query.all()
    return jsonify([{'id': template.id, 'name': template.name} for template in templates]), 200

@bp.route('/template/<int:template_id>', methods=['GET'])
def get_template(template_id):
    template = Template.query.get_or_404(template_id)
    return jsonify({'id': template.id, 'name': template.name, 'content': template.content}), 200
