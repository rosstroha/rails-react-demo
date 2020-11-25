module OmdbApi
  extend ActiveSupport::Concern
  include HTTParty
  base_uri 'http://www.omdbapi.com/'

  def initialize
    @options = { query: { apikey: ENV['OMDB_KEY'] } }
  end

  def find_movie(imdb_id)
    movie = Movie.find_by(imdb_id: imdb_id)

    unless movie.persisted?
      omdb_response = get_from_omdb_by_id(imdb_id)
      movie = Movie.create(omdb_response)
    end

    movie
  end

  private

  def get_from_omdb_by_id(imdb_id)
    response = HTTParty.get(OMDB_URL, query_options)
                       .parsed_response
                       .deep_transform_keys(&:downcase)
                       .deep_symbolize_keys
                       .slice(:title, :poster, :plot)
    response.merge(imdb_id: imdb_id)
  end

  def query_options
    @options.merge!(i: imdb_id)
  end
end
