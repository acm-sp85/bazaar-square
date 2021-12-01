class ApplicationController < ActionController::API
include ActionController::Cookies


  before_action :check_authorization
  def check_authorization
    return render json:{error: "Not authorized"}, status: :unauthorized unless session.include? :user_id

  end

  private
  def user

    @user ||= User.find_by_id(session[:user_id]) if session[:user_id]

  end
end
