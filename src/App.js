import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import {NavigationBar} from './components/NavigationBar';
import LoginSignup from './components/LoginSignup/LoginSignup';
import { Global, css } from '@emotion/react'; 
import ThemeChanger from './components/ThemeChange/ThemeChanger';
import "./styles.css"
const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  navBackground: '#d3d3d3',
  navText: '#9FFFCB',
  buttonBackground: '#3498db',
  buttonText: '#ffffff',
};

const darkTheme = {
  background: '#2c3e50',
  text: '#ffffff',
  navBackground: '#34495e',
  navText: '#ecf0f1',
  buttonBackground: '#e74c3c',
  buttonText: '#ffffff',
};

const App = () => {
  const GlobalStyles = () => ( 
    <Global 
        styles={css` 
      /* Apply global styles */
      body { 
        margin: 0; 
        padding: 0; 
        background-color: #ffffff; 
        font-family: 'Noto Sans', sans-serif; 
        color: #333; 
      } 
    `} 
    /> 
); 

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route
            path="/dashboard/*"
            element={<>
              <ThemeChanger />
              <Sidebar>
                <NavigationBar />
                
                <Routes>
                  <Route index element={<Dashboard />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/comment" element={<Comment />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/product" element={<Product />} />
                  <Route path="/productList" element={<ProductList />} />
                </Routes>
              </Sidebar>
            </>} />
          <Route
            path="/about"
            element={<>
              <ThemeChanger />
              <Sidebar>
                <NavigationBar />
                <About />
              </Sidebar>
            </>} />
          {/* ... other routes */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;