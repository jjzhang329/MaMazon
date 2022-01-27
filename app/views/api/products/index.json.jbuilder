@products.each do |product|
    json.set! product.id do 
        json.photoUrl url_for(product.photo)
        json.extract! product, :id, :name, :department, :description, :price 
    end
end