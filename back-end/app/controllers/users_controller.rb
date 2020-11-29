class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :show]

    def index
        users = User.all
        render json: users
    end
    
    def show
        # user = User.find(params[:id])
        user = current_user
        render json: user, only: [:id, :name, :email, :password, :image], :include => [
          projects: { only: [:id, :name, :deadline, :notes, :user_id], :include => [
            project_tasks: { only: [:id, :name, :importance, :deadline, :description, :status], include: { team_members: { only: [:id, :name, :image]} } },
            contacts: { only: [:id, :name, :email, :phone, :notes] } 
          ]},
          daily_tasks: { only: [:id, :description, :deadline, :archived] },
          team_members: { only: [:id, :name, :image] }
        ]
    end

    def profile
        render json: { user: current_user }, status: :accepted
      end

    def create
        @user = User.create(user_params)
        if @user.valid?
          @token = encode_token(user_id: @user.id)
          render json: { user: @user, jwt: @token }, status: :created
        else
          render json: { error: 'failed to create user' }, status: :not_acceptable
        end
    end

    # def update
    #     user = User.find(params[:id])
    #     user.update(image: params[:image])
    #     render json: user
    # end
     
    private
     
    def user_params
        params.require(:user).permit(:name, :email, :password, :image)
    end

    
end
