class CreateDailyTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :daily_tasks do |t|
      t.string :description
      t.string :deadline
      t.string :status
      t.integer :user_id

      t.timestamps
    end
  end
end
