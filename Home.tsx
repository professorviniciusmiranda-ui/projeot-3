
import React, { useEffect, useState } from 'react';
import { Page } from './types';

interface HomeProps {
    setPage: (page: Page) => void;
}

// Componente para um card de destaque.
const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <div className="text-5xl text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{children}</p>
    </div>
);

// Componente da página inicial.
const Home: React.FC<HomeProps> = ({ setPage }) => {

  const [counter, setCounter] = useState({ kids: 0, volunteers: 0, projects: 0 });

  // Efeito para animar os contadores quando o componente é montado
  useEffect(() => {
    const animateValue = (key: keyof typeof counter, end: number, duration: number) => {
      let start = 0;
      const range = end - start;
      const increment = end > 1000 ? 50 : 1;
      const stepTime = Math.abs(Math.floor(duration / (range / increment)));
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) start = end; // Garante que não ultrapasse o valor final.
        setCounter(prev => ({...prev, [key]: start}));
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    animateValue('kids', 5000, 2000);
    animateValue('volunteers', 350, 2000);
    animateValue('projects', 42, 2000);

  }, []);

  return (
    <>
      {/* Seção Hero - A primeira coisa que o usuário vê. */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?image=1043')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Transformando Vidas Através do Esporte</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Usamos a paixão pelo futebol para inspirar crianças e jovens, promovendo educação, saúde e inclusão social.
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => setPage(Page.About)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Saiba Mais
            </button>
            <button 
              onClick={() => setPage(Page.Volunteer)}
              className="bg-white hover:bg-gray-200 text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Seja um Voluntário
            </button>
          </div>
        </div>
      </section>

      {/* Seção de Destaques */}
      <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold">Nosso Impacto</h2>
                  <p className="text-gray-600 mt-2">Pequenas ações que geram grandes mudanças.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  <FeatureCard icon="⚽" title="Esporte e Educação">
                      Combinamos a prática esportiva com reforço escolar, garantindo um desenvolvimento completo para nossas crianças.
                  </FeatureCard>
                  <FeatureCard icon="❤️" title="Saúde e Bem-estar">
                      Promovemos hábitos saudáveis e oferecemos acompanhamento para garantir a saúde física e mental dos participantes.
                  </FeatureCard>
                  <FeatureCard icon="🤝" title="Inclusão Social">
                      Criamos um ambiente seguro e acolhedor onde todos se sentem parte de uma grande família.
                  </FeatureCard>
              </div>
          </div>
      </section>

      {/* Seção de Números */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold">{counter.kids.toLocaleString()}+</p>
              <p className="text-lg mt-2">Crianças Impactadas</p>
            </div>
            <div>
              <p className="text-5xl font-bold">{counter.volunteers}+</p>
              <p className="text-lg mt-2">Voluntários Engajados</p>
            </div>
            <div>
              <p className="text-5xl font-bold">{counter.projects}</p>
              <p className="text-lg mt-2">Projetos Realizados</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
