class DailyTasksController < ApplicationController

    def index
        list = DailyTask.all
        render json: list, only: [:id, :description, :deadline, :status, :user_id]
    end

    def show
        list = DailyTask.where(user_id: params[:id])
        render json: list, only: [:id, :description, :deadline, :status, :user_id]
    end
end
