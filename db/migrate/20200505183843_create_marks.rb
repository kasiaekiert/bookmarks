class CreateMarks < ActiveRecord::Migration[6.0]
  def change
    create_table :marks do |t|
      t.string :name
      t.string :url
      t.string :tag
      t.integer :domain_id

      t.timestamps
    end
  end
end
