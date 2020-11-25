module OmdbApi
  extend ActiveSupport::Concern

  def initialize
    @options = { query: { apikey: ENV['OMDB_KEY'] } }
  end

  def find_movie(imdb_id)
    movie = Movie.find_by(imdb_id: imdb_id)

    if movie.nil?
      omdb_response = get_from_omdb_by_id(imdb_id)
      movie = Movie.create(omdb_response)
    end

    movie
  end

  private

  def get_from_omdb_by_id(imdb_id)
    response = HTTParty.get('http://www.omdbapi.com/', query_options(imdb_id))
    parse_response(response, imdb_id)
  end

  def query_options(imdb_id)
    @options[:query].merge!(i: imdb_id)
    @options
  end

  def parse_response(response, imdb_id)
    response.deep_transform_keys(&:downcase)
            .deep_symbolize_keys
            .slice(:title, :poster, :plot)
            .merge(imdb_id: imdb_id)
  end
end
