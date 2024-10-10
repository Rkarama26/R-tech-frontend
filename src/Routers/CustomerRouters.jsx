import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../customer/Pages/HomePage/Homepage';
import Cart from '../customer/components/Cart/Cart';
import Navigation from '../customer/components/navigation/Navigation';
import Footer from '../customer/components/Footer/Footer';
import Product from '../customer/components/Product/Product';
import ProductDetails from '../customer/components/ProductDetails/ProductDetails';
import Checkout from '../customer/components/Checkout/Checkout';
import Order from '../customer/components/Order/Order';
import OrderDetail from '../customer/components/OrderDetails.jsx/OrderDetail';

const CustomerRouters = () => {
    return (
        <div>
            <Navigation />
            <div>

            </div>
            <Routes>

                <Route path='/' element={<Homepage />}></Route>
                <Route path='/login' element={<Homepage />}></Route>
                <Route path='/register' element={<Homepage />}></Route>
                
                <Route path='/cart' element={<Cart />}></Route>
                <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product />}></Route>
                <Route path='/product/:productId' element={<ProductDetails />}></Route>
                <Route path='/checkout' element={<Checkout />}></Route>
                <Route path='/account/order' element={<Order />}></Route>
                <Route path='/account/order/:orderId' element={<OrderDetail />}></Route>

            </Routes>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default CustomerRouters;
