
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Volunteer from './Volunteer';
import Contact from './Contact';

// Componente principal da aplicação.
// Ele gerencia qual página está sendo exibida no momento.
const App: React.FC = () => {
  // Estado para controlar a página ativa, começando pela 'Home'.
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Adiciona um efeito de transição suave ao trocar de página.
  const [isFading, setIsFading] = useState(false);

  // Função para mudar de página com um efeito de fade.
  const changePage = (page: Page) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentPage(page);
      window.scrollTo(0, 0); // Rola para o topo da página ao trocar.
      setIsFading(false);
    }, 300); // Duração do fade out.
  };

  // Função para renderizar o componente da página atual.
  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setPage={changePage} />;
      case Page.About:
        return <About />;
      case Page.Projects:
        return <Projects />;
      case Page.Volunteer:
        return <Volunteer />;
      case Page.Contact:
        return <Contact />;
      default:
        return <Home setPage={changePage} />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      {/* O Header é fixo e recebe a página atual e a função para trocá-la. */}
      <Header currentPage={currentPage} setPage={changePage} />
      
      {/* O conteúdo principal da página com efeito de transição. */}
      <main className={`flex-grow transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
        {renderPage()}
      </main>

      {/* O Footer aparece em todas as páginas. */}
      <Footer />
    </div>
  );
};

export default App;
