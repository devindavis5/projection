class TeamMemberProjectTasksController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :destroy]

    def index
        tmpts = TeamMemberProjectTask.all
        render json: tmpts
    end

    # def create
    #     # byebug
    #     team = params[:newTeam]
    #     team.each { | tm | TeamMemberProjectTask.create(team_member_id: tm, project_task_id: params[:project_task_id]) }
    #     project = Project.find(params[:project_id])
    #     # tmpt = TeamMemberProjectTask.create(team_member_id: params[:team_member_id], project_task_id: params[:project_task_id])
    #     render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
    #         project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
    #         contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
    #     ]  
    # end

    def create
        # byebug
        old_team = params[:oldTeam]
        i = 0
        while i < old_team.length
            tmpt = TeamMemberProjectTask.where(['team_member_id = :team_member_id and project_task_id = :project_task_id', { team_member_id: old_team[i], project_task_id: params[:project_task_id] }])
            # { | tmpt | tmpt.team_member_id = old_team[i] && tmpt.project_task_id = params[:project_task_id] }
            # byebug
            # TeamMemberProjectTask.find_by(id: tmpt.id).destroy
            tmpt[0].destroy
            i += 1
        end

        new_team = params[:newTeam]
        new_team.each { | tm | TeamMemberProjectTask.create(team_member_id: tm, project_task_id: params[:project_task_id]) }
        project = Project.find(params[:project_id])
        # tmpt = TeamMemberProjectTask.create(team_member_id: params[:team_member_id], project_task_id: params[:project_task_id])
        user = current_user
        render json: user, only: [:id, :name, :email, :image], :include => [
          projects: { only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived, :project_id], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
          ]},
          daily_tasks: { only: [:id, :description, :deadline, :archived] },
          team_members: { only: [:id, :name, :image], include: { project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived, :project_id] } } }
        ]
        # render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
        #     project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
        #     contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
        # ]  
    end

    # def destroy
    #     # byebug
    #     # tmpt = TeamMemberProjectTask.find(team_member_id: params[:team_member_id], project_task_id: params[:project_task_id])
    #     team = params[:oldTeam]

    #     i = 0
    #     while i < team.length
    #         tmpt = TeamMemberProjectTask.all.find { | tmpt | tmpt.team_member_id = team[i] && tmpt.project_task_id = params[:project_task_id] }
    #         TeamMemberProjectTask.destroy(tmpt.id)
    #         i += 1
    #     end
        

        # team.each { | tm | 
        #     tmpt = TeamMemberProjectTask.all.find { | tmpt | tmpt.team_member_id = tm && tmpt.project_task_id = params[:project_task_id] }
        #     tmpt.destroy
        # } 
        # project = Project.find(params[:project_id])
        # render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
        #     project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
        #     contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
        # ]
    # end
end
