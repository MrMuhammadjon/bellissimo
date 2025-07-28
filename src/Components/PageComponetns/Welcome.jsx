import React, { useEffect, useState } from 'react'
import { BiPlus } from "react-icons/bi";
import { useAppContext } from '../../Context/AppContext';
import PizzaImg from '../../assets/img/pizza-4.png.png'
import { TypeAnimation } from 'react-type-animation';

const Welcome = () => {
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const { responsive } = useAppContext();


  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited') === 'true';
    if (!hasVisited) {
      setShowModal(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
    }, 200);
  };

  if (!showModal) return null;

  return (
    <>
      {responsive ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-gray-900/50 backdrop-blur-sm">
          <div
            className={`w-full h-[70%] bg-[#006f4c] rounded-t-[40px] flex flex-col items-center justify-end text-white shadow-2xl relative overflow-hidden 
        ${closing ? 'animate-slide-down' : 'animate-slide-up'}`}
          >
            <div className="w-full h-[50%] text-3xl font-bold text-yellow-300 text-center relative mb-10">
              <TypeAnimation
                sequence={[
                  'BELISSIMO CLUB AZOSIGA AYLANISHGA TAYYORMISIZ!', 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <img
                src={PizzaImg}
                alt="Promo"
                className="h-[100%] w-[100%] object-contain m-auto transition-transform duration-500 hover:scale-105 absolute top-[40%] left-1/2 -translate-x-1/2 scale-110 animate-pizza"
              />
            </div>

            {/* Content */}
            <div className="text-md flex flex-col gap-6 z-10 bg-white text-black px-5 py-7 rounded-t-3xl w-full">
              <BiPlus
                onClick={handleClose}
                className="absolute top-4 right-4 text-[40px] text-white animate-spin-slow cursor-pointer z-20"
              />
              <p>
                Biz har bir xaridingizdan <strong>2% keshbek</strong> sovgʻa qilish uchun sodiqlik dasturimizni ishga tushirdik! Yana tugʻilgan kunga sovgʻalar va eksklyuziv aksiyalarda ishtirok imkoniyati ham bor. Roʻyxatdan oʻting va <strong>Bellkoinlarni</strong> hoziroq yigʻishni boshlang!
              </p>

              <button
                className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105">
                Bellissimo!
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-center text-xl font-bold mt-10">
          Desktop version coming soon
          now ony for mobile version
        </h1>
      )}
    </>
  );
};

export default Welcome;
