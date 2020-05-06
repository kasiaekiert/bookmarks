class AddUidToMarks < ActiveRecord::Migration[6.0]
  def change
    add_column :marks, :uid, :string
  end
end
