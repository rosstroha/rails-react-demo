class AddBlankValidationToTriviaBody < ActiveRecord::Migration[6.0]
  def change
    change_column :trivia, :body, :text, presence: true, allow_blank: false
  end
end
