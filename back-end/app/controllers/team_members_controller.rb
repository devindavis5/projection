class TeamMembersController < ApplicationController
    
    def index
        team = TeamMember.all
        render json: team, only: [:name, :image, :user_id], :include => [
            project_tasks: { only: [:name, :importance, :deadline, :description, :archived, :project_id ] }
        ]
    end

    def show
        team = TeamMember.where(user_id: params[:id])
        render json: team, only: [:id, :name, :image, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived, :project_id ] }
        ]
    end

end
