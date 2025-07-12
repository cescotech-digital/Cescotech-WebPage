import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin, CreditCard, Linkedin, Instagram, MessageSquare } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Verifique os dados e tente novamente.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-4">Entre em Contato</h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Pronto para transformar seu projeto em realidade? Vamos conversar!
      </p>
    </div>

    {/* Contatos lado a lado */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center mb-12">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
          <Mail className="h-6 w-6 text-white" />
        </div>
        <h4 className="font-semibold mb-1">E-mail</h4>
        <p className="text-gray-300 text-sm">jonas@cescotech.digital</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
          <Phone className="h-6 w-6 text-white" />
        </div>
        <h4 className="font-semibold mb-1">Telefone</h4>
        <p className="text-gray-300 text-sm">(47) 99932-7042</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
          <MapPin className="h-6 w-6 text-white" />
        </div>
        <h4 className="font-semibold mb-1">Endereço</h4>
        <p className="text-gray-300 text-sm">Itajaí - SC, Brasil</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
          <CreditCard className="h-6 w-6 text-white" />
        </div>
        <h4 className="font-semibold mb-1">CNPJ</h4>
        <p className="text-gray-300 text-sm">54.013.691/0001-97</p>
      </div>
    </div>
    
  </div>
</section>


  );
}
