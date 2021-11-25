class UsersSerializer < ActiveModel::Serializer
  attributes :id , :name, :email, :phone, :location

  def location
    object.city.name
  end
end
