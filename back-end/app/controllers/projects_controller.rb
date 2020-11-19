class ProjectsController < ApplicationController

    def index
        projects = Project.all
        render json: projects, only: [:name, :deadline, :notes, :user_id], :include => [
            project_tasks: { only: [:name, :importance, :deadline, :description, :status], include: { team_members: { only: [:name, :image]} } },
            contacts: { only: [:name, :email, :phone, :notes] }
            ]
    end

    def show
        project = Project.where(user_id: params[:id])
        render json: project, only: [:name, :deadline, :notes, :user_id], :include => [
            project_tasks: { only: [:name, :importance, :deadline, :description, :status], include: { team_members: { only: [:name, :image]} } },
            contacts: { only: [:name, :email, :phone, :notes] }
            ]
    end

end
