class MovieController < ApplicationController
  include OmdbApi

  def index
    render json: find_movie(imdb_id_param)
  end

  private

  def imdb_id_param
    params.dig('imdb_id')
  end
end
