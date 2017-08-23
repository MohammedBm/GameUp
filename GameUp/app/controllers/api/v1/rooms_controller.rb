class Api::V1::RoomsController < ApplicationController
  def index
    @room = Room.order(created_at: :desc).includes(:user)
    render json: @room
  end

end
