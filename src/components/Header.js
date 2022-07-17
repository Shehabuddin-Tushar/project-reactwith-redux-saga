import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { search_product } from '../redux/action';
function Header() {
   const dispatch = useDispatch();
    const mydata = useSelector(state => state.mycartreducer.cartdata)
    

  return (
    <div><h1>This is my cart header ({mydata?.length})</h1>
      <input type="text" onChange={(e) => dispatch(search_product(e.target.value))} /> 
      </div>
  )
}

export default Header