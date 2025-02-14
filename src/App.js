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
import { Helmet } from 'react-helmet';
import AdminRouters from './Routers/AdminRouters';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>R_tech</title>
        {/*   <link rel="icon" type="image/x-icon" href="%PUBLIC_URL%/logo.ico" />  {/* Use if ICO */}

      </Helmet>

      <Routes>
        <Route path='/*' element={<CustomerRouters />}></Route>
        <Route path='/admin/*' element={<AdminRouters />}></Route>
      </Routes>



    </div>
  );
}

export default App;
