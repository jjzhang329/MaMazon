export const fetchItems =()=>{
  return  $.ajax({
        method:"GET",
        url:"/api/carts"
    })
}

export const createCart = (cart)=>{
   return $.ajax({
        method: "POST",
        url: "/api/carts",
        data: {cart}
    })
}

export const updateCart = (cartItemObject)=>{
  return  $.ajax({
        method: "PATCH",
        url: `/api/carts/${cartItemObject.id}`,
        data: { cartItemObject }
    })
}

