
import React, { useState, useEffect } from 'react';
import { Page } from './types';

// Tipos para as props do componente Header.
interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

// Ícone do globo para o logo.
const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 12v1c0 1.1.9 2 2 2v2.93zm6.85-1.57c-1.23.95-2.83 1.54-4.52 1.54s-3.29-.59-4.52-1.54l.01-1.54c0-1.1.9-2 2-2h1.49c1.1 0 2-.9 2-2V8.66l3.15 3.15c.24.47.35 1.01.35 1.56 0 1.84-1.01 3.44-2.48 4.24zM18.79 10.21L15 6.41V5c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.41L4.21 10.21c-.13-.58-.21-1.17-.21-1.79 0-4.08 3.05-7.44 7-7.93v2.93c0 1.1.9 2 2 2h1.49c1.1 0 2-.9 2-2V4.07c3.95.49 7 3.85 7 7.93 0 .62-.08 1.21-.21 1.79z" />
    </svg>
);


// Componente do cabeçalho de navegação.
const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efeito para detectar o scroll da página e mudar a aparência do header.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', page: Page.Home },
    { name: 'Sobre Nós', page: Page.About },
    { name: 'Projetos', page: Page.Projects },
    { name: 'Seja Voluntário', page: Page.Volunteer },
    { name: 'Contato', page: Page.Contact },
  ];

  const linkClasses = (page: Page) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
      currentPage === page
        ? 'text-white bg-blue-600 shadow-md'
        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            onClick={() => setPage(Page.Home)}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <GlobeIcon className={`w-8 h-8 transition-all duration-500 text-blue-600 group-hover:rotate-180`}/>
            <span className={`text-xl font-bold text-gray-800 transition-colors group-hover:text-blue-700 ${isScrolled ? 'text-gray-800' : 'text-gray-800 md:text-white'}`}>
              O Mundo é uma Bola
            </span>
          </div>

          {/* Navegação para Desktop */}
          <nav className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => setPage(link.page)} className={linkClasses(link.page)}>
                {link.name}
              </button>
            ))}
          </nav>

          {/* Botão do Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setPage(link.page);
                  setIsMenuOpen(false);
                }}
                className={`${linkClasses(link.page)} w-full text-left block`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
