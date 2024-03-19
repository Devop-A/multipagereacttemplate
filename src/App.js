import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';
import Nav from './components/Nav';

// Import other pages similarly

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/" element={<Home />} />
          {/* Define other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
