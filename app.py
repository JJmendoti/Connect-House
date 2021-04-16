from flask import Flask, render_template, jsonify, request
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

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/signin')
def signin():
    return render_template('signin.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/addapartament')
def addapartament():
    return render_template('addapartament.html')

@app.route('/homeuser')
def homeuser():
    return render_template('homeUser.html')

@app.route('/homeonwer')
def homeonwer():
    return render_template('homeOnwer.html')


@app.route('/user/', methods=['GET'])
def user():
    result = userCollection.find()
    if result:
        return render_template("allUser.html", data=result)
    else:
        return render_template("404.html")

@app.route('/user/<id>',methods=['GET'])
def user_by_id(id):
        query = {"_id": ObjectId(id)}
        result = userCollection.find_one(query)
        if result:
            return render_template("homeUser.html", data = result)
        else: 
            return render_template("404.html")

# @app.route('/user/<id>',methods=['DELETE'])
# def delete_user(id):
#     try:  
#         user = User.query.get(id)
#         db.session.delete(user)
#         db.session.commit()
#         return jsonify({'status':'200'})
#     except:
#         return jsonify({'status':'404'})

@app.route('/user', methods=['POST'])
def send_user():
    name = request.form.get('name')
    ident =request.form.get('ident')
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
        return jsonify({'status':'200'})
    else:
       return jsonify({'status':'404'})

# @app.route('/user/<id>', methods=['PUT'])
# def up_user(id):
#     try:
#         user = User.query.get(id)
#         data = request.get_json(force=True)
#         name = data['name']
#         ident = data['ident']
#         email = data['email']
#         country = data['country']
#         city = data['city']
#         password = data['password']

#         user.name = name
#         user.ident = ident
#         user.email = email
#         user.country = country
#         user.city = city
#         user.password = password
#         db.session.commit()
#         return jsonify({'status':'200'})
#     except:
#         return jsonify({'status':'404'})


# #esquema y rutas de propietarios



# @app.route('/onwer/', methods=['GET'])
# def onwer():
#     all_onwer = Onwer.query.all()
#     result = onwers_schema.dump(all_onwer)
#     return jsonify(result)


# @app.route('/onwer/<id>',methods=['GET'])
# def onwer_by_id(id):
#         onwer = Onwer.query.get(id)
#         if onwer:
#             return onwer_schema.jsonify(onwer)
#         else:
#             return jsonify({'status':'404'})


# @app.route('/onwer/<id>',methods=['DELETE'])
# def delete_onwer(id):
#     try:  
#         onwer = Onwer.query.get(id)
#         db.session.delete(onwer)
#         db.session.commit()
#         return jsonify({'status':'200'})
#     except:
#         return jsonify({'status':'404'})

# @app.route('/onwer', methods=['POST'])
# def send_onwer():
#     data = request.get_json(force=True)
#     name = data['name']
#     ident = data['ident']
#     email = data['email']
#     country = data['country']
#     city = data['city']
#     password = data['password']

#     regist = Onwer(name,ident,email,country,city,password)
#     db.session.add(regist)
#     db.session.commit()
#     return jsonify({'status':'200'})

# @app.route('/onwer/<id>', methods=['PUT'])
# def up_onwer(id):
#     try:
#         onwer = Onwer.query.get(id)
#         data = request.get_json(force=True)
#         name = data['name']
#         ident = data['ident']
#         email = data['email']
#         country = data['country']
#         city = data['city']
#         password = data['password']

#         onwer.name = name
#         onwer.ident = ident
#         onwer.email = email
#         onwer.country = country
#         onwer.city = city
#         onwer.password = password
#         db.session.commit()
#         return jsonify({'status':'200'})
#     except:
#         return jsonify({'status':'404'})

# #esquema y rutas de apartamentos


# @app.route('/apartment/', methods=['GET'])
# def apartment():
#     all_apartment = Onwer.query.all()
#     result = apartments_schema.dump(all_apartment)
#     if result:
#         return jsonify(result)
#     else:
#         return jsonify({'status':'404'})


# @app.route('/apartment/<id>',methods=['GET'])
# def apartment_by_id(id):
#         apartment = Apartment.query.get(id)
#         if apartment:
#             return apartment_schema.jsonify(apartment)
#         else:
#             return jsonify({'status':'404'})

# @app.route('/apartment/onwer/<id>',methods=['GET'])
# def apartment_user_by_id(id):
#         apartment = Apartment.query.filter_by(idonwer = id)
#         result = apartments_schema.dump(apartment)
#         if result:
#             return jsonify(result)
#         else:
#             return jsonify({'status':'404'})

# @app.route('/apartment/<id>',methods=['DELETE'])
# def delete_apartment(id):
#     try:  
#         apartment = Apartment.query.get(id)
#         db.session.delete(apartment)
#         db.session.commit()
#         return jsonify({'status':'200'})
#     except:
#         return jsonify({'status':'404'})

# @app.route('/apartment', methods=['POST'])
# def send_apartment():
#     data = request.get_json(force=True)
#     name = data['name']
#     idonwer = data['idonwer']
#     location = data['location']
#     country = data['country']
#     city = data['city']
#     address = data['address']
#     image = data['image']
#     image_featured = data['image_featured']
#     nigth_value = data['nigth_value']
#     review = data['review']


#     regist = Apartment(idonwer, name, city, address, location, country, image, image_featured,nigth_value,review)
#     db.session.add(regist)
#     db.session.commit()
#     return jsonify({'status':'200'})

# @app.route('/apartment/<id>', methods=['PUT'])
# def up_apartment(id):
#     try:
#         apartment = Apartment.query.get(id)
#         data = request.get_json(force=True)
#         name = data['name']
#         idonwer = data['idonwer']
#         location = data['location']
#         country = data['country']
#         city = data['city']
#         address = data['address']
#         image = data['image']
#         image_featured = data['image_featured']
#         nigth_value = data['nigth_value']
#         review = data['review']

#         apartment.name = name
#         apartment.idonwer = idonwer
#         apartment.location = location
#         apartment.country = country
#         apartment.city = city
#         apartment.address = address
#         apartment.image = image
#         apartment.image_featured = image_featured
#         apartment.nigth_value = nigth_value
#         apartment.review = review

#         db.session.commit()
#         return jsonify({'status':'200'})
#     except:
#         return jsonify({'status':'404'})




if __name__ == '__main__':
    app.run(debug=True, port=8001)
