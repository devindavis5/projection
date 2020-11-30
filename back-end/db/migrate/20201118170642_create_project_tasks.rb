class CreateProjectTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :project_tasks do |t|
      t.string :name
      t.string :importance
      t.date :deadline
      t.string :description
      t.boolean :archived
      t.integer :project_id

      t.timestamps
    end
  end
end
