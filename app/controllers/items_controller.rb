class ItemsController < ApplicationController
   before_action :check_authorization, except: [:create, :index, :destroy, :update, :find_by_name, :show_category_items, :show_city_items, :last_items_added, :total]
  before_action :set_item, only: [:show, :destroy, :update]

    def index

        items = Item.all
        render json: items, each_serializer: ItemsSerializer, status: :ok
  end
  def show
    if @item 
      render json:  @item, serializer: ItemsSerializer, status: :ok
    else
      render json: {error: "Item not found"} , status: :not_found
    end
  end

  def total
    total = Item.count
    render json: total, status: :ok

  end

  def show_category_items

      items = Category.find(params[:category_id]).items
       render json: items, each_serializer: ItemsSerializer, status: :ok

  end

  def show_city_items
      items = City.find(params[:city_id]).items
       render json: items, each_serializer: ItemsSerializer, status: :ok
  end

  def last_items_added
    last_added = Item.all.reverse().slice(0, 6)
    if last_added
      render json: last_added, each_serializer: ItemsSerializer, status: :ok
    else
      render json: {errors: last_items_added.errors.full_messages}, status: :unprocessable_entity 

    end
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
      # @name_to_find = Item.where("lower(item_name) || item_name like ?", "%#{params[:item_name]}%")
          @name_to_find = Item.joins(:user).joins(:city).joins(:item_type).joins(:category).where("category_name || lower(category_name) || name || lower(name) || city_name || lower(city_name)|| lower(item_name) || item_name || user_name || lower(user_name) like ?", "%#{params[:item_name]}%")

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
