class ProjectsController < ApplicationController
    skip_before_action :authorized, only: [:index, :archive, :show, :create, :update, :destroy]

    def index
        projects = Project.all
        render json: projects, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :archived, :notes] }
        ]
    end

    def show
        project = Project.find(params[:id])
        render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :archived, :notes] }
        ]
    end

    def create
        project = Project.create(name: params[:name], deadline: '', archived: params[:archived], notes: 'Notes:', user_id: params[:user_id])
        if project.valid?
            render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
                project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
                contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
            ]
        else
            flash[:errors] = project.errors.full_messages 
        end
    end

    def archive
        tasks = params[:tasks]
        tasks.each { |t| 
            task = ProjectTask.find(t)
            task.update(archived: false)
        }

        contacts = params[:contacts]
        contacts.each { |c| 
            contact = Contact.find(c)
            contact.update(archived: false)
        }

        user = current_user
        render json: user, only: [:id, :name, :email, :image], :include => [
        projects: { only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived, :project_id], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
        ]},
        daily_tasks: { only: [:id, :description, :deadline, :archived] },
        team_members: { only: [:id, :name, :image], include: { project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived, :project_id] } } }
        ]
    end

    def update
        project = Project.find(params[:id])

        if params[:notes] == ""
            notes = "Notes:"
        else 
            notes = params[:notes]
        end 

        project.update(name: params[:name], notes: notes, archived: params[:archived])
        if project.valid?
            render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
                project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
                contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
            ]
        else
            flash[:errors] = project.errors.full_messages 
        end
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy
    end

end
