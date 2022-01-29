json.extract! user, :id, :name, :email

if user.items.length != 0 
    json.cart do 
        #user.items.each do |item|
         #json.extract! item, :id, :name, :department, :description, :price 
            #json.photoUrl url_for(item.photo)
        #end
        json.array! user.items, :id
    end
else
    json.cart([])
end
