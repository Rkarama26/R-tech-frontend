import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/Pages/HomePage/Homepage';

function App() {
  return (
   <div className="App">
  
  <div>
    <Navigation/>
  </div>
  <div>
    <Homepage/>
  </div>
   </div>
  );
}

export default App;
