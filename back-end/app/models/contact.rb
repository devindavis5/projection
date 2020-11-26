class Contact < ApplicationRecord
    belongs_to :project
    validates :name, presence: true

    def find_project
        Project.all.select { |p| p.contacts.include?(self) }
    end
end
