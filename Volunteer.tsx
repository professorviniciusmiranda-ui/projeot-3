
import React, { useState } from 'react';

// Enum para os tipos de formulário.
enum FormType {
  Register,
  Login,
}

// Componente reutilizável para um campo de formulário.
const FormInput: React.FC<{ id: string; type: string; label: string; placeholder: string }> = ({ id, type, label, placeholder }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
        <div className="mt-1">
            <input
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
        </div>
    </div>
);


// Componente da página "Seja Voluntário".
const Volunteer: React.FC = () => {
  const [activeForm, setActiveForm] = useState<FormType>(FormType.Register);

  const getTabClasses = (formType: FormType) => 
    `w-1/2 py-3 text-center font-semibold cursor-pointer transition-all duration-300 border-b-4 ${
      activeForm === formType 
        ? 'text-blue-600 border-blue-600'
        : 'text-gray-500 border-transparent hover:border-gray-300'
    }`;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // A lógica de envio seria implementada aqui.
    // Por enquanto, apenas exibimos um alerta.
    alert('Formulário enviado! (Funcionalidade a ser implementada)');
  }

  return (
    <div className="pt-24 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Faça Parte da Mudança</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Sua ajuda é fundamental para continuarmos nosso trabalho. Junte-se à nossa equipe e ajude a construir um futuro melhor para nossas crianças.
          </p>
        </section>

        <section className="max-w-lg mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="flex">
            <button onClick={() => setActiveForm(FormType.Register)} className={getTabClasses(FormType.Register)}>
              Cadastro
            </button>
            <button onClick={() => setActiveForm(FormType.Login)} className={getTabClasses(FormType.Login)}>
              Login
            </button>
          </div>

          <div className="p-8">
            {/* Formulário de Cadastro */}
            {activeForm === FormType.Register && (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-center text-gray-800">Crie sua Conta</h2>
                <FormInput id="name" type="text" label="Nome Completo" placeholder="Seu nome" />
                <FormInput id="email-register" type="email" label="E-mail" placeholder="seu@email.com" />
                <FormInput id="password-register" type="password" label="Senha" placeholder="********" />
                <FormInput id="confirm-password" type="password" label="Confirmar Senha" placeholder="********" />
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105">
                    Cadastrar
                  </button>
                </div>
              </form>
            )}

            {/* Formulário de Login */}
            {activeForm === FormType.Login && (
              <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-center text-gray-800">Acesse sua Conta</h2>
                <FormInput id="email-login" type="email" label="E-mail" placeholder="seu@email.com" />
                <FormInput id="password-login" type="password" label="Senha" placeholder="********" />
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Esqueceu sua senha?</a>
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105">
                    Entrar
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Volunteer;
