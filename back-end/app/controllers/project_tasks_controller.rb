class ProjectTasksController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :update, :destroy]

    def index
        projecttasks = ProjectTask.all
        render json: projecttasks
    end
    
    def create
        ProjectTask.create(name: '', importance: '', deadline: params[:deadline], description: params[:description], status: 'incomplete', project_id: params[:projectId])
        project = Project.find(params[:projectId])
        render json: project, only: [:id, :name, :deadline, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :status], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :notes] } 
        ]
    end

    def update
        task = ProjectTask.find(params[:id])
        task.update(deadline: params[:deadline], description: params[:description], status: params[:status])
        project = task.find_project
        render json: project, only: [:id, :name, :deadline, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :status], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :notes] } 
        ]
    end

    def destroy
        task = ProjectTask.find(params[:id])
        project = task.find_project
        task.destroy
        render json: project, only: [:id, :name, :deadline, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :status], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :notes] } 
        ]
    end

end
