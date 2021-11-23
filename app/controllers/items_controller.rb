class ItemsController < ApplicationController
  before_action :set_item, only: [:show]
    def index

        items = Item.all
        render json: items, each_serializer: ItemsSerializer
  end
  def show
    if @item 
      render json:  @item, serializer: ItemsSerializer, status: :ok
    else
      render json: {error: "Item not found"} , status: :not_found
    end
  end

  private

  def items_params
        params.permit(:id, :name, :city_id, :description, :item_type_id, :category_id)
  end

  def set_item
        @item = Item.find_by(id: params[:id])
  end


end
