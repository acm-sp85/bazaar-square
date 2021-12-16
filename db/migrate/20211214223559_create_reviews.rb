class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :item_id
      t.integer :user_id
      t.string :review_content
      t.float :review_rating
      t.string :review_type
      t.string :review_title

      t.timestamps
    end
  end
end
