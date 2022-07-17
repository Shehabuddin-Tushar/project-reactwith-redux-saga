import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import  {add_to_cart, product_list, remove_to_cart} from '../redux/action';
import { useSelector } from 'react-redux'
function Main() {
  
    const dispatch = useDispatch();
    const mydata = useSelector(state => state.mycartreducer.cartdata)
  const myproduct = useSelector(state => state.mycartreducer.allproduct)
  console.log("tushar", myproduct)
  useEffect(() => {
    dispatch(product_list())
  },[])
  return (
      <div>
          <h3>This is main section cart product({mydata?.length})</h3>
          
          
      <div style={{ backgroundColor: "",display:"flex" }}>
        {
          myproduct?.map((item,index) => {
            return (
              <div style={{backgroundColor:"blue",padding:"10px",margin:"5px"}} key={index}>
                <h5>{item.name}</h5><br />
                <button onClick={() => dispatch(add_to_cart(item))}>add to cart</button>
                <button onClick={() => dispatch(remove_to_cart(item.id))}>remove to cart</button>
              </div>

            )
          })
        }
      </div>      
      
    </div>
  )
}

export default Main