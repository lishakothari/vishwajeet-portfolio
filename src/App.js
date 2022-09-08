import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/header/header';
import AcademicArticles from './pages/academicarticles';
import Hero from './pages/herosection/herosection';
import { NameHeader } from './Components/MainHeader/NameHeader';
import { Footer } from './Components/footer/footer';
import About from './pages/about/about';

function App() {
  return (
    <Router>
    <NameHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/academic-articles" element={<AcademicArticles />} />
      </Routes>
      <About />
      <Footer />
    </Router>
  );
}

export default App;
