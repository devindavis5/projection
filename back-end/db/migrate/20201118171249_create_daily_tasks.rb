class CreateDailyTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :daily_tasks do |t|
      t.string :description
      t.date :deadline
      t.boolean :archived
      t.integer :user_id

      t.timestamps
    end
  end
end
