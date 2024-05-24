import React from 'react';
import Header from './components/Header';
import ProductPage from './components/ProductPage';
import './App.css';
import Footer from './components/Footer';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import CartPage from './components/CartPage';
import ProductDetailPage from './components/ProductDetailsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<ProductPage/>}/>
          <Route exact path="/loginPage" element={<LoginPage/>}/>
          <Route path='/registrationPage' element={<RegistrationPage/>}/>
          <Route path='/CartPage' element={<CartPage/>}/>
        </Routes>
      </main> 
      <Footer />
    </div>
   </Router>
  );
};

export default App;
