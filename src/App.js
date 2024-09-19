import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/Pages/HomePage/Homepage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Order from './customer/components/Order/Order';
import OrderDetail from './customer/components/OrderDetails.jsx/OrderDetail';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="App">
<Router>

    <Routes>
         <Route path='/*' element={<CustomerRouters/>}></Route>
    </Routes>
</Router>

    
    </div>
  );
}

export default App;
