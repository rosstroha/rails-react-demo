json.extract! movie, :id, :poster, :title, :imdb_id, :plot, :created_at, :updated_at
json.url movie_url(movie, format: :json)
