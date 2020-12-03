class DailyTask < ApplicationRecord
    belongs_to :user
    validates :description, presence: true
    validates :deadline, presence: true
end
