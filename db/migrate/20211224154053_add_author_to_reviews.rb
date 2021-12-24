class AddAuthorToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :author_id, :string
  end
end
