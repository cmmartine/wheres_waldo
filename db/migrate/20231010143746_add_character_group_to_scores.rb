class AddCharacterGroupToScores < ActiveRecord::Migration[7.0]
  def change
    add_column :scores, :character_group, :integer
  end
end
