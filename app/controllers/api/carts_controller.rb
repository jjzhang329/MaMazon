class Api::CartsController < ApplicationController

    def index 
        debugger
        if logged_in?
            @user = current_user
            # @items = current_user.items
            render "api/users/show"
        else
            render json:["Click below to sign-in"], status:422
        end 
    end
    
    def create 
         debugger
        @item = current_user.carts.create(cart_params)

        if @item.save 
            render json: @item
        else 
            render json: @cart.errors.full_messages, status:422
        end 
    end  

    def edit 


    end 

    def update 

    end 

    def destroy

    end


    def cart_params
        
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end
end
