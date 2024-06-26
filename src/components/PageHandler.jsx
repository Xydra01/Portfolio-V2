import { useState } from 'react';
import NavBar from './NavBar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './Footer';

export default function PageHandler() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="d-flex flex-row justify-content-end flex-wrap">
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3 mt-3 w-100">{renderPage()}</main>
      <Footer />
    </div>
  );
}
