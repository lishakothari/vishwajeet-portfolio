import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/header/header';
import { NameHeader } from './Components/MainHeader/NameHeader';
import { Footer } from './Components/footer/footer';
import Index from './pages';
import MediaArticles from './pages/media articles/mediaarticles';
import Interviews from './pages/interviews/interviews';
import { NameFooter } from './Components/MainFooter/NameFooter';
import AcademicArticles from './pages/academic articles/academicarticles';

function App() {
  return (
    <Router>
    <NameHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/media-articles" element={<MediaArticles />} />
        <Route path="/academic-articles" element={<AcademicArticles />} />
        <Route path="/interviews" element={<Interviews />} />
      </Routes>
      <Footer />
      <NameFooter />
    </Router>
  );
}

export default App;
