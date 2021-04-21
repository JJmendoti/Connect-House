from flask import Flask, render_template, jsonify, request, session, redirect, url_for
import pymongo
from bson import ObjectId
import os
from werkzeug.utils import secure_filename

#se crea copnexion a base datos
myClient = pymongo.MongoClient("mongodb://localhost:27017")
#se crea base de datos
myDB = myClient["rentApp"]
#se crean colecciones
apartmentsCollection = myDB["apartments"]
onwerCollection = myDB["onwer"]
userCollection = myDB["user"]

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './static/img/uploads'
app.secret_key = 'werwetwryteurturtrtyrtyrtyQQy4613874'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signin')
def signin():
    return render_template('signin.html')

@app.route('/signup')
def signup():
    return render_template('signup.html', status = "N")

@app.route('/addapartament')
def addapartament():
    return render_template('addapartament.html', status = "N")

@app.route('/homeuser')
def homeuser():
    if session['user']:
        query = {"_id": ObjectId(session['user'])}
        result = userCollection.find_one(query)
        return render_template('homeUser.html', data = result)

@app.route('/homeonwer')
def homeonwer():
    if session['user']:
        query = {"_id": ObjectId(session['user'])}
        result = onwerCollection.find_one(query)
        apartment_result = apartmentsCollection.find({"idonwer": session['user']})
        return render_template('homeOnwer.html', data = result, apartments = apartment_result)

@app.route('/signout')
def signout():
    session.clear()
    return redirect(url_for('signin'))

@app.route('/404')
def err():
    session.clear()
    return render_template('404.html')

# @app.route('/user/', methods=['GET'])
# def user():
#     result = userCollection.find()
#     if result:
#         return render_template("allUser.html", data=result)
#     else:
#         return render_template("404.html")

@app.route('/user/<id>',methods=['GET'])
def user_by_id(id):
        try:
            query = {"_id": ObjectId(id)}
            result = userCollection.find_one(query)
            if result:
                return render_template("homeUser.html", data = result)
            else: 
                return redirect(url_for("404"))
        except:
            return redirect(url_for("404"))
@app.route('/user/<id>',methods=['DELETE'])
def delete_user(id):
    try:  

        query = {"_id": ObjectId(id)}
        delete = userCollection.delete_one(query)
        if delete:
            return render_template("index.html", delete = True)
        else:
            return render_template("index.html", delete = False)
    except:
        return redirect(url_for("404"))

@app.route('/user', methods=['POST'])
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
    user = {"name": name, "ident":ident, "email": email , "avatar": filename, "country": country, "city": city, "password":password}
    save = userCollection.insert_one(user)
    if save:
        return render_template("signup.html", status = "Y")
    else:
       return render_template("signup.html", status = "E")

@app.route('/user/<id>', methods=['PUT'])
def up_user(id):
    try:
        query = {"_id": ObjectId(id)}
        name = request.form.get('name')
        ident =request.form.get('ident')
        email = request.form.get('email')
        country = request.form.get('country')
        f = request.files['avatar']
        filename = secure_filename(f.filename)
        f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        city = request.form.get('city')
        password = request.form.get('password')
        user = {"$set":{"name": name, "ident":ident, "email": email, "avatar": filename, "country": country, "city": city, "password":password}}
        update = userCollection.update_one(query, user)
        if update:
            return render_template("signup.html", status = True)
        else:
            return render_template("signup.html", status = False)
    except:
        return render_template("404.html")
     
# #esquema y rutas de propietarios



@app.route('/onwer/', methods=['GET'])
def onwer():
    result = onwerCollection.find()
    if result:
        return render_template("allOnwer.html", data=result)
    else:
        return render_template("404.html")

@app.route('/onwer/<id>',methods=['GET'])
def onwer_by_id(id):
        query = {"_id": ObjectId(id)}
        result = onwerCollection.find_one(query)
        if result:
            return render_template("homeOnwer.html", data = result)
        else: 
            return render_template("404.html")


@app.route('/onwer/<id>',methods=['DELETE'])
def delete_onwer(id):
    try:  
        query = {"_id": ObjectId(id)}
        delete = onwerCollection.delete_one(query)
        if delete:
            return render_template("index.html", delete = True)
        else:
            return render_template("index.html", delete = False)
    except:
        return render_template("404.html")

@app.route('/onwer', methods=['POST'])
def send_onwer():
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
    save = onwerCollection.insert_one(user)
    if save:
        return render_template("signup.html", status = "Y")
    else:
       return render_template("signup.html", status = "E")


@app.route('/onwer/<id>', methods=['PUT'])
def up_onwer(id):
     try:
        query = {"_id": ObjectId(id)}
        name = request.form.get('name')
        ident =request.form.get('ident')
        email = request.form.get('email')
        country = request.form.get('country')
        f = request.files['avatar']
        filename = secure_filename(f.filename)
        f.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        city = request.form.get('city')
        password = request.form.get('password')
        user = {"$set":{"name": name, "ident":ident, "email": email, "avatar": filename, "country": country, "city": city, "password":password}}
        update = onwerCollection.update_one(query, user)
        if update:
            return render_template("signup.html", status = True)
        else:
            return render_template("signup.html", status = False)
     except:
        return render_template("404.html")

@app.route('/onwer-apartment/<id>',methods=['GET'])
def onwer_apartment(id):
        query = {"_id": ObjectId(id)}
        result = apartmentsCollection.find_one(query)
        if result:
            return render_template("onwer-apartment.html", data = result)
        else: 
            return render_template("404.html")

# #esquema y rutas de apartamentos


@app.route('/apartment/', methods=['GET'])
def apartment():
    result = apartmentsCollection.find()
    if result:
        return render_template("allApartments.html", data=result)
    else:
        return render_template("404.html")


@app.route('/apartment/<id>',methods=['GET'])
def apartment_by_id(id):
        query = {"_id": ObjectId(id)}
        result = apartmentsCollection.find_one(query)
        if result:
            return render_template("viewApartment.html", data = result)
        else: 
            return render_template("404.html")

# @app.route('/apartment/onwer/<id>',methods=['GET'])
# def apartment_user_by_id(id):
#         query = {"_id": ObjectId(id)}
#         apartment = Apartment.query.filter_by(idonwer = id)
#         result = apartments_schema.dump(apartment)
#         if result:
#             return jsonify(result)
#         else:
#             return jsonify({'status':'404'})

@app.route('/delete-apartment',methods=['POST'])
def delete_apartment():
    try:  
        id = request.form.get('id')
        query = {"_id": ObjectId(id)}
        delete = apartmentsCollection.delete_one(query)
        if delete.deleted_count > 0:
            return redirect(url_for('homeonwer'))
        else:
            return redirect(url_for('index'))
    except:
        return render_template("404.html")



@app.route('/apartment', methods=['POST'])
def send_apartment():
    name = request.form.get('title')
    idonwer = request.form.get('idonwer')
    location = request.form.get('location')
    assessment = 1
    country = request.form.get('country')
    city = request.form.get('city')
    address = request.form.get('address')
    images = request.files.getlist('images[]')
    names_img = []
    for image in images:
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], image.filename))   
        names_img.append(image.filename) 
    image_featured = request.files['outstandingImage']
    image_featured_name = secure_filename(image_featured.filename)
    image_featured.save(os.path.join(app.config['UPLOAD_FOLDER'], image_featured_name))
    nigth_value = request.form.get('nightValue')
    review = request.form.get('review')
    apartment = {"idonwer": idonwer, "name":name, "address": address, "assessment": assessment, "location": location, "country": country, "city": city, "image":names_img, "image_featured": image_featured_name, "nigth_value":nigth_value, "review":review}
    save = apartmentsCollection.insert_one(apartment)
    if save:
        return render_template("addapartament.html", status = "Y")
    else:
       return render_template("addapartament.html", status = "E")

@app.route('/apartment/<id>', methods=['PUT'])
def up_apartment(id):
    query = {"_id": ObjectId(id)}
    name = request.form.get('title')
    idonwer = request.form.get('idonwer')
    location = request.form.get('location')
    assessment = 1
    country = request.form.get('country')
    city = request.form.get('city')
    address = request.form.get('address')
    images = request.files.getlist('images[]')
    names_img = []
    for image in images:
        image.save(os.path.join(app.config['UPLOAD_FOLDER'], image.filename))   
        names_img.append(image.filename) 
    image_featured = request.files['outstandingImage']
    image_featured_name = secure_filename(image_featured.filename)
    image_featured.save(os.path.join(app.config['UPLOAD_FOLDER'], image_featured_name))
    nigth_value = request.form.get('nightValue')
    review = request.form.get('review')
    apartment = {"idonwer": idonwer, "name":name, "address": address, "assessment": assessment, "location": location, "country": country, "city": city, "image":names_img, "image_featured": image_featured_name, "nigth_value":nigth_value, "review":review}
    save = apartmentsCollection.update_one(query,apartment)
    if save:
        return render_template("addapartament.html", status = True)
    else:
       return render_template("addapartament.html", status = False)


@app.route('/signinuser', methods=['POST'])
def signinuser():
    user = request.form.get('email')
    status = "E"
    password = request.form.get('password')
    query = {"email":user, "password": password}
    result = userCollection.find_one(query)
    if result:
        session['user'] = str(result['_id']) 
        session['name'] = result['name']
        session['type'] = "user"
        return redirect(url_for("homeuser"))
    else:
        return render_template("signin.html", status = status)

@app.route('/signinonwer', methods=['POST'])
def signinonwer():
    user = request.form.get('emailPrio')
    status = "E"
    password = request.form.get('passwordPrio')
    query = {"email":user, "password": password}
    result = onwerCollection.find_one(query)
    if result:
        session['user'] = str(result['_id']) 
        session['name'] = result['name']
        session['type'] = "onwer"
        return redirect(url_for('homeonwer'))
    else:
        return render_template("signin.html", status = status)


if __name__ == '__main__':
    app.run(debug=True, port=8001)
