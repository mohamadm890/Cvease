from flask import Blueprint, jsonify

bp = Blueprint('errors', __name__)

@bp.app_errorhandler(404)
def not_found_error(error):
    return jsonify({"message": "Resource not found"}), 404

@bp.app_errorhandler(500)
def internal_error(error):
    return jsonify({"message": "Internal server error"}), 500
