json.photoUrl url_for(@product.photo)
json.extract! @product, :id, :name, :department, :description, :price

json.reviews do

    if(@product.reviews.length >= 1) 
        json.array! @product.reviews, :user, :id, :headline, :body, :rating, :product_id, :created_at, :updated_at           

    end
    
end
