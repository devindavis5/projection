class TeamMemberProjectTasksController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :destroy]

    def index
        tmpts = TeamMemberProjectTask.all
        render json: tmpts
    end

    def create
        project = Project.find(params[:project_id])
        tmpt = TeamMemberProjectTask.create(team_member_id: params[:team_member_id], project_task_id: params[:project_task_id])
        render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
        ]  
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
