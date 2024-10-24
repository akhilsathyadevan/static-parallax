import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'; // Import useLocation
import Banner from './banner/banner';
import Cards from './cards/cards';
import Header from './header/header';
import Gimic from './gimic/gimic';
import Travelby from './travelby/travelby';
import Blog from './blog/blog'; // Import Blog component
import Login from './login/login';

function App() {
  const location = useLocation(); // Get the current location

  return (
    <div className="App">
      {/* Conditionally render the Header only on non-blog and non-login routes */}
      {location.pathname !== '/blog' && location.pathname !== '/login' && <Header />}
      
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <Travelby />
            <Banner />
            <Gimic />
            <Cards />
          </>
        } />

        {/* Blog Route */}
        <Route path="/blog" element={<Blog />} />
        
        {/* Login Route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
