import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import data from './utils/data';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import {Switch,Route} from "react-router-dom"
import Navbar from './components/Navbar'

function App() {

  const [productData,setProductData] = useState(data);

  return (
    <div className="App bg-light">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={()=><ProductsPage productData={productData} setProductData={setProductData}/>}/>
        <Route path="/cart/:id" component={()=><CartPage productData={productData}/>}/>
      </Switch>
    </div>
  );
}

export default App;
// Basic Requirements
// 1. Products Page:
//    - Show the name, description, price, remaining stock of each product 
//    - Allow user to add product to cart
//      - this should reduce the remaining stock of said product left
//   - filter products by tags
//   - filter products by seller
//   - filter products by price greater, or lesser
//   - on click product image, redirect to product page
// 2. Cart Page:
//   - Show items in user cart
//   - Show total amount payable for cart

// Advanced Optional Requirements
// 3. Product Page:
//   - show product details
//     - name, description price, remaining stock, seller name, tags
// 4. Seller page:
//   - Seller details (id, name)
//   - Seller products (products by this seller)
//   - Seller profit (calculate profit for sold items by seller)