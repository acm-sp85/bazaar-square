class SessionsController < ApplicationController
  skip_before_action :check_authorization, only: :create


  def create
      # byebug
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
       session[:user_id] = user.id
          render json: user, status: :ok
    else
        render json: { error: "Invalid username or password"} , status: :unauthorized
    end
  end
  def logout
        session[:user_id] = nil
        render json: { status: 200, logged_out: true}
  end
end