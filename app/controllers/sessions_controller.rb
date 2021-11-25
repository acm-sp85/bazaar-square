class SessionsController < ApplicationController
#   skip_before_action :check_authorization, only: :create

# FORCING MY USER TO BE LAST FOR NOW
    def create
      user = User.last
       session[:user_id] = user.id
          render json: user, status: :ok
    end
  end