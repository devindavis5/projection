class ContactsController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :update, :destroy]

    def index
        contacts = Contact.all
        render json: contacts
    end

    def create
        contact = Contact.create(name: params[:name], email: params[:email], phone: params[:phone], archived: false, notes: params[:notes], project_id: params[:projectId])
        if contact.valid?
            project = Project.find(params[:projectId])
            render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
                project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
                contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
            ]
        else
            flash[:errors] = contact.errors.full_messages 
        end
      
    end

    def update
        contact = Contact.find(params[:id])
        contact.update(name: params[:name], email: params[:email], phone: params[:phone], archived: params[:archived], notes: params[:notes])
        if contact.valid?
            project = contact.find_project
            render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
                project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
                contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
            ] 
        else
            flash[:errors] = contact.errors.full_messages  
        end
       
    end

    def destroy
        contact = Contact.find(params[:id])
        project = contact.find_project
        contact.destroy
        render json: project, only: [:id, :name, :deadline, :archived, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :archived], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :archived, :notes] } 
        ]
    end

end
