def send_user():
    
    name = request.form.get('name')
    ident =request.form.get('identification')
    email = request.form.get('email')
    country = request.form.get('country')
    f = request.files['avatar']
    filename = secure_filename(f.filename)
    f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    city = request.form.get('city')
    password = request.form.get('password')
    user = {"name": name, "ident":ident, "email": email, "avatar": filename, "country": country, "city": city, "password":password}
    save = userCollection.insert_one(user)
    if save:
        return render_template("signup.html", status = "Y")
    else:
       return render_template("signup.html", status = "E")