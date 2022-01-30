json.extract! user, :id, :name, :email

    if user.items.length != 0 
        json.cart user.item_ids 
            #user.items.each do |item|
            #json.extract! item, :id, :name, :department, :description, :price 
                #json.photoUrl url_for(item.photo)
            #end
            # json.array! user.items, :id
                
    else
        json.cart([])
   end

