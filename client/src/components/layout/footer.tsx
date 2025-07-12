import Logo from "@/components/ui/logo";
import { Linkedin, Instagram, MessageSquare } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo variant="dark" />
            <p className="text-gray-300 mb-4 max-w-md mt-4">
              Soluções em Gestão e Tecnologia para impulsionar o crescimento do seu negócio.
            </p>
            <p className="text-sm text-gray-400">
              CESCOTECH SOLUÇÕES EM GESTÃO E TECNOLOGIA LTDA<br />
              CNPJ: 54.013.691/0001-97
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Gestão de Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Desenvolvimento Web
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Sistemas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Dados
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Infraestrutura
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Eletrônica Embarcada
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("portfolio")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-400 transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              &copy; 2025 CESCOTECH. Todos os direitos reservados.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/company/cescotech" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/cescotech.digital?igsh=MWt0MGU0MnBsa2V2Yw%3D%3D&utm_source=qr" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/5547999327042" className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
