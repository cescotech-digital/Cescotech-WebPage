import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

export default function About() {
  const [stats, setStats] = useState({
    projects: 0,
    years: 0,
    clients: 0,
    support: 0
  });

  const finalStats = {
    projects: 20,
    years: 5,
    clients: 30,
    support: 24
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            Object.keys(finalStats).forEach((key) => {
              const finalValue = finalStats[key as keyof typeof finalStats];
              let currentValue = 0;
              const increment = Math.ceil(finalValue / 50);
              
              const timer = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                  currentValue = finalValue;
                  clearInterval(timer);
                }
                setStats(prev => ({ ...prev, [key]: currentValue }));
              }, 30);
            });
            
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Sobre a CESCOTECH</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Somos especialistas em transformar desafios tecnológicos em oportunidades de crescimento. 
              Com expertise em gestão de projetos e desenvolvimento de soluções inovadoras, 
              ajudamos empresas a alcançar seus objetivos através da tecnologia.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stats.projects}+</div>
                <div className="text-gray-300">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stats.years}+</div>
                <div className="text-gray-300">Anos de Experiência</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stats.clients}+</div>
                <div className="text-gray-300">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stats.support}/7</div>
                <div className="text-gray-300">Suporte</div>
              </div> */}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-blue-400">Nossa Missão</h3>
              <p className="text-gray-300">
                Fornecer soluções tecnológicas inovadoras e eficientes que impulsionem o crescimento 
                e a competitividade de nossos clientes no mercado digital.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Ambiente de trabalho moderno com tecnologia e colaboração em equipe" 
              className="rounded-2xl shadow-2xl w-full"
            />
            
            {/* Floating certification badge */}
            {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Certificado</div>
                  <div className="text-sm text-gray-600">ISO 9001:2015</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
