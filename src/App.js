import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/header/header';
import AcademicArticles from './pages/academicarticles';
import { NameHeader } from './Components/MainHeader/NameHeader';
import { Footer } from './Components/footer/footer';
import Index from './pages';

function App() {
  return (
    <Router>
    <NameHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/academic-articles" element={<AcademicArticles />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
