class ItemsSerializer < ActiveModel::Serializer
  attributes :id, :name, :description , :category_name, :owner, :type, :image, :location
  def category_name
    object.category.name
  end
  def owner
    object.user.name
  end
  def type
    object.item_type.name
  end
  def image
    object.image
  end
  def location
    object.city.name
  end
end
