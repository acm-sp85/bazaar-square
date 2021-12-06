class User < ApplicationRecord
    has_many :items
    belongs_to :city 

    validates :user_name, :email, :phone , :city_id , presence: true
    validates :user_name, :email , :phone , uniqueness: true 

    has_secure_password
end
