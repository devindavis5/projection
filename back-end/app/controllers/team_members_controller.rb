class TeamMembersController < ApplicationController
    
    def index
        team = TeamMember.all
        render json: team, only: [:name, :image, :user_id], :include => [
            project_tasks: { only: [:name, :importance, :deadline, :description, :status, :project_id ] }
        ]
    end

    def show
        team = TeamMember.where(user_id: params[:id])
        render json: team, only: [:name, :image, :user_id], :include => [
            project_tasks: { only: [:name, :importance, :deadline, :description, :status, :project_id ] }
        ]
    end

end
