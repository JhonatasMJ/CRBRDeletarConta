"use client"

import { Copy, Mail } from "lucide-react"

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030303] to-[#0a0a0a] text-white">
      <header className="relative z-10 border-b border-[#FFBF00]/10">
        <div className="max-w-4xl mx-auto py-1 px-6">
          <div className="flex items-center">
            <img src="/logo.svg" alt="" />
            <h1 className="text-2xl font-bold">
              <span className="text-[#FFBF00]">CRBR</span> Investimentos
            </h1>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">Exclusão de Conta</h2>
          <p className="text-gray-400">
            Siga as instruções abaixo para solicitar a exclusão da sua conta e dados pessoais
          </p>
        </div>

        <div className="bg-[#0c0c0c]/80 backdrop-blur-sm border border-[#FFBF00]/10 rounded-xl overflow-hidden shadow-lg">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 p-5 bg-gradient-to-r from-[#0f0f0f] to-[#111] rounded-lg border border-[#FFBF00]/20">
              <div className="flex-shrink-0 w-12 h-12 bg-[#FFBF00]/10 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-[#FFBF00]" />
              </div>
              <div className="flex-grow">
                <h3 className="text-sm font-medium text-gray-400 mb-1">ENVIE UM E-MAIL PARA</h3>
                <div className="flex items-center">
                  <p className="text-xl font-medium text-[#FFBF00]">developer.tribustec@gmail.com</p>
                  <button
                    className="ml-3 p-1.5 rounded-md bg-[#FFBF00]/10 hover:bg-[#FFBF00]/20 transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText("developer.tribustec@gmail.com")
                      alert("Email copiado para a área de transferência!")
                    }}
                  >
                    <Copy className="h-4 w-4 text-[#FFBF00]" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[#FFBF00] mb-4 flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#FFBF00]/10 text-[#FFBF00] text-sm flex items-center justify-center mr-2">
                    1
                  </span>
                  Instruções para solicitação
                </h3>
                <div className="ml-8 space-y-4 text-gray-300">
                  <p>
                    No <span className="text-white font-medium">assunto do e-mail</span>, escreva:
                    <span className="block mt-1 p-2 bg-[#FFBF00]/5 border border-[#FFBF00]/10 rounded text-[#FFBF00] font-medium">
                      "Solicitação de exclusão de conta"
                    </span>
                  </p>
                  <div>
                    <p className="mb-2">
                      No <span className="text-white font-medium">corpo do e-mail</span>, inclua:
                    </p>
                    <ul className="space-y-1.5 ml-5 list-disc text-gray-400">
                      <li>Seu nome completo</li>
                      <li>E-mail cadastrado na plataforma</li>
                      <li>Confirmação de que deseja excluir permanentemente sua conta</li>
                    </ul>
                  </div>
                  <p>
                    Nossa equipe processará sua solicitação em até{" "}
                    <span className="text-white font-medium">5 dias úteis</span> e enviará uma confirmação quando a
                    exclusão for concluída.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#FFBF00] mb-4 flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-[#FFBF00]/10 text-[#FFBF00] text-sm flex items-center justify-center mr-2">
                    2
                  </span>
                  Dados que serão excluídos
                </h3>
                <div className="ml-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Nome completo",
                    "Endereço de e-mail",
                    "Informações de investimentos",
                    "Histórico de transações",
                    "Documentos pessoais",
                    "Todos os outros dados do usuário",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFBF00] mr-2.5"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FFBF00]/5 to-transparent p-5 rounded-lg border-l-2 border-[#FFBF00]">
                <h3 className="text-white font-medium mb-2">Compromisso de privacidade</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A CRBR Investimentos garante que após a exclusão da sua conta, nenhum dado pessoal será mantido em
                  nossos sistemas. Todos os seus dados serão completamente apagados de nossos servidores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-[#FFBF00]/10 mt-12">
        <div className="max-w-4xl mx-auto py-6 px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-2 sm:mb-0">&copy; {new Date().getFullYear()} CRBR Investimentos</p>
          <div className="flex space-x-4">
            <span className="text-sm text-gray-500">Todos os direitos reservados</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
