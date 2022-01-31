class DropWhishlist < ActiveRecord::Migration[6.1]
  def change
    drop_table :whishlists
  end
end
