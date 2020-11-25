class ProjectTask < ApplicationRecord
    belongs_to :project
    has_many :team_member_project_tasks
    has_many :team_members, through: :team_member_project_tasks

    def find_project
        Project.all.select { |p| p.project_tasks.include?(self) }
    end
end
