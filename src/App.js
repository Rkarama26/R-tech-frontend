import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/Pages/HomePage/Homepage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';

function App() {
  return (
   <div className="App">
  
  <div>
    <Navigation/>
  </div>
  <div>
    {/*<Homepage/> */}
    {/* <Product/> */}
    <ProductDetails/>
  </div>
  
  <Footer/>
   </div>
  );
}

export default App;
