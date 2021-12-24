class ItemsSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description , :category_name, :owner, :owner_id, :type, :image, :location, :category_id, :city_id, :item_type_id

  has_many :reviews

  def category_name
    object.category.category_name
  end


  def owner
    object.user.user_name
  end

  def owner_id
    object.user.id
  end
  def type
    object.item_type.name
  end
  def image
    object.image
  end
  def location
    object.city.city_name
  end
end
