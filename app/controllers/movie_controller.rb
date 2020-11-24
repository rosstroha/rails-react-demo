class MovieController < ApplicationController
  OMDB_URL='http://www.omdbapi.com/'.freeze

  def index
    options = { query: { apikey: 'd492728c', i: 'tt4158110' } }
    render json:  HTTParty.get(OMDB_URL, options).parsed_response
  end
end
