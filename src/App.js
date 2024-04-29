import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/Pages/HomePage/Homepage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <div>
        <Navigation />
      </div>
      <div>
        {/*<Homepage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}

        <div>
          <Router>
            <Checkout/>
          </Router>
        </div>



      </div>

      <Footer />
    </div>
  );
}

export default App;
