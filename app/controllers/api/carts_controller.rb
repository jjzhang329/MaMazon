class Api::CartsController < ApplicationController

    def index 
        if logged_in?
            @cart = current_user.carts
            @products = current_user.items
            render "api/products/index"
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
        cart  = current_user.carts
        @user = current_user
        @item = cart.where(product_id: params[:cart][:product_id])
        new_quantity = @item[0].quantity + (params[:cart][:quantity].to_i)
        if @item.update(quantity: new_quantity)
           
            render "api/users/show"
        end 

    end 

    def destroy

    end


    def cart_params
        
        params.require(:cart).permit(:user_id, :product_id, :quantity)
    end
end
