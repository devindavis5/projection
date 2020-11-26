class ProjectsController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create]

    def index
        projects = Project.all
        render json: projects, only: [:id, :name, :deadline, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :status], include: { team_members: { only: [:name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :notes] }
        ]
    end

    def show
        project = Project.find(params[:id])
        render json: project, only: [:id, :name, :deadline, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :status], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :notes] }
        ]
    end

    def create
        project = Project.create(name: params[:name], deadline: '', notes: '', user_id: params[:user_id])
        if project.valid?
            render json: project, only: [:id, :name, :deadline, :notes, :user_id], :include => [
                project_tasks: { only: [:id, :name, :importance, :deadline, :description, :status], include: { team_members: { only: [:id, :name, :image]} } },
                contacts: { only: [:id, :name, :email, :phone, :notes] } 
            ]
        else
            flash[:errors] = project.errors.full_messages 
        end
    end

end
