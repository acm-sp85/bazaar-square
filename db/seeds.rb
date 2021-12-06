
require "faker"

puts '❌ ❌ ❌ deleting all seeds... ❌ ❌ ❌'
City.destroy_all
Category.destroy_all
ItemType.destroy_all
Item.destroy_all
User.destroy_all

puts '🏙️ 🌆 Seeding cities 🏙️ 🌆 '

# 10.times {City.create(
#     city_name: Faker::Address.unique.state
# )}

City.create(city_name: "Manhattan")
City.create(city_name: "Brooklyn")
City.create(city_name: "Queens")
City.create(city_name: "Bronx")
City.create(city_name: "Staten Island")

puts '🏀 🥎 🏈 🖌️  🖥️ Seeding item types 🏀 🥎 🏈 🖌️  🖥️ '
ItemType.create(
    name:"Sell"
)

ItemType.create(
    name:"Trade"
)

ItemType.create(
    name:"Borrow"
)
ItemType.create(
    name:"Donate"
)



puts '🧔 🧑‍🦰 🧔 🧑‍🦰 Seeding users 🧔 🧑‍🦰 🧔 🧑‍🦰 '

    User.create(
        user_name: "admin",
    email: "admin@gmail.com",
    phone: 123,
    city_id: 1,
    password: "password")

6.times {User.create(
    user_name: Faker::Name.unique.name ,
    email: Faker::Internet.unique.email,
    phone: Faker::PhoneNumber.unique.cell_phone,
    city_id: rand(1..5),
    password: "password"
    )}

 
    puts 'Seeding items'
     
    # Vehicles
     Category.create(
     category_name:"Vehicles"
     )
    15.times {Item.create(
     item_name: Faker::Vehicle.unique.make_and_model,
     description: Faker::Lorem.sentence,
     image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['vehicles', 'exterior']),
     user_id: rand(1..5),
     category_id:1,
     city_id:rand(1..5),
     item_type_id:rand(1..4)
     )}
     
    #  Art
     Category.create(
         category_name:"Art"
         )
    15.times {Item.create(
        item_name: Faker::Artist.unique.name ,
        description: Faker::Lorem.sentence,
        image:  Faker::LoremFlickr.image(size: "300x300", search_terms: ['art', 'piece']),
        user_id: rand(1..5),
        category_id:2,
        city_id:rand(1..5),
        item_type_id:rand(1..4)
    )}

    # Games
    Category.create(
        category_name:"Games"
        )
15.times {Item.create(
        item_name: Faker::Game.unique.title ,
        description: Faker::Lorem.sentence,
        image:  Faker::LoremFlickr.image(size: "300x300", search_terms: ['videogame', 'game']),
        user_id: rand(1..5),
        category_id:3,
        city_id:rand(1..5),
        item_type_id:rand(1..4)
    )}

    # Books
    Category.create(
        category_name:"Books "
        )

15.times {Item.create(
        item_name: Faker::Book.unique.title,
        description: Faker::Lorem.sentence,
        image:  Faker::LoremFlickr.image(size: "300x300", search_terms: ['book', 'cover']),
        user_id: rand(1..5),
        category_id:4,
        city_id:rand(1..5),
        item_type_id:rand(1..4)
    )}

# Electronics
    Category.create(
        category_name:"Electronics"
        )

15.times {Item.create(
        item_name: Faker::Appliance.unique.equipment,
        description: Faker::Lorem.sentence,
        image:  Faker::LoremFlickr.image(size: "300x300", search_terms: ['electronic', 'appliance']),
        user_id: rand(1..5),
        category_id:5,
        city_id:rand(1..5),
        item_type_id:rand(1..4)
    )}


    # Furniture
    Category.create(
        category_name:"Furniture"
        )

15.times {Item.create(
        item_name: Faker::House.unique.furniture,
        description: Faker::Lorem.sentence,
        image:  Faker::LoremFlickr.image(size: "300x300", search_terms: ['furniture', 'sale']),
        user_id: rand(1..5),
        category_id:6,
        city_id:rand(1..5),
        item_type_id:rand(1..4)
    )}