class Item < ApplicationRecord
    belongs_to :user
    belongs_to :category 
    belongs_to :city
    belongs_to :item_type
    has_many :reviews
    # belongs_to :wishlist
end
