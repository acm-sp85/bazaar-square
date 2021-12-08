class CategoriesController < ApplicationController

   before_action :check_authorization, except: [:create, :index]


    def index

        categories = Category.all
        render json: categories
  end
  


  private
  
 
end
