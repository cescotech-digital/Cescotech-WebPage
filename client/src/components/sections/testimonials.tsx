import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      content: "A CESCOTECH transformou completamente nossos processos. O sistema desenvolvido aumentou nossa produtividade em 40%.",
      author: "João Martins",
      position: "CEO, TechCorp",
      initials: "JM",
      color: "bg-blue-600"
    },
    {
      content: "Profissionais extremamente competentes. Entregaram o projeto no prazo e superaram nossas expectativas.",
      author: "Maria Silva",
      position: "Diretora, InnovateLab",
      initials: "MS",
      color: "bg-purple-600"
    },
    {
      content: "Suporte excepcional e soluções que realmente agregam valor ao nosso negócio. Recomendo fortemente!",
      author: "Roberto Costa",
      position: "Fundador, StartupBR",
      initials: "RC",
      color: "bg-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Confiança e resultados que falam por si só.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-0 relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <Avatar className={`mr-4 ${testimonial.color}`}>
                    <AvatarFallback className="text-white font-bold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
