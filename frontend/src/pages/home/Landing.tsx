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
        <Hero />
      </header>
      <main>
        <section id="start" className="h-[40em] p-6">
          <StartSection />
        </section>
        <section id="benefits">
          <BenefitSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="initiative">
          <BannerSection />
        </section>
        <section id="contact">
          <></>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
