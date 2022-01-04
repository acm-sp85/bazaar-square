class User < ApplicationRecord
    has_many :items
    has_many :reviews
    belongs_to :city 
    has_many :sent_messages, class_name: "Message", foreign_key: "sender_id"
    has_many :received_messages, class_name: "Message", foreign_key: "user_id"

    validates :user_name, :email, :phone , :city_id , presence: true
    validates :user_name, :email , :phone , uniqueness: true 

    has_secure_password
end
