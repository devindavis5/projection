class User < ApplicationRecord
    has_many :projects
    has_many :project_tasks, through: :projects
    has_many :team_members
    has_many :daily_tasks
    has_secure_password
    validates :name, uniqueness: { case_sensitive: false }
    validates :email, uniqueness: { case_sensitive: false }
end
