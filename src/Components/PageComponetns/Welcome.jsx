import React from 'react'

const Welcome = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        <div className="w-full max-w-md h-[50%] bg-green-600 rounded-t-lg flex flex-col items-center justify-end text-white shadow-lg">
          <img
            src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F303af063-dd09-41ad-a0fd-e7beeb22f4e0_uz.jpg&w=1920&q=75"
            alt="Promo"
            className="w-full max-h-50 object-cover rounded-md mb-2"
          />
          <div className="text-md flex flex-col gap-2 bg-white text-black p-5">
            Biz har bir xaridingizdan 2% miqdorida keshbek sovgʻa qilish uchun sodiqlik dasturimizni ishga tushirdik! Yana tugʻilgan kunga sovgʻalar va eksklyuziv aksiyalarda ishtirok imkoniyati ham bor. Roʻyxatdan oʻting va Bellkoinlarni hoziroq yigʻishni boshlang!
          <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-300 transition">
            Bellissimo!
          </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Welcome
