import { put, takeEvery } from 'redux-saga/effects'
import { Product_list, Search_product, Set_product_list } from './constant';

function* getproduct() {
    let result = yield fetch('http://localhost:3500/product')
    let mydata = yield result.json();
   
    yield put({type:Set_product_list,data:mydata})
}

function* searchproduct(data) {
    console.log("search",data.query)
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`)
    let mydatas = yield result.json();
    console.log("hiredata",mydatas)
    yield put({ type: Set_product_list, data: mydatas })
}
function* productsaga() {
    yield takeEvery(Product_list, getproduct) 
    yield takeEvery(Search_product, searchproduct) 
    
}
export default productsaga;