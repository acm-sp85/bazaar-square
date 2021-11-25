class UsersController < ApplicationController
     before_action :set_user, only: [:show]
    def index

        users = User.all
        render json: users, each_serializer: UsersSerializer
  end
  def show
    if @user 
      render json:  @user, serializer: UsersSerializer, status: :ok
    else
      render json: {error: "User not found"} , status: :not_found
    end
  end

  def logged_id
    # byebug
            if session[:user_id] 
            render json: @user
            
        else
            render json: {error: "User not logged in"}, status: :unauthorized
        end
  end



  private

  def user_params
        params.permit(:id, :name, :email, :phone, :city_id)
  end

  def set_user
        @user = User.find_by(id: params[:id])
  end
 
end
