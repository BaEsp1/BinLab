
import { useState, useEffect } from "react";
import { likeIcon, shareIcon } from "../../assets";
import { Initiative } from "../../store/Initiatives/showInitiativesSlice";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import DetailedLP from "../graf/landing";

export const ViewInit = () => {

    const data = [{ id: 1 ,name: "Extructor BV",priceFluctuation: [
        { date: "2024-11-22", value: 10 },
        { date: "2024-11-23", value: 27 },
        { date: "2024-11-24", value: 20 },
        { date: "2024-11-25", value: 35 },
        { date: "2024-11-26", value: 30 },
        { date: "2024-11-27", value: 35 },
        { date: "2024-11-28", value: 50 },
        { date: "2024-11-29", value: 45 },
        { date: "2024-11-30", value: 50 },
        { date: "2024-12-01", value: 55 }
      ],
      colaborator: 3,
      tokens: "EXTBV",
      missions: "110/200",
      likes: 150,
      shares: 35,
      createdAt: "2024-12-03T10:00:00Z",
      logo: "https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--logo-cryptocurrency-btc-gold-symbol-pack-science-technology-illustrations-3495806.png?f=webp",
      idea: "Crear un programa de educación para personas con discapacidades.",
      opportunity: "Educación para personas con discapacidades",
      problem: "Falta de acceso a educación de calidad ",
      solution: "Implementar aulas virtuales y materiales educativos digitales.",
      buy_price: 100,
      sell_price: 200},{
      id:5,
      name: "Init Comunity",
      priceFluctuation: [
        { date: "2024-11-22", value: 15 },
        { date: "2024-11-23", value: 2 },
        { date: "2024-11-24", value: 89 },
        { date: "2024-11-25", value: 45 },
        { date: "2024-11-26", value: 60 },
        { date: "2024-11-27", value: 35 },
        { date: "2024-11-28", value: 40 },
        { date: "2024-11-29", value: 85 },
        { date: "2024-11-30", value: 30 },
        { date: "2024-12-01", value: 55 }
      ],
      colaborator: 3,
      tokens: "INITC",
      missions: "110/200",
      likes: 150,
      shares: 35,
      createdAt: "2024-01-15T10:00:00Z",
      logo: "https://cryptologos.cc/logos/oasis-network-rose-logo.png",
      idea: "Crear un programa de educación en línea para niños en comunidades rurales.",
      opportunity: "Programa de educación rural",
      problem: "Falta de acceso a educación de calidad en ciertas zonas de Argentina.",
      solution: "Implementar aulas virtuales y materiales educativos digitales.",
      buy_price: 80,
      sell_price: 65
      },{
      id:2,
      name: "GreenTech",
      priceFluctuation: [
        { date: "2024-11-22", value: 30 },
        { date: "2024-11-23", value: 40 },
        { date: "2024-11-24", value: 28 },
        { date: "2024-11-25", value: 50 },
        { date: "2024-11-26", value: 55 },
        { date: "2024-11-27", value: 50 },
        { date: "2024-11-28", value: 70 },
        { date: "2024-11-29", value: 75 },
        { date: "2024-11-30", value: 80 },
        { date: "2024-12-01", value: 85 }
      ],
      colaborator: 5,
      tokens: "GTEC",
      missions: "120/250",
      likes: 200,
      shares: 40,
      createdAt: "2024-12-01T11:00:00Z",
      logo: "https://cdn-icons-png.freepik.com/256/7390/7390920.png?semt=ais_hybrid",
      idea: "Crear una plataforma de energías renovables para pequeñas comunidades.",
      opportunity: "Plataforma de energías renovables ",
      problem: "Acceso limitado a energías limpias y sostenibles.",
      solution: "Proveer soluciones de energía solar y eólica accesibles.",
      buy_price: 150,
      sell_price: 200},{
      id:4,
      name: "TechSolve",
      priceFluctuation: [
        { date: "2024-11-22", value: 50 },
        { date: "2024-11-23", value: 55 },
        { date: "2024-11-24", value: 40 },
        { date: "2024-11-25", value: 45 },
        { date: "2024-11-26", value: 20 },
        { date: "2024-11-27", value: 15 },
        { date: "2024-11-28", value: 40 },
        { date: "2024-11-29", value: 25 },
        { date: "2024-11-30", value: 30 },
        { date: "2024-12-01", value: 15 }
      ],
      colaborator: 6,
      tokens: "TSOL",
      missions: "130/300",
      likes: 250,
      shares: 50,
      createdAt: "2024-03-05T12:00:00Z",
      logo: "https://img.freepik.com/free-vector/flat-design-crypto-mining-logo-template_23-2149409054.jpg?t=st=1733358748~exp=1733362348~hmac=f91aaa5b2f857bf71528c312367ef62b7f6cbb30dc88e90bfd6465c1b2f5464a&w=740",
      idea: "Soluciones tecnológicas para la gestión de recursos en empresas.",
      opportunity: "Mejora de gestión de recursos en empresas",
      problem: "Falta de herramientas eficientes para gestión de recursos.",
      solution: "Desarrollar software especializado para empresas medianas.",
      buy_price: 200,
      sell_price: 300 },{
      id:3,
      name: "EduCare",
      priceFluctuation: [
        { date: "2024-11-22", value: 20 },
        { date: "2024-11-23", value: 25 },
        { date: "2024-11-24", value: 10 },
        { date: "2024-11-25", value: 35 },
        { date: "2024-11-26", value: 50 },
        { date: "2024-11-27", value: 45 },
        { date: "2024-11-28", value: 50 },
        { date: "2024-11-29", value: 24 },
        { date: "2024-11-30", value: 60 },
        { date: "2024-12-01", value: 65 }
      ],
      colaborator: 4,
      tokens: "EDUC",
      missions: "140/350",
      likes: 180,
      shares: 45,
      createdAt: "2024-04-15T13:00:00Z",
      logo: "https://cdn-icons-png.freepik.com/256/18309/18309614.png?semt=ais_hybrid",
      idea: "Plataforma de educación para mejorar habilidades laborales.",
      opportunity: "Mejorar habilidades laborales",
      problem: "Falta de preparación en habilidades técnicas en jóvenes profesionales.",
      solution: "Ofrecer cursos online con certificación de habilidades técnicas.",
      buy_price: 120,
      sell_price: 150
    }]

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const [carouselData, setCarouselData] = useState<Initiative[]>([]);

    useEffect(() => {
      setCarouselData(data);
    }, []);

    return (
        <div className="w-full mx-auto text-black bg-white/10 px-4 rounded-lg shadow-lg">
         <Slider {...settings}>
         {carouselData.map((item) => (
            <div className="relative">
                <h1 className="text-3xl text-white p-1"><strong>{item.name} - {item.tokens}</strong></h1>
            <div className="flex flex-row  justify-between m-auto">
              <div className="flex flex-col">
                  <div className="flex flex-row w-[34em] m-3 bg-white h-[17.5em] justify-flex-start rounded-lg shadow">
                    <div className="flex flex-col m-[2em]">
                      <img src={item.logo}
                        alt={item.name}
                        className="w-[8em] h-[7em] m-auto "
                      />
                      <div className="flex flex-row gap-1">
                          <button
                          className="bg-[#00B2FF] text-white justify-center p-2 rounded-full w-[3.375em] h-[2.125em] flex items-center shadow-lg"
                        >Buy</button>
                    
                        <button
                          className="bg-[#bbb8b8] text-white p-2 justify-center rounded-full w-[3.375em] h-[2.125em] flex items-center shadow-lg"
                        >Join</button>

                        <button
                        className="m-2"
                        ><img src={likeIcon} className="h-[1.25em]" />
                        </button>
                        
                        <button className="m-2"
                        ><img src={shareIcon} className="h-[1.25em]" />
                      </button>
                      </div>
                    </div>

                    <div className="flex flex-col text-base" >
                      <div><h2 className="text-base italic font-semibold text-left">Problema:</h2>
                        <p className="mb-1 ml-1 text-left text-base">{item.problem}</p></div>
                      <div><h2 className="text-base italic font-semibold text-left">Oportunidad:</h2> <p className="mb-1 ml-1 text-left text-base">{item.opportunity}</p></div>
                      <div><h2 className="text-base italic font-semibold text-left">Solución:</h2> <p className="mb-1 ml-1 text-left text-base">{item.solution}</p></div>
                      <div><h2 className="text-base italic font-semibold text-left">Idea:</h2> <p className="mb-1 ml-1 text-left text-base">{item.idea}</p></div>
                    </div>
                  </div>
                    </div>
    
              <div className="m-auto flex flex-col ">
                <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 m-3 mr-12 text-base">
                  <div>
                    <h2 className="  italic font-semibold text-center">Colaboradores:</h2><p className="bg-[#00B2FF]/20 rounded-lg p-1 w-[4.5625em] text-center m-auto text-sm p-1"> {item.colaborator}</p></div>
                  <div><h2 className=" italic font-semibold text-center">Misiones:</h2><p className="text-center m-auto text-sm p-1"> {item.missions}</p></div>
                  <div><h2 className=" italic font-semibold text-center">Likes:</h2><p className="text-center m-auto text-sm p-1"> {item.likes}</p></div>
                  <div><h2 className=" italic font-semibold text-center">Shares:</h2><p className="text-center m-auto text-sm p-1"> {item.shares}</p></div>
                </div>
              </div>
  
          </div>
  
          <div className="flex flex-row justify-center ">
            <div className="bg-white rounded-lg shadow p-1 flex flex-row justify-evenly gap-3" >
  
              <div className="">
                <h2 className="text-lgg font-semibold text-center">Token {item.tokens}</h2>
                <DetailedLP priceFluctuation={item.priceFluctuation} />
              </div>
              <div className="flex flex-col items-center justify-evenly gap-6 p-3 ">
                <div className="flex flex-col items-center">
                  <h2 className="text-lg italic font-semibold text-center">Precio de venta:</h2>
                  <p className="m-3 text-2xl text-primary font-bold">${item.sell_price}</p>
                </div>
  
                <div className="flex flex-col items-center p-2">
                  <h2 className="text-lg italic font-semibold text-center">Precio de Compra:</h2>
                  <p className="m-3 text-2xl text-primary font-bold">${item.buy_price}</p>
                </div>
                </div>
            </div>
            


              </div>
            </div>
        ))}
        </Slider>
      </div>
     )

}