import React, { useEffect, useState } from 'react'
import { FaBeer, FaReact } from 'react-icons/fa';
import { BiPlus } from "react-icons/bi";

const Welcome = () => {

  localStorage.clear()

  const [showModal, setShowModal] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited') === 'true';
    if (!hasVisited) {
      setShowModal(true)
      localStorage.setItem('hasVisited', 'true')
    }
  }, [])

  const handleClose = () => {
    setClosing(true)
    setTimeout(() => {
      setShowModal(false)
    }, 200)
  }

  if (!showModal) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-gray-900/50 backdrop-blur-sm">
        


        <div className={`w-full max-w-md h-[70%] bg-green-600 rounded-t-[40px] flex flex-col items-center justify-end text-white shadow-2xl relative overflow-hidden
          ${closing ? 'animate-slide-down' : 'animate-slide-up'}`}>
          <img
            src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F303af063-dd09-41ad-a0fd-e7beeb22f4e0_uz.jpg&w=1920&q=75"
            alt="Promo"
            className="h-[65%] w-full object-cover translate-y-12 rounded-t-[40px] transition-transform duration-500 hover:scale-105"
          />

          <div className="text-md flex flex-col gap-6 z-10 bg-white text-black px-5 py-7 rounded-t-3xl w-full">
            <BiPlus onClick={handleClose} className="absolute top-[1%] z-20 right-4 text-[40px] text-white animate-spin-slow rotate-45" />
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

    </>
  )
}

export default Welcome
