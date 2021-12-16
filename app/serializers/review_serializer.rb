class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :item_id, :user_id, :review_content, :review_rating, :review_type, :review_title
end
