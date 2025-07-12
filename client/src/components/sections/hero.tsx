import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import techBackground from "@assets/Black backgroud - 7_1750716355986.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${techBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Soluções em{" "}
              <span className="gradient-text">Gestão</span> e{" "}
              <span className="gradient-text">Tecnologia</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Transformamos ideias em realidade digital através de gestão de projetos eficiente e soluções tecnológicas inovadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("services")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold group"
              >
                <Play className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative w-full h-96">
              {/* <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Tecnologia avançada e soluções digitais" 
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              /> */}
              
              {/* Floating tech elements */}
              {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 hexagon animate-float flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div> */}
              {/* <div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-600 rounded-full animate-float flex items-center justify-center"
                style={{ animationDelay: "1s" }}
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
