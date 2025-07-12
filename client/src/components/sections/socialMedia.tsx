import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Instagram, MessageSquare } from "lucide-react";

export default function SocialSection() {
  const socialLinks = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Acompanhe nossos projetos, conexões profissionais e novidades do setor.",
      url: "https://www.linkedin.com/company/cescotech",
      gradient: "from-blue-700 to-blue-500"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Veja os bastidores, conteúdos visuais e atualizações do dia a dia da Cescotech.",
      url: "https://www.instagram.com/cescotech.digital?igsh=MWt0MGU0MnBsa2V2Yw%3D%3D&utm_source=qr ",
      gradient: "from-pink-500 to-yellow-500"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      description: "Converse conosco diretamente e tire dúvidas sobre nossos serviços.",
      url: "https://wa.me/5547999327042",
      gradient: "from-green-600 to-emerald-400"
    }
  ];

  return (
    <section id="social" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Redes Sociais</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro de tudo que acontece por aqui. Estamos sempre compartilhando conteúdo relevante!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
            >
              <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group bg-white border-0">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <social.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{social.title}</h3>
                  <p className="text-gray-600 text-sm">{social.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
