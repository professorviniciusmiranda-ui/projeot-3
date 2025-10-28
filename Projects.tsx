
import React from 'react';

// Dados dos projetos (poderiam vir de uma API no futuro).
const projectsData = [
  {
    title: "Futebol & Cidadania",
    description: "Aulas de futebol duas vezes por semana, combinadas com workshops sobre direitos, deveres e cidadania. O objetivo é formar atletas e cidadãos.",
    imageUrl: "https://picsum.photos/600/400?image=1018",
  },
  {
    title: "Gol de Letra",
    description: "Aulas de reforço escolar em português e matemática para os participantes dos projetos esportivos, ajudando a melhorar o desempenho acadêmico.",
    imageUrl: "https://picsum.photos/600/400?image=20",
  },
  {
    title: "Campeões do Futuro",
    description: "Um programa de mentoria que conecta os jovens com profissionais de diversas áreas, inspirando-os a pensar em suas futuras carreiras.",
    imageUrl: "https://picsum.photos/600/400?image=1074",
  },
  {
    title: "Copa da Amizade",
    description: "Torneio anual que reúne diferentes comunidades, promovendo a integração, o respeito e a celebração através do esporte.",
    imageUrl: "https://picsum.photos/600/400?image=431",
  },
  {
    title: "Nutrição em Campo",
    description: "Oficinas e acompanhamento com nutricionistas para garantir uma alimentação saudável para os jovens atletas e suas famílias.",
    imageUrl: "https://picsum.photos/600/400?image=1080",
  },
  {
    title: "Cultura em Movimento",
    description: "Além do esporte, oferecemos oficinas de arte, música e teatro para estimular a criatividade e a expressão dos jovens.",
    imageUrl: "https://picsum.photos/600/400?image=1054",
  },
];

// Componente para um card de projeto.
const ProjectCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="bg-blue-600 h-1 w-0 group-hover:w-full transition-all duration-500"></div>
  </div>
);

// Componente da página de "Projetos".
const Projects: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nossos Projetos</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Conheça as iniciativas que estão fazendo a diferença na vida de centenas de crianças e jovens.
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Projects;
