class ScoresController < ApplicationController
  def index
    @scores = Score.all
    render json: @scores
  end

  def create
    @score = Score.create(score_params)
  end

  private

  def score_params
    params.require(:score).permit(:score, :name)
  end
end
