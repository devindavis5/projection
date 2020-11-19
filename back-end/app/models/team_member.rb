class TeamMember < ApplicationRecord
    belongs_to :user
    has_many :team_member_project_tasks
    has_many :project_tasks, through: :team_member_project_tasks
end
