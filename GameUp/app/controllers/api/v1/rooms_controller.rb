class Api::V1::RoomsController < Api::ApplicationController
  before_action :authenticate_user!

  def index
    @rooms = Room.order(created_at: :desc)
    render json: @rooms
  end

  def show
    @room = Room.find(params[:id])
    render json: @room
  end

end
