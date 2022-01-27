class Api::ProductsController < ApplicationController
    def index 
        # puts params[:filter]
        # debugger
        if(params[:filter]["department"].length > 1)

            @products = Product.where(department: params[:filter]) 
        else
            @products = Product.all
        end 
        
        render :index
    end 

    def show 
        @product = Product.find_by(id: params[:id])
        render:show
    end 


    def product_params
        params.require(:product).permit(:name, :description, :department)
    end
end
