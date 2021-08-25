import React from 'react'
import './index.css'
import { BrowserRouter as Router,Switch , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigate from './components/Navigate'
import products from './pages/products'
import Cart from './pages/Cart'
import SingleProduct from './pages/SingleProduct'
import { cartContext } from './cartContext'
import { useState, useEffect } from 'react'
import {getCart, storeCart} from './Helpers'

const App = () => {
    const [ cart, setCart ] = useState({})

    useEffect(() => {
        getCart().then(cart => {
            setCart(JSON.parse(cart))
        })
    }, [])

    useEffect(() => {
        storeCart(JSON.stringify(cart))
    }, [cart])


    return (
        <>
        <Router>
            <cartContext.Provider value={{ cart, setCart }}>
            <Navigate />
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/products" exact component={products}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/Products/:_id" exact component={SingleProduct}></Route>
            </Switch>
            </cartContext.Provider>
        </Router>
        </>
    )
}

export default App
