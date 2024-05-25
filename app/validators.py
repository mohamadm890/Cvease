import re

def validate_registration(data):
    errors = {}
    if not data.get('username'):
        errors['username'] = 'Username is required.'
    if not data.get('email'):
        errors['email'] = 'Email is required.'
    if not data.get('password'):
        errors['password'] = 'Password is required.'
    if data.get('password') and len(data['password']) < 8:
        errors['password'] = 'Password must be at least 8 characters.'
    if data.get('email') and not re.match(r"[^@]+@[^@]+\.[^@]+", data['email']):
        errors['email'] = 'Invalid email format.'
    return errors

def validate_login(data):
    errors = {}
    if not data.get('email'):
        errors['email'] = 'Email is required.'
    if not data.get('password'):
        errors['password'] = 'Password is required.'
    return errors

def validate_cv(data):
    errors = {}
    if not data.get('name'):
        errors['name'] = 'Name is required.'
    if not data.get('email'):
        errors['email'] = 'Email is required.'
    if not data.get('phone'):
        errors['phone'] = 'Phone number is required.'
    if not data.get('education'):
        errors['education'] = 'Education details are required.'
    if not data.get('experience'):
        errors['experience'] = 'Experience details are required.'
    if not data.get('skills'):
        errors['skills'] = 'Skills details are required.'
    return errors
