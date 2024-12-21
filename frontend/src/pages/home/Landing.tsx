import AboutSection from "../../components/aboutSection/AboutSection";
import BannerSection from "../../components/bannerSection/BannerSection";
import BenefitSection from "../../components/benefitSection/BenefitSection";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import StartSection from "../../components/startSection/StartSection";

const Landing = () => {
  return (
    <div className="bg-secondary">
      <header className="flex flex-col h-dvh">
        <Navbar />
        <section id="home">
        <Hero/>
        </section>
      </header>
      <main>
        <section id="start" className="h-[40em] pt-12">
          <StartSection />
        </section>
        <section id="benefits"className="h-[40em]" >
          <BenefitSection />
        </section>
        <section id="about" className="h-[44em] pt-10 pb-12">
          <AboutSection />
        </section>
        <section id="initiative" className="h-[42em] pt-16">
          <BannerSection />
        </section>
        <section id="contact" className="h-[40em]">
          <></>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
