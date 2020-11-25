class MovieController < ApplicationController
  OMDB_URL='http://www.omdbapi.com/'.freeze

  def index
    # This will be provided by the client
    imdb_id = 'tt4158110'

    options = { query: { apikey: ENV['OMDB_KEY'], i: imdb_id } }

    # imdb_id should probably be unique
    movie = Movie.find_by(imdb_id: imdb_id)

    unless Movie.exists?
      response = HTTParty.get(OMDB_URL, options)
                         .parsed_response
                         .deep_transform_keys(&:downcase)
                         .deep_symbolize_keys
                         .slice(:title, :poster, :plot)
      response.merge!(imdb_id: imdb_id)
      movie = Movie.create(response)
    end

    render json: movie
  end
end
