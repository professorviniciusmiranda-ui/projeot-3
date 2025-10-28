
import React from 'react';

// Ícone reutilizável para informações de contato.
const InfoItem: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-blue-100 rounded-full text-blue-600 text-2xl">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{children}</p>
        </div>
    </div>
);


// Componente da página de "Contato".
const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada! (Funcionalidade a ser implementada)');
  }
  
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Adoraríamos ouvir você! Seja para tirar dúvidas, propor parcerias ou simplesmente para dizer um oi.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Informações de Contato */}
            <div className="space-y-8">
                <InfoItem icon="📍" title="Nosso Endereço">
                    Rua da Esperança, 123 <br />
                    Bairro Feliz, Cidade Alegre - SP
                </InfoItem>
                <InfoItem icon="✉️" title="E-mail">
                    <a href="mailto:contato@mundoembola.org" className="text-blue-600 hover:underline">contato@mundoembola.org</a>
                </InfoItem>
                <InfoItem icon="📞" title="Telefone">
                    (11) 98765-4321
                </InfoItem>
                 <InfoItem icon="🕒" title="Horário de Atendimento">
                    Segunda a Sexta, das 9h às 18h
                </InfoItem>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name-contact" className="sr-only">Nome</label>
                        <input type="text" id="name-contact" placeholder="Seu nome" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                     <div>
                        <label htmlFor="email-contact" className="sr-only">E-mail</label>
                        <input type="email" id="email-contact" placeholder="Seu e-mail" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                     <div>
                        <label htmlFor="message" className="sr-only">Mensagem</label>
                        <textarea id="message" rows={5} placeholder="Sua mensagem" className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" required></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
