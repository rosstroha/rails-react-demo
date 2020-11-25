class MovieController < ApplicationController
  include OmdbApi

  def index
    # This will be provided by the client
    imdb_id = 'tt4158110'

    render json: find_movie(imdb_id)
  end
end
