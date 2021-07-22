import React from 'react'
import './index.css'
import { BrowserRouter as Router,Switch , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navigate from './components/navigate'
import products from './pages/products'
import cart from './pages/cart'
import SingleProduct from './pages/SingleProduct'
import { cartContext } from './cartContext'
import { useState, useEffect } from 'react'

const App = () => {
    const [ cart, setCart ] = useState({})
    useEffect(() => {
        const cart = window.localStorage.getItem('cart')
    }, [])

    return (
        <>
        <Router>
            <cartContext.Provider value={{ cart }}>
            <Navigate />
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/products" exact component={products}></Route>
                <Route path="/cart" component={cart}></Route>
                <Route path="/Products/:_id" exact component={SingleProduct}></Route>
            </Switch>
            </cartContext.Provider>
        </Router>
        </>
    )
}

export default App
