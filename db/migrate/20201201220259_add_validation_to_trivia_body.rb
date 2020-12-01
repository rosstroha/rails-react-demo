class AddValidationToTriviaBody < ActiveRecord::Migration[6.0]
  def change
    change_column :trivia, :body, :text, presence: true
  end
end
