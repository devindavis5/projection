class DailyTasksController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create, :update, :destroy]

    def index
        list = DailyTask.all
        render json: list, only: [:id, :description, :deadline, :archived, :user_id]
    end

    def show
        list = DailyTask.where(user_id: params[:id])
        render json: list, only: [:id, :description, :deadline, :archived, :user_id]
    end

    def create
        task = DailyTask.create(description: params[:description], deadline: '', archived: false, user_id: params[:user_id])
        if task.valid?
            render json: task, only: [:id, :description, :deadline, :archived]    
        else
            flash[:errors] = task.errors.full_messages 
        end
        # render json: task, only: [:id, :description, :deadline, :status] 
    end

    def update
        task = DailyTask.find(params[:id])
        task.update(description: params[:description], archived: params[:archived])
        if task.valid?
            render json: task, only: [:id, :description, :deadline, :archived]    
        else
            flash[:errors] = task.errors.full_messages 
        end
    end

    def destroy
        task = DailyTask.find(params[:id])
        task.destroy
    end
end
