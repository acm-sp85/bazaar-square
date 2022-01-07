class UsersSerializer < ActiveModel::Serializer
  attributes :id , :user_name, :email, :phone, :location, :rating_average, :wishlists

  has_many :items, serializer: ItemsSerializer
  has_many :reviews
  has_many :sent_messages
  has_many :received_messages
  has_many :wishlists

  def location
    object.city.city_name
  end

  def rating_average
    (object.reviews.sum(:review_rating) / object.reviews.size).round(2)

  end

end
