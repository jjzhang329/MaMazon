json.photoUrl url_for(@product.photo)
json.extract! @product, :id, :name, :department, :description, :price 
