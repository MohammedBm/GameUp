class Api::V1::RoomsController < Api::ApplicationController
  before_action :authenticate_user!

  def index
    @room = Room.order(created_at: :desc)
    render json: @room, include: ['comments' , 'room_users']
  end

end
