class UsersSerializer < ActiveModel::Serializer
  attributes :id , :user_name, :email, :phone, :location

  def location
    object.city.city_name
  end
end
