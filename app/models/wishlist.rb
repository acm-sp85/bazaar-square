class Wishlist < ApplicationRecord
    has_many :items
    #  has_and_belongs_to_many :items
    belongs_to :user  
end
