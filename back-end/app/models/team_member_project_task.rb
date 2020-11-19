class TeamMemberProjectTask < ApplicationRecord
    belongs_to :project_task
    belongs_to :team_member
end
