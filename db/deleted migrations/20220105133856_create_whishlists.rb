class CreateWhishlists < ActiveRecord::Migration[6.1]
  def change
    create_table :whishlists do |t|
      t.string :name

      t.timestamps
    end
  end
end
