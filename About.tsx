
import React from 'react';

// Componente reutilizável para um item da timeline.
const TimelineItem: React.FC<{ year: string; title: string; children: React.ReactNode, last?: boolean }> = ({ year, title, children, last }) => (
  <div className="flex items-center w-full">
    <div className="w-1/2 flex justify-end">
      <div className="pr-8 text-right">
        <p className="font-bold text-blue-600">{year}</p>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{children}</p>
      </div>
    </div>
    <div className="w-10 flex-shrink-0 flex flex-col items-center">
      <div className="rounded-full bg-blue-600 w-4 h-4 z-10"></div>
      {!last && <div className="w-0.5 h-full bg-blue-300"></div>}
    </div>
    <div className="w-1/2"></div>
  </div>
);

// Componente da página "Sobre Nós".
const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">

        {/* Seção de Introdução */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Nossa História</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            "O Mundo é uma Bola" nasceu do sonho de usar o poder unificador do futebol para criar oportunidades e transformar realidades.
          </p>
        </section>

        {/* Seção de Missão, Visão e Valores */}
        <section className="grid md:grid-cols-3 gap-10 mb-20 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">Missão</h2>
            <p>Promover o desenvolvimento social de crianças e adolescentes através do esporte e da educação, formando cidadãos conscientes e protagonistas de suas próprias histórias.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">Visão</h2>
            <p>Ser uma referência em transformação social, expandindo nosso impacto para que cada vez mais jovens possam sonhar com um futuro melhor.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-3">Valores</h2>
            <p>Respeito, Empatia, Trabalho em Equipe, Transparência e Paixão por tudo o que fazemos.</p>
          </div>
        </section>

        {/* Seção da Linha do Tempo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Nossa Jornada</h2>
          <div className="relative">
            <TimelineItem year="2015" title="O Início de um Sonho">
              Um grupo de amigos se une para organizar o primeiro torneio de futebol no bairro, arrecadando alimentos e material escolar.
            </TimelineItem>
            <TimelineItem year="2017" title="Formalização da ONG">
              Com o sucesso das primeiras ações, "O Mundo é uma Bola" é oficialmente fundada, expandindo suas atividades.
            </TimelineItem>
            <TimelineItem year="2019" title="Primeiro Espaço Físico">
              Inauguramos nossa sede, um local seguro para aulas de reforço, oficinas e, claro, muito futebol.
            </TimelineItem>
            <TimelineItem year="2022" title="Parcerias de Impacto">
              Fechamos parcerias importantes com empresas locais, o que nos permitiu dobrar o número de crianças atendidas.
            </TimelineItem>
            <TimelineItem year="Hoje" title="Olhando para o Futuro" last>
              Continuamos a crescer, com novos projetos e o mesmo desejo de fazer a diferença na vida de cada criança.
            </TimelineItem>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default About;
