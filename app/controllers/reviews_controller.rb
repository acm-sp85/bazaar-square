class ReviewsController < ApplicationController
    before_action :check_authorization, except: [:create, :index]
    before_action :set_review, only: [:show, :destroy, :update]

    def index
        reviews = Review.all 
         render json: reviews, each_serializer: ReviewSerializer

    end

    def show
    if @review 
      render json:  @review, serializer: ReviewSerializer, status: :ok
    else
      render json: {error: "Review not found"} , status: :not_found
    end
    end

    def create
    review = Review.create(reviews_params)
    if review.valid?
      
      render json: review, status: :created

    else
      render json: {errors: review.errors.full_messages}, status: :unprocessable_entity 
    end
    end

    def update
      updated_review = @review.update(reviews_params)
      if updated_review
        render json: @review, status: :accepted
      else
        render json: {error: "Impossible to update review"}, status: :unprocessable_entity 
      end
      
    end  

    def destroy
      
    if @review.destroy

      head :no_content, status: :ok

    else
      ender json: {error: "Impossible to delete review"}, status: :unprocessable_entity 
    end
    end
    



      private

  def reviews_params
        params.permit(:id, :item_id, :user_id, :review_content , :review_rating, :review_type , :review_title, :author_id)
  end

  def set_review
        @review = Review.find_by(id: params[:id])
  end
end
