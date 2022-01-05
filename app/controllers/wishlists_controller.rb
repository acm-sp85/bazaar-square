class WishlistsController < ApplicationController
     def index

    lists = Wishlist.all
    render json: lists, each_serializer: WishlistSerializer, status: :ok
end

  def create
    wish = Wishlist.create(wishlist_params)
    if wish.valid?
      
      render json: wish, status: :created , serializer: WishlistSerializer

    else
      render json: {errors: wish.errors.full_messages}, status: :unprocessable_entity 
    end
  end


  private

  def wishlist_params
        params.permit(:id, :user_id, :name, :item_id)
  end
end
