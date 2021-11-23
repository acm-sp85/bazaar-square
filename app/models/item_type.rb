class ItemType < ApplicationRecord
    has_many :items 
    has_many :users, through: :items
    has_many :cities, through: :items
    has_many :item_types, through: :items
end
