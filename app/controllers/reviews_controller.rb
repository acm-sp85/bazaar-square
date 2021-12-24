class ReviewsController < ApplicationController

    def index
        reviews = Review.all 
         render json: reviews, each_serializer: ReviewSerializer

    end
    
end
