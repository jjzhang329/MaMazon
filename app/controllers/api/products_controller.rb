class Api::ProductsController < ApplicationController
    def index 
        # puts params[:filter]
      
        if(params[:filter][:department] != "")
            @products = Product.where(department: params[:filter][:department]) 
        else
            #   debugger
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
