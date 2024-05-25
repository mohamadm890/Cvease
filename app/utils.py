from flask import render_template_string, current_app
from flask_mail import Mail, Message
import os

def render_cv_template(cv):
    template = """
    <!DOCTYPE html>
    <html>
    <head>
        <title>{{ cv.name }}'s CV</title>
    </head>
    <body>
        <h1>{{ cv.name }}</h1>
        <p>Email: {{ cv.email }}</p>
        <p>Phone: {{ cv.phone }}</p>
        <h2>Education</h2>
        <p>{{ cv.education }}</p>
        <h2>Experience</h2>
        <p>{{ cv.experience }}</p>
        <h2>Skills</h2>
        <p>{{ cv.skills }}</p>
    </body>
    </html>
    """
    return render_template_string(template, cv=cv)

def send_email(to, subject, body):
    mail = Mail(current_app)
    msg = Message(subject, recipients=[to], body=body)
    mail.send(msg)
