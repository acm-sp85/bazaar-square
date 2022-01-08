class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :item_id, :item_info
  # , :category_name

  def item_info
    @itemmm = Item.find_by(id: object.item_id)
    return @itemmm
  end
# def category_name
#     @itemmm.category.category_name
#   end

  
end
