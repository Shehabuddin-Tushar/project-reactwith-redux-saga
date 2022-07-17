import { Add_to_cart, Product_list, Remove_to_cart, Search_product } from "./constant"

export const add_to_cart =(data) => {
    return {
        type: Add_to_cart,
        data
    }
}

export const remove_to_cart = (data) => {
    return {
        type: Remove_to_cart,
        data
    }
}


export const product_list = () => {
    
    return {
        type: Product_list,
        
    }
}

export const search_product = (query) => {
    
    return {
        type: Search_product,
        query
    }
}