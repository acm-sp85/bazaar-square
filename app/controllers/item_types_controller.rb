class ItemTypesController < ApplicationController
    before_action :set_item_type, only: [:show]

def index
 types = ItemType.all
render json: types, each_serializer: ItemTypesSerializer , status: :ok
  end

  def show
    if @type 
      render json:  @type, serializer: ItemTypesSerializer , status: :ok
    else
      render json: {error: "Item type not found"} , status: :not_found
    end
  end



  private


  def set_item_type
        @type = ItemType.find_by(id: params[:id])
  end
end
