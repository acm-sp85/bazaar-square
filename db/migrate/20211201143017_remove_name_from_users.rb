class RemoveNameFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :name, :string
    remove_column :items, :name, :string
    remove_column :cities, :name, :string
    remove_column :categories, :name, :string

    add_column :users, :user_name, :string
    add_column :items, :item_name, :string
    add_column :cities, :city_name, :string
    add_column :categories, :category_name , :string
  end
end
