class Movie < ApplicationRecord
  has_many :trivia, class_name: 'Trivia'
end
