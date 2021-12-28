class UsersSerializer < ActiveModel::Serializer
  attributes :id , :user_name, :email, :phone, :location, :rating_average

  has_many :items, serializer: ItemsSerializer
  has_many :reviews


  def location
    object.city.city_name
  end

  def rating_average
    object.reviews.sum(:review_rating) / object.reviews.size

  end

end
