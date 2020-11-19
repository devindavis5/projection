class CreateTeamMemberProjectTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :team_member_project_tasks do |t|
      t.integer :project_task_id
      t.integer :team_member_id

      t.timestamps
    end
  end
end
