class Api::ProductsController < ApplicationController
    def index        
        @cart = []
        if(params[:filter][:department] != "")               
            if((params[:filter][:name] != nil )& (params[:filter][:name] != ""))
                products = Product.where(department: params[:filter][:department]).to_a
                @products = []
               products.map do |product| 
                    name = product.name.split(' ')[0].downcase
                    filter = params[:filter][:name].split(' ')[0].downcase
                    @products.push(product)if(name.start_with?(filter))     
                end      
            else
                @products = Product.where(department: params[:filter][:department])           
            end
        elsif ((params[:filter][:name] != nil )& (params[:filter][:name] != ""))           
            products = Product.all.to_a
           @products= []
           products.map do |product| 
                name = product.name.split(" ")[0].downcase
                filter = params[:filter][:name].split(' ')[0].downcase
                if(name.start_with?(filter))
    
                    @products.push(product)
                end 
            end         
        else
            @products = Product.all
        end 
        render :index
    end 

    def show 
        @product = Product.with_attached_photos.find(params[:id])
        render:show
    end 


    def product_params
        params.require(:product).permit(:name, :description, :department)
    end
end
