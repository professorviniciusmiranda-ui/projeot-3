
import React from 'react';

// Ícones para as redes sociais
const SocialIcon: React.FC<{ href: string, path: string }> = ({ href, path }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300 transform hover:scale-110">
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  </a>
);

// Componente do rodapé.
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} O Mundo é uma Bola. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <SocialIcon href="#" path="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.39 2.33,6.11 2.33,6.88C2.33,8.37 3.08,9.7 4.21,10.49C3.54,10.47 2.9,10.28 2.34,9.98C2.34,10 2.34,10 2.34,10.02C2.34,12.02 3.76,13.68 5.75,14.08C5.39,14.18 5,14.22 4.6,14.22C4.32,14.22 4.05,14.2 3.78,14.15C4.32,15.78 5.76,16.95 7.48,16.98C6.07,18.1 4.3,18.78 2.37,18.78C2.04,18.78 1.72,18.76 1.4,18.71C3.14,19.89 5.2,20.5 7.39,20.5C16.06,20.5 20.37,13.5 20.37,7.5C20.37,7.29 20.36,7.09 20.35,6.89C21.25,6.25 21.94,5.45 22.46,4.51" />
            <SocialIcon href="#" path="M12,2.5C6.74,2.5 2.5,6.74 2.5,12S6.74,21.5 12,21.5 21.5,17.26 21.5,12 17.26,2.5 12,2.5M17.5,12.5H14.5V17.5H11.5V12.5H9.5V9.5H11.5V7.5C11.5,5.84 12.84,4.5 14.5,4.5H16.5V7.5H15.25C14.8,7.5 14.5,7.8 14.5,8.25V9.5H17.5L17,12.5H14.5V17.5Z" />
            <SocialIcon href="#" path="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
