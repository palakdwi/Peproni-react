import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../cartContext'

const Product = (props) => {
const { cart }= useContext( cartContext )
   const { product } = props
   const addToCart = (event, product) => {
    event.preventDefault()
    let _cart = {...cart}


    /*  const cart = {
           items: {

           },
           totalItems:
       }
   }*/
    return (
        <Link to={`/products/${product._id}`}>
        <div>
                   <img src={product.image} alt="pizza"></img>
            <div className="text-center">
                   <h2 className="text.lg font-bold py-2">{product.name}</h2>
                   <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{product.size}</span>
           </div>
                   <div className="flex justify-between items-center">
                       <span>{product.price}</span>
                       <button onClick={(e) => { addToCart(e,product) }} className="py-1 px-4 bg-yellow-500 rounded-full font-bold">Add</button>
                   </div>
        </div>
        </Link>
    )
}

export default Product
