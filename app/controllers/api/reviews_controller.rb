class Api::ReviewsController < ApplicationController


    def create 

        @review = Review.create(review_params)
        @product = Product.find_by(id: params[:review][:product_id])
        # @author = User.find_by(id: params[:review][:user_id]).name
        if @review.save
            render "api/products/show"
        else 
            render json: @review.errors.full_messages, status: 422
        end 
    end


    def udpate 
        @review = Review.find_by(id: params[:id])
        if @review.update
             render "api/products/show"
        end 
    end 

    def destroy
        @review = Review.find_by(id: params[:id])
        if  @review.destroy
             render "api/products/show"
        end 

    end

    def review_params
        params.require(:review).permit(:user_id, :product_id, :body, :rating, :headline)
    end 
end
