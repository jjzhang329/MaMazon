export const fetchAllProducts = filter =>{
    return $.ajax({
        method: "GET",
        url: "/api/products",
        data:{filter: filter}
    })
}

export const fetchProduct = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/products/${id}`
    })
}

