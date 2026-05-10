import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import FitRoom from './pages/FitRoom';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
 const [cart, setCart] = useState(() => {
   const saved = localStorage.getItem('stylevault-cart');
   return saved ? JSON.parse(saved) : [];
 });
 useEffect(()=>{localStorage.setItem('stylevault-cart', JSON.stringify(cart));}, [cart]);
 const handleAddToCart = (product) => {
  setCart(prev => {
   const existing = prev.find(item => item.id === product.id);
   if(existing){
    return prev.map(item => item.id === product.id ? {...item, quantity:(item.quantity||1)+1} : item)
   }
   return [...prev, {...product, quantity:1}]
  });
  alert(`${product.name} added to cart`)
 }
 const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
 const updateQuantity = (id, quantity) => {
   setCart(prev => prev.map(item =>
     item.id === id ? { ...item, quantity } : item
   ));
 };
 const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
 return (<Router><Header cartCount={cartCount} /><main><Routes>
<Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
<Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
<Route path="/categories" element={<Categories />} />
<Route path="/product/:id" element={<ProductDetails onAddToCart={handleAddToCart} />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/fitroom" element={<FitRoom onAddToCart={handleAddToCart} />} />
<Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
<Route path="/checkout" element={<CheckoutPage cart={cart} />} />
<Route path="*" element={<Home onAddToCart={handleAddToCart} />} />
</Routes></main><Footer /></Router>)
}
export default App;