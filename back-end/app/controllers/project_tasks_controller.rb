class ProjectTasksController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :update, :destroy]

    def index
        projecttasks = ProjectTask.all
        render json: projecttasks
    end
    
    def create
        project = Project.find(params[:projectId])
        pt = ProjectTask.create(name: project.name, importance: '', deadline: params[:deadline], description: params[:description], archived: false, project_id: params[:projectId])
        if pt.valid?
            project = Project.find(params[:projectId])
            render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
                project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
                contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
            ]
        else
            flash[:errors] = pt.errors.full_messages 
        end
      
    end

    def update
        task = ProjectTask.find(params[:id])
        task.update(deadline: params[:deadline], description: params[:description], archived: params[:archived])
        if task.valid?
            user = current_user
            render json: user, only: [:id, :name, :email, :image], :include => [
            projects: { only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
                project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived, :project_id], include: { team_members: { only: [:id, :name, :image]} } },
                contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
            ]},
            daily_tasks: { only: [:id, :description, :deadline, :archived] },
            team_members: { only: [:id, :name, :image], include: { project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived, :project_id] } } }
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
            contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
        ]
    end

end
