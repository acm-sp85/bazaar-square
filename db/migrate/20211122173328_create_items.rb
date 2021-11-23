class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :category_id
      t.integer :user_id
      t.integer :city_id
      t.integer :item_type_id

      t.timestamps
    end
  end
end
