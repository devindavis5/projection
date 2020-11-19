class ProjectTasksController < ApplicationController

    def index
        projecttasks = ProjectTask.all
        render json: projecttasks
    end

end
