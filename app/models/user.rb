class User < ApplicationRecord
    has_many :items
    belongs_to :city 

    has_secure_password
end
