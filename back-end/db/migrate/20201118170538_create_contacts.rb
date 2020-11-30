class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.boolean :archived
      t.string :notes
      t.integer :project_id

      t.timestamps
    end
  end
end
