// src/pages/Profile.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiChevronRight, FiBell } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import {
  FaBoxOpen,
  FaUser,
  FaMapMarkerAlt,
  FaCreditCard,
  FaQuestionCircle,
  FaHeadphones,
} from "react-icons/fa";

import { RxAvatar } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import HomeBtn from "../Components/PageComponetns/HomeBtn";
import Home from "./Home";
import { useAppContext } from "../Context/AppContext";
import { X } from "lucide-react";

const Loyalty = () => {

  const navigate = useNavigate()
  const { responsive } = useAppContext()



  return (
    <>
      <Outlet />
      <HomeBtn />
      {/* Menu items */}
      {
        responsive ?
          (
            <div className="fixed w-full mx-auto h-screen bg-[url('https://bellissimo.uz/_next/static/media/bellCoinHistoryBlockBg.d92207de.png')] bg-cover bg-center text-white flex flex-col justify-between top-0">

              {/* Header */}
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-lg font-semibold">
                    Bellkoinlar <span className="text-xs text-gray-300">Beta</span>
                  </h1>
                  <button onClick={() => navigate('/')} className="text-xl font-bold">&times;</button>
                </div>

                {/* Balance */}
                <div className="text-center my-6">
                  <div className="flex justify-center items-center text-3xl font-bold gap-1">
                    <img
                      src="https://img.icons8.com/fluency/48/bitcoin.png"
                      alt="coin"
                      className="w-6 h-6"
                    />
                    <span>0</span>
                  </div>
                </div>

                {/* App suggestion */}
                <div className="bg-white/10 rounded-lg p-3 text-center">
                  <p className="text-sm font-medium">
                    Barchasi Bellissimo ilovasida unutilmasroq!
                  </p>
                  <button className="mt-2 bg-white text-[#00623D] px-4 py-1 rounded-full text-sm font-semibold">
                    Yuklab olish
                  </button>
                </div>

                {/* Order button */}
                <div className="mt-6">
                  <button className="w-full bg-yellow-400 text-black font-bold py-3 rounded-full text-lg shadow-md">
                    Buyurtma berish
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-6 bg-white rounded-t-3xl text-black pt-4 px-4 flex-1">
                <div className="flex justify-center gap-4 mb-4">
                  <button className="text-sm font-semibold border-b-2 border-black pb-1">
                    Tarix
                  </button>
                  <button className="text-sm text-gray-400">Kuyadi</button>
                </div>

                {/* Empty state */}
                <div className="flex flex-col items-center mt-8">
                  <img
                    src="https://img.icons8.com/ios-filled/50/bitcoin--v1.png"
                    alt="no coin"
                    className="w-10 h-10 opacity-30"
                  />
                  <p className="text-gray-500 mt-4">Sizda hali Bellkoinlar yo‘q</p>
                  <button className="text-green-600 font-semibold mt-2">
                    Bonus to‘plash
                  </button>
                </div>
              </div>
            </div>
          ) :
          (
            <div className="">
              <div className="w-full h-screen"></div>
              <div className="h-screen w-full fixed top-0 p-12  flex items-center justify-center" id="loaud">

                <button onClick={() => navigate('/')} className="top-20 right-[20%] absolute bg-white rounded-full p-3">
                  <X />
                </button>


                <div className="flex bg-green-700 rounded-[50px] overflow-hidden shadow-xl max-w-[700px]">
                  {/* Chap panel */}
                  <div className="bg-green-700 text-white p-6 w-[350px] flex flex-col items-center">
                    <div className="text-xl font-bold">Bellkoinlar <span className="text-xs">Beta</span></div>
                    <div className="text-yellow-400 text-4xl my-4">🪙 0</div>
                    <p className="text-center text-sm mb-4">Barchasi Bellissimo ilovasida unumliroq!</p>
                    <img src="/qr-code.png" alt="QR code" className="w-24 h-24 my-4" />
                    <p className="text-sm mb-2">Yuklab olish uchun QR kodni skanerlash</p>
                    <button className="mt-4 bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full w-full transform duration-200 hover:bg-yellow-200 cursor-pointer">Buyurtma berish</button>
                  </div>

                  {/* O'ng panel */}
                  <div className="bg-white p-6 w-[300px] flex flex-col items-center justify-center text-center rounded-[50px]">
                    <div className="flex justify-between w-full mb-4 bg-gray-100 p-1 rounded-full">
                      <button className="w-1/2 py-1 rounded-full text-sm bg-white shadow">Tarix</button>
                      <button className="w-1/2 py-1 rounded-full text-sm text-gray-400">Kuyadi</button>
                    </div>
                    <div className="mb-4">
                      <img src="/coin-placeholder.png" alt="coin" className="w-10 h-10 mx-auto opacity-50" />
                    </div>
                    <div className="text-gray-600 mb-2">Sizda hali Bellkoinlar yo‘q</div>
                    <div className="text-green-700 font-semibold">Bonus to‘plash</div>
                  </div>
                </div>
              </div>
            </div>
          )
      }
    </>
  );
};

export default Loyalty;
