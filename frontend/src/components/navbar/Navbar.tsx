import LoginButton from "../login/LoginButton";
import logo from "../../assets/LogoLarge.png";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center border-b bg-white shadow-lg">
        <div className="container flex justify-between p-3 text-black">
          <a href="#home">
            <img src={logo} alt="logo" className="w-[14.5em] h-[4.5em]" />
          </a>
          <div className="flex items-center gap-5 text-sm font-semibold font-secondary">
            <div className="items-center hidden gap-5 md:flex">
              <a href="#start">Comienzo</a>
              <a href="#benefits">Beneficios</a>
              <a href="#initiative">Iniciativas</a>
              <a href="#about">Nosotros</a>
              <a href="#contact">Contacto</a>
              <br/>
              <LoginButton />
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 z-50 w-full h-auto shadow-lg bg-primary md:hidden">
                <div className="flex justify-end p-4">
                  <button onClick={() => setIsMenuOpen(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col items-center justify-evenly min-h-dvh">
                <a href="#start">Comienzo</a>
                <a href="#benefits">Beneficios</a>
                <a href="#initiative">Iniciativas</a>
                <a href="#about">Nosotros</a>
                <a href="#contact">Contacto</a>
                  <LoginButton />
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
