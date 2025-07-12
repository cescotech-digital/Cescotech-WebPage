import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Portfolio from "@/components/sections/portfolio";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import SocialMedia from "@/components/sections/socialMedia";

export default function Home() {
  return (
    <>
      <title>CESCOTECH - Soluções em Gestão e Tecnologia</title>
      <meta name="description" content="CESCOTECH - Especialistas em gestão de projetos em tecnologia, desenvolvimento web, sistemas, infraestrutura e eletrônica embarcada. Transformamos ideias em realidade digital." />
      <meta property="og:title" content="CESCOTECH - Soluções em Gestão e Tecnologia" />
      <meta property="og:description" content="Especialistas em gestão de projetos em tecnologia, desenvolvimento web, sistemas, infraestrutura e eletrônica embarcada." />
      <meta property="og:type" content="website" />
      
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          
          {/* <Portfolio /> */}
          {/* <Testimonials /> */}
          <Contact />
          <SocialMedia />
          
        </main>
        <Footer />
      </div>
    </>
  );
}
