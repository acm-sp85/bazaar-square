class ApplicationController < ActionController::API
include ActionController::Cookies
 private

  def user

    @user ||= User.find_by_id(session[:user_id]) if session[:user_id]

  end
end
