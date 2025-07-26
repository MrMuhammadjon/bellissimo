// src/pages/Profile.jsx
import React from "react";
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

const Loyalty = () => {

  const navigate = useNavigate()



  return (
    <>
      <Outlet />
      <HomeBtn />
      {/* Menu items */}
      <div className="fixed w-full max-w-sm mx-auto h-screen bg-[url('https://bellissimo.uz/_next/static/media/bellCoinHistoryBlockBg.d92207de.png')] bg-cover bg-center text-white flex flex-col justify-between top-0">

        {/* Header */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">
              Bellkoinlar <span className="text-xs text-gray-300">Beta</span>
            </h1>
            <button onClick={()=> navigate('/')} className="text-xl font-bold">&times;</button>
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
    </>
  );
};

export default Loyalty;
