
import { Add_to_cart,Remove_to_cart,Set_product_list } from "./constant"
const initialvalue = {
    cartdata: [],
    allproduct:[]
}
const mycartreducer = (state=initialvalue,action) => {
    
    switch (action.type) {

        case Set_product_list:
            return {
                ...state,
                allproduct: [...action.data]
            };
        
        case Add_to_cart:
           
            return {
                ...state,
                cartdata:[...state.cartdata,action.data]
            
            };
        
        case Remove_to_cart:
            let duedata=state.cartdata.filter((item)=>item.id!==action.data)
             console.log(action.data)
            return {
                ...state,
                cartdata:[...duedata]
             }
        
        default:
            return state
    }
}

export default mycartreducer;