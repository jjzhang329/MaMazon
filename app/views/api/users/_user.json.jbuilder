
json.extract! user, :id, :name, :email

if user.items.length != 0 
    json.cart user.item_ids 

    count = 0
    user.carts.each do |cart| 
        count += cart.quantity
    end
    json.cartCount count
        #user.items.each do |item|
        #json.extract! item, :id, :name, :department, :description, :price 
            #json.photoUrl url_for(item.photo)
        #end
        # json.array! user.items, :id                
else
    json.cart([])
end

