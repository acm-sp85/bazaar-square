class AddWishlistIdToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :wishlist_id, :integer
  end
end
