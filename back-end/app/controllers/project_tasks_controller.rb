class ProjectTasksController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :update, :destroy]

    def index
        projecttasks = ProjectTask.all
        render json: projecttasks
    end
    
    def create
        pt = ProjectTask.create(name: '', importance: '', deadline: params[:deadline], description: params[:description], archived: false, project_id: params[:projectId])
        if pt.valid?
            project = Project.find(params[:projectId])
            render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
                project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
                contacts: { only: [:id, :name, :email, :phone, :notes] } 
            ]
        else
            flash[:errors] = pt.errors.full_messages 
        end
      
    end

    def update
        task = ProjectTask.find(params[:id])
        task.update(deadline: params[:deadline], description: params[:description], archived: params[:archived])
        if task.valid?
            project = task.find_project
            render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
                project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
                contacts: { only: [:id, :name, :email, :phone, :notes] } 
            ] 
        else
            flash[:errors] = task.errors.full_messages  
        end
       
    end

    def destroy
        task = ProjectTask.find(params[:id])
        project = task.find_project
        task.destroy
        render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :notes] } 
        ]
    end

end
