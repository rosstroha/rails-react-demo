class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.text :poster
      t.text :title
      t.text :imdb_id
      t.text :plot

      t.timestamps
    end
  end
end
