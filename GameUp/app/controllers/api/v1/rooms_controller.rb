class Api::V1::RoomsController < ApplicationController
  def index
    @room = Room.order(created_at: :desc)
    render json: @room, include: 'comments'
  end

end
