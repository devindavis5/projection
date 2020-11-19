class Project < ApplicationRecord
    belongs_to :user
    has_many :project_tasks
    has_many :contacts
end
