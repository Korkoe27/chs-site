import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Policies from './pages/Policies';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import Prefects from './pages/Prefects';
import News from './pages/News';

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/prefects" element={<Prefects />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
