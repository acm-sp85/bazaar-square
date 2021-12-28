class ItemTypesSerializer < ActiveModel::Serializer
  attributes :id, :name

    has_many :items , serializer: ItemsSerializer


  # def category_name
  #   item.category.category_name
  # end

  # def location
  #   item.city.city_name
  # end

  # def owner
  #   item.user.user_name
  # end

end
