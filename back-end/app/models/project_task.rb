class ProjectTask < ApplicationRecord
    belongs_to :project
    has_many :team_member_project_tasks
    has_many :team_members, through: :team_member_project_tasks
end
