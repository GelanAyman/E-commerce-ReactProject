import {Routes, Route, Link}  from 'react-router-dom'

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductsList from "./components/ProductsList";
import ProductDetails from './components/ProductDetails';
import  Footer from './components/Footer';
import ContactUs from './components/ContactUs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element= {
                        <>
                        <Carousel /> 
                        <ProductsList />
                        </>
        } /> 
        <Route path="/contactUs" element={<ContactUs/>} />
        <Route path='product/:productId' element={<ProductDetails />} />  
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
