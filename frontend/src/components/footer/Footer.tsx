import { Link } from "react-router-dom";
import logo from "../../assets/LogoLarge.png";
import facebook from "../../assets/landing/Facebook.svg";
import instagram from "../../assets/landing/instagram.svg";
import x_logo from "../../assets/landing/X.svg";
import useWindowSize from "../hooks/Responsive";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <footer className="flex flex-col items-center justify-center gap-10 mt-10">
      {isMobile ? (
        <>
          <div className="flex flex-col items-center gap-12 px-5">
            <img src={logo} alt="logo" className="h-[5em]"/>
            <form onSubmit={() => {}} className="w-[350px] flex flex-col gap-4">
              <p className="text-sm font-semibold">
                Suscríbete a nuestro Boletín
              </p>
              <div className="flex flex-col justify-between gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2 pl-6 border rounded-md shadow-md"
                />
                <button className="px-6 py-2 text-lg font-semibold text-white rounded-lg bg-color-1">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="container flex items-center justify-between px-5 text-sm font-medium sm:justify-around font-secondary">
            <div className="flex flex-col items-center gap-10">
              <a href="#start">Comienzo</a>
              <a href="#benefits">Beneficios</a>
              <a href="#initiative">Iniciativas</a>
            </div>
            <div className="flex flex-col items-center gap-10">
              <a href="#about">Nosotros</a>
              <a href="#contact">Contacto</a>
              <div className="flex gap-4">
                <Link to={"/"}>
                  <img src={facebook} alt="facebook" />
                </Link>
                <Link to={"/"}>
                  <img src={instagram} alt="instagram" />
                </Link>
                <Link to={"/"}>
                  <img src={x_logo} alt="x" />
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="container flex justify-between">
            <img src={logo} alt="logo" className="h-[5em]" />
            <div className="flex gap-4">
              <Link to={"/"}>
                <img src={facebook} alt="facebook" />
              </Link>
              <Link to={"/"}>
                <img src={instagram} alt="instagram" />
              </Link>
              <Link to={"/"}>
                <img src={x_logo} alt="x" />
              </Link>
            </div>
          </div>
          <div className="container flex justify-between">
            <div className="flex items-center gap-5 text-sm font-medium font-secondary">
            <a href="#start">Comienzo</a>
              <a href="#benefits">Beneficios</a>
              <a href="#initiative">Iniciativas</a>
              <a href="#about">Nosotros</a>
              <a href="#contact">Contacto</a>
            </div>
            <form onSubmit={() => {}} className="w-[350px] flex flex-col gap-4">
              <p className="text-sm font-semibold">
                Suscríbete a nuestro Boletín
              </p>
              <div className="flex justify-between gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-6 border rounded-md shadow-md"
                />
                <button className="px-6 py-2 text-lg font-semibold text-white rounded-lg bg-color-1">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      <div className="flex items-center justify-center w-full p-5 border-t">
        <div className="container flex justify-between text-sm">
          <p>Privacy Policy</p>
          <p>© 2025 Binlab</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
