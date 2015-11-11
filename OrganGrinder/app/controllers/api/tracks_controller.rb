class Api::TracksController < ApplicationController

  def create
    render json: Track.create!(
      name: params[:track][:name], roll: params[:track][:roll]
    )
  end

  def index
    render json: Track.all
  end

  def destroy
    render json: Track.find(params[:id]).destroy!
  end

  private

    def track_params
      params.require(:track).permit(:name, :roll)
    end

end
