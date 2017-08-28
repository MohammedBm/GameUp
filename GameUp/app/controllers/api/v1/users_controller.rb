class Api::V1::UsersController < Api::ApplicationController

    def new

      @user = User.new
    end

    def index
      @user = User.order(created_at: :desc)
      render json: @user
    end

    def create
      @user = User.new user_params
      else
        puts 'user not save'
      end
    end

    def show
      @user = User.find params[:id]
    end

    private

    def user_params
      params.require(:user).permit(
        :full_name,
        :username,
        :email,
        :password_digest
      )

    end
end
