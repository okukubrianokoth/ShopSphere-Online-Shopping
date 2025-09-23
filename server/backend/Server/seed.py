from models import db, Product, Category
from app import app
from faker import Faker
import random

fake = Faker()


categories = ["Computers", "Electronics", "Audio", "Gaming", "Home Appliances", "Mobile Phones"]


product_pool = {
    "Computers": ["Laptop", "Desktop PC", "Monitor", "Keyboard", "Mouse", "External Hard Drive"],
    "Electronics": ["Smart TV", "Tablet", "Smartwatch", "Camera", "Printer"],
    "Audio": ["Headphones", "Bluetooth Speaker", "Soundbar", "Microphone", "Studio Monitor"],
    "Gaming": ["Gaming Laptop", "Console", "VR Headset", "Gaming Chair", "Graphics Card"],
    "Home Appliances": ["Washing Machine", "Refrigerator", "Microwave", "Air Conditioner", "Air Fryer"],
    "Mobile Phones": ["Smartphone", "Charger", "Power Bank", "Earbuds", "Protective Case"]
}

NUM_PRODUCTS_TO_ADD = 100

with app.app_context():
    db.create_all()

   
    category_objs = {}
    for c in categories:
        cat = Category.query.filter_by(name=c).first()
        if not cat:
            cat = Category(name=c)
            db.session.add(cat)
        category_objs[c] = cat
    db.session.commit()

    existing_product_names = {p.name for p in Product.query.all()}

    added_count = 0
    while added_count < NUM_PRODUCTS_TO_ADD:
        category_name = random.choice(categories)
        category = category_objs[category_name]

        product_type = random.choice(product_pool[category_name])
        brand = fake.company()
        model = fake.bothify(text="Model-###")

       
        product_name = f"{brand} {product_type} {model}"

        if product_name in existing_product_names:
            continue

        product = Product(
            name=product_name,
            price=round(random.uniform(50, 2000), 2),
            description=f"A high-quality {product_type.lower()} from {brand}. {fake.sentence()}",
            image_url=f"https://picsum.photos/seed/{fake.uuid4()}/400/400",
            stock=random.randint(5, 50),
            category=category
        )

        db.session.add(product)
        existing_product_names.add(product_name)
        added_count += 1

    
    for cat in category_objs.values():
        cat.total_products = Product.query.filter_by(category_id=cat.id).count()

    db.session.commit()
    print(f"✅ Added {added_count} unique realistic products across {len(categories)} categories.")
