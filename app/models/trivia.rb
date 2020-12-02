class Trivia < ApplicationRecord
  belongs_to :movie
  validates :body, presence: true, allow_blank: false
end
