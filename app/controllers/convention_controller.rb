class ConventionController < ApplicationController
  def index
    @convention_characters = ConventionCharacter.all
    render json: @convention_characters
  end
end
