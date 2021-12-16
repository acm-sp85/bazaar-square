class UsersSerializer < ActiveModel::Serializer
  attributes :id , :user_name, :email, :phone, :location

  has_many :items, serializer: ItemsSerializer
  has_many :reviews


  def location
    object.city.city_name
  end
end
