@products.each do |product|
    json.set! product.id do         
        json.extract! product, :id, :name, :department, :description, :price 
        json.photoUrl url_for(product.photo)

        if(@cart.length >= 1)
            json.quantity @cart.where(product_id: product.id).first.quantity
        end
        json.reviews do
            if(product.reviews.length >= 1) 
                json.array! product.reviews, :user, :id, :headline, :body, :rating, :product_id, :created_at, :updated_at           

            end
        end

    end
end