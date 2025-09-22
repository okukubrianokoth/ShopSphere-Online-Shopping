from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from sqlalchemy.orm import validates
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username =db.Column(db.string(50), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    orders = db.relationship("Order", back_populates="user")

@property
def password(self):
    raise AttributeError("Password is write only")

@password.setter
def password(self, plain_text):
    self.password_hash = bcrypt.generate_password_hash(plain_text).decode("utf-8")

def check_password (self, plain_text):
    return bcrypt.check_password_hash(self.password_hash, plain_text)

@validates("username")
def validates_username(self, key, username):
    if not username or len(username) < 5:
        raise ValueError("Username must be at least 5 characters")
    return username

@validates("email")
def validates_email(self, key, email):
    if "@" not in email:
        raise ValueError("Invalid email")
    return email

def __repr__(self):
    return f"<User {self.username}>"


class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True, nullable=False)

    products = db.relationship("Product", back_populates="category")

    @validates("name")
    def validates_name(self, key, name):
        if not name or len(name) < 5:
            raise ValueError("Category name too short")
        return name
    
    def __repr__(self):
        return f"<Category {self.name}>"
    
    class Product(db.Model):
        __tablename__ = "products"

        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.Integer(50), nullable=False)
        description = db.Column(db.String(255))
        image_url = db.Column(db.String(255))
        stock = db.Column(db.Integer, default=0)

        category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
        category = db.relationship("category", back_populates="products")

        order_items = db.relationship("OrderItem",back_populates="product")

@validates("price")
def validate_price(self, key, price):
    if price <= 0:
        raise ValueError("Price cannot be less than 0")
    return price

@validates("stock")
def validatea_stock(self, key, stock):
    if stock < 0:
        raise ValueError("Stock cannot be negatove")
    return stock

def __repr__(self):
    return f"<Product {self.name}>"

class Order(db.Model):
    __tablename__ = "orders"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    total_price = db.Column(db.Float, nullable=False, default=0.0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    user = db.relationship("User", back_populates="orders")
    items = db.relationship("OrderItem", back_populates="order", cascade="all, delete-orphan")

def __repr__(self):
    return f"<Order {self.id} by User {self.user_id}>"

class OrderItem(db.Model):
    __tablename__ = "order_items"

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("orders.id"), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id"), nullable=False)
    quantity = db.Column(db.Integer, default=1)
    subtotal = db.Column(db.Float, nullable=False)

    order = db.relationship("Order", back_populates="items")
    product = db.relationship("Product", back_populates="order_items")

    @validates("quantity")
    def validate_quantity(self, key, quantity):
        if quantity < 1:
            raise ValueError("Quantity must be at least 1")
        return quantity

    def __repr__(self):
        return f"<OrderItem Order {self.order_id} Product {self.product_id}>"








