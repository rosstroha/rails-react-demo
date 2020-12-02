class ApplicationController < ActionController::Base
  rescue_from ActionController::InvalidAuthenticityToken do |exception|
    render json: exception, status: 422
  end
end
