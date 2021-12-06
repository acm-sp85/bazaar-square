class UsersSerializer < ActiveModel::Serializer
  attributes :id , :user_name, :email, :phone, :location

  has_many :items


  def location
    object.city.city_name
  end
end
