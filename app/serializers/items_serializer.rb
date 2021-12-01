class ItemsSerializer < ActiveModel::Serializer
  attributes :id, :item_name, :description , :category_name, :owner, :type, :image, :location



  def category_name
    object.category.category_name
  end
  def owner
    object.user.user_name
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
