class DailyTasksController < ApplicationController
    skip_before_action :authorized, only: [:index, :show, :create, :update, :destroy]

    def index
        list = DailyTask.all
        render json: list, only: [:id, :description, :deadline, :status, :user_id]
    end

    def show
        list = DailyTask.where(user_id: params[:id])
        render json: list, only: [:id, :description, :deadline, :status, :user_id]
    end

    def create
        task = DailyTask.create(description: params[:description], deadline: '', status: 'incomplete', user_id: params[:user_id])
        if task.valid?
            render json: task, only: [:id, :description, :deadline, :status]    
        else
            flash[:errors] = task.errors.full_messages 
        end
        # render json: task, only: [:id, :description, :deadline, :status] 
    end

    def update
        task = DailyTask.find(params[:id])
        task.update(description: params[:description], status: params[:status])
        if task.valid?
            render json: task, only: [:id, :description, :deadline, :status]    
        else
            flash[:errors] = task.errors.full_messages 
        end
    end
end
