class MovieController < ApplicationController
  include OmdbApi

  def index
    render json: find_movie(imdb_id)
  end

  private

  def imdb_id
    params.dig('imdb_id')
  end
end
