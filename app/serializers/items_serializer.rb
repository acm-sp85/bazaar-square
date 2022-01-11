class ItemsSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  # include ImageConcern
  attributes :id, :item_name, :description , :category_name, :owner, :owner_id, :type, :image, :location, :category_id, :city_id, :item_type_id, :owner_reviews, :price, :image_file

  has_many :reviews

  def category_name
    object.category.category_name
  end
def image_file
    rails_blob_url(object.image_file, only_path: true) if object.image_file.attached?
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

  def owner_reviews
    object.user.reviews
  end
end
