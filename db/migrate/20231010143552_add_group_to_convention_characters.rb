class AddGroupToConventionCharacters < ActiveRecord::Migration[7.0]
  def change
    add_column :convention_characters, :group, :integer
  end
end
