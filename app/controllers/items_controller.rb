class ItemsController < ApplicationController
    def index

        items = Item.all
        render json: items, each_serializer: ItemsSerializer
  end
end
