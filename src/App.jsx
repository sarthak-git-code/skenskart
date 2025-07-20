import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Compare from './pages/Compare/Compare';
import Customize from './pages/Customize/Customize';
import './index.css';

function App() {
  const [cart, setCart] = useState([]);

  // Cart functions
  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      return existing
        ? prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { ...item, quantity: 1 }];
    });
  };


  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <Router>
      <div className="app">
        <Nav cartCount={cartCount} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/compare" 
              element={<Compare addToCart={addToCart} />} 
            />
            <Route 
              path="/customize" 
              element={<Customize addToCart={addToCart} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;