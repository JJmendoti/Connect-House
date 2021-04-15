from flask import Flask, render_template, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)


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


app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost:3306/rentApp'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class User(db.Model):
    iduser = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    ident = db.Column(db.String(15))
    email = db.Column(db.String(50))
    country = db.Column(db.String(50))
    city = db.Column(db.String(50))
    password = db.Column(db.String(15))

    def __init__(self, name, ident, email, country, city, password):
        self.name = name
        self.ident = ident
        self.email = email
        self.country = country
        self.city = city
        self.password = password

class Onwer(db.Model):
    idonwer = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    ident = db.Column(db.String(15))
    email = db.Column(db.String(50))
    country = db.Column(db.String(50))
    city = db.Column(db.String(50))
    password = db.Column(db.String(15))

    def __init__(self, name, ident, email, country, city, password):
        self.name = name
        self.ident = ident
        self.email = email
        self.country = country
        self.city = city
        self.password = password

class Apartment(db.Model):
    idapartment = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    city = db.Column(db.String(100))
    address = db.Column(db.String(100))
    location = db.Column(db.String(255))
    country = db.Column(db.String(50))
    image = db.Column(db.String(200))
    image_featured = db.Column(db.String(200))
    nigth_value = db.Column(db.Integer)
    review = db.Column(db.Text)


    def __init__(self, name, city, address, location, country, image, image_featured,nigth_value,review):
        self.name = name
        self.city = city
        self.address = address
        self.country = country
        self.location = location
        self.image = image
        self.image_featured = image_featured
        self.nigth_value = nigth_value
        self.review = review


db.create_all()

class UserSchema(ma.Schema):
    class Meta:
        fields = ('name','ident', 'email','country','city','password')

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@app.route('/user/', methods=['GET'])
def user():
    all_user = User.query.all()
    result = users_schema.dump(all_user)
    return jsonify(result)


@app.route('/user/<id>',methods=['GET'])
def user_by_id(id):
        user = User.query.get(id)
        if user:
            return user_schema.jsonify(user)
        else:
            return jsonify({'status':'404'})


@app.route('/user/<id>',methods=['DELETE'])
def delete_user(id):
    try:  
        user = User.query.get(id)
        db.session.delete(user)
        db.session.commit()
        return jsonify({'status':'200'})
    except:
        return jsonify({'status':'Error, puede que el usuario no exista o ya haya sido eliminado'})

@app.route('/user', methods=['POST'])
def send_user():
    data = request.get_json(force=True)
    name = data['name']
    ident = data['ident']
    email = data['email']
    country = data['country']
    city = data['city']
    password = data['password']

    regist = User(name,ident,email,country,city,password)
    db.session.add(regist)
    db.session.commit()
    return jsonify({'status':'Usuario registrado correctamente'})

@app.route('/user/<id>', methods=['PUT'])
def up_user(id):
    try:
        user = User.query.get(id)
        data = request.get_json(force=True)
        name = data['name']
        ident = data['ident']
        email = data['email']
        country = data['country']
        city = data['city']
        password = data['password']

        user.name = name
        user.ident = ident
        user.email = email
        user.country = country
        user.city = city
        user.password = password
        db.session.commit()
        return jsonify({'status':'200'})
    except:
        return jsonify({'status':'El registro no existe'})





if __name__ == '__main__':
    app.run(debug=True, port=8001)

