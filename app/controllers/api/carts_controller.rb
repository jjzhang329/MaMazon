class Api::CartsController < ApplicationController

    def index 
        if logged_in?
            @user = current_user
            # @items = current_user.items
            render "api/users/show"
        else
            render json:["Click below to sign-in"], status:422
        end 
    end
    
    def create 
        @item = current_user.carts.create(cart_params)

        if @item.save 
            render json: @item
        else
            render json: @cart.errors.full_messages, status:422
        end 
    end  


    def update 
        debugger
        cart  = current_user.carts
        item = cart.where(product_id: params[:cart][:product_id])
        item[quantity] += params[:cart][:quantity]
    end 

    def destroy

    end


    def cart_params
        
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end
end
