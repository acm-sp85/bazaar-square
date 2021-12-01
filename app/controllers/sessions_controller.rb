class SessionsController < ApplicationController
#   skip_before_action :check_authorization, only: :create

# FORCING MY USER TO BE LAST FOR NOW
    def create
      user = User..find_by(user_name: params[:user_name])
       session[:user_id] = user.id
          render json: user, status: :ok
    end
  end