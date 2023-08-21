class CreateConventionCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :convention_characters do |t|
      t.string :name
      t.text :location, array: true, default: []

      t.timestamps
    end
  end
end
