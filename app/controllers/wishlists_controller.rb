class WishlistsController < ApplicationController
  before_action :check_authorization, except: [:destroy]
  before_action :set_wishlists, only: [:destroy]
     def index

    lists = Wishlist.all
    render json: lists, each_serializer: WishlistSerializer, status: :ok
end

def show
    if @wishlist 
      render json: @wishlist, serializer: WishlistSerializer, status: :ok
      
    else
      render json: {error: "Wish not found"} , status: :not_found
    end

end

  def create
    wish = Wishlist.create(wishlist_params)
    if wish.valid?
      
      render json: wish, status: :created , serializer: WishlistSerializer

    else
      render json: {errors: wish.errors.full_messages}, status: :unprocessable_entity 
    end
  end

    def destroy
      
    if @wishlist.destroy

      head :no_content, status: :ok

    else
      render json: {error: "Impossible to delete wishlist item"}, status: :unprocessable_entity 
    end
  end


  private

  def wishlist_params
        params.permit(:id, :user_id, :name, :item_id)
  end
  def set_wishlists
        @wishlist =  Wishlist.find(params[:id])
  end
end
