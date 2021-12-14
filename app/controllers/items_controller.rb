class ItemsController < ApplicationController
   before_action :check_authorization, except: [:create, :index, :destroy, :update, :find_by_name]
  before_action :set_item, only: [:show, :destroy, :update]

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

  def show_category_items

    items = Category.find(params[:category_id]).items
       render json:  items, status: :ok

  end

  def create
    item = Item.create(items_params)
    if item.valid?
      
      render json: item, status: :created
    else
      render json: {errors: item.errors.full_messages}, status: :unprocessable_entity 
    end
  end

  def update
      updated_item = @item.update(items_params)
      if updated_item
        render json: @item, status: :accepted
      else
        render json: {error: "Impossible to update item"}, status: :unprocessable_entity 
      end
      
  end  


  def destroy
      
    if @item.destroy

      head :no_content, status: :ok

    else
      ender json: {error: "Impossible to delete item"}, status: :unprocessable_entity 
    end
  end
    def find_by_name
          
          # @name_to_find = Item.where("item_name like ?", "%#{params[:item_name]}%")
          # byebug
          @name_to_find = Item.where("item_name like ?", "%#{params[:item_name]}%")

          if @name_to_find !=[]
            render json: @name_to_find , each_serializer: ItemsSerializer, status: :ok
          else 
            render json: {error: "NO MATCHING ITEMS"} , status: :not_found
          end
          
        end



  private

  def items_params
        params.permit(:id, :user_id, :city_id, :description, :item_type_id, :category_id, :item_name, :image)
  end

  def set_item
        @item = Item.find_by(id: params[:id])
  end


end
