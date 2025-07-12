import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ProjectorIcon as Project, 
  Globe, 
  Monitor, 
  Server, 
  Cpu,
  CheckCircle,
  BarChart3
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Project,
      title: "Gestão de Projetos",
      description: "Gerenciamento completo de projetos em tecnologia com metodologias ágeis e entregas eficientes.",
      features: ["Metodologias Ágeis", "Controle de Qualidade", "Acompanhamento de Prazo"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Criação de websites e aplicações web modernas, responsivas e otimizadas para performance.",
      features: ["Design Responsivo", "SEO Otimizado", "Performance Superior"],
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: Monitor,
      title: "Desenvolvimento de Sistemas",
      description: "Sistemas personalizados para automatizar processos e aumentar a eficiência operacional.",
      features: ["Soluções Customizadas", "Integração de APIs", "Automação de Processos"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Pipeline de Dados Inteligente",
      description: "Estrutura completa para coleta, tratamento, análise e visualização de dados, facilitando decisões estratégicas e orientadas por evidências.",
      features: ["Engenharia de Dados", "Modelagem e Análise", "Dashboards Interativos"],
      gradient: "from-blue-500 to-red-600"
    },
    {
      icon: Server,
      title: "Infraestrutura",
      description: "Implementação e manutenção de infraestrutura tecnológica robusta e segura.",
      features: ["Cloud Computing", "Segurança Avançada", "Monitoramento 24/7"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Cpu,
      title: "Eletrônica Embarcada",
      description: "Desenvolvimento de soluções IoT e sistemas embarcados para automação inteligente.",
      features: ["Internet das Coisas (IoT)", "Automação Residencial", "Sensores Inteligentes"],
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia e gestão para impulsionar o crescimento do seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group bg-gray-50 border-0"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
