class CreateProjectTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :project_tasks do |t|
      t.string :name
      t.string :importance
      t.string :deadline
      t.string :description
      t.string :status
      t.integer :project_id

      t.timestamps
    end
  end
end
