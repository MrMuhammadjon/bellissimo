import React, { useState } from 'react'
import { useAppContext } from '../Context/AppContext'
import { SiBitcoinsv } from "react-icons/si";
import { LuPen, LuShoppingCart, LuUser, LuUserCog } from "react-icons/lu";
import { MdAccountCircle, MdLocationOn } from "react-icons/md";
import { BiMenu, BiPen, BiPhoneCall, BiSolidCoin, BiSolidUserBadge, BiUser, BiUserCheck, BiUserPlus } from 'react-icons/bi';
import MobileMenu from './PageComponetns/MobileMenu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { responsive } = useAppContext();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user)

  return (
    <>
      {
        responsive ? (
          <>
            <div className="w-full flex items-center justify-between px-4 py-2 bg-[#006f4c] text-white shadow-md">
              <div className="flex items-center gap-2">
                <SiBitcoinsv className="text-[25px] text-yellow-400" />
                <span className="font-semibold text-lg">23</span>
              </div>

              <div className="cursor-pointer">
                {
                  !user ? (
                    <div onClick={() => navigate('/login')} className=" flex gap-1 bg-white text-[#006f4c] p-1.5 py-1 rounded-full hover:bg-[#006f4c] hover:text-white border border-white trsnfomr duration-300">
                      <MdAccountCircle className="text-[24px]" />
                      <p>kirish</p>
                    </div>
                  ) : (
                    <div className="" onClick={() => navigate('/loyalty')}>
                      <LuUser className="text-[24px]" />
                    </div>
                  )
                }
              </div>

            </div>
          </>
        ) : (
          <div className="hidden md:flex flex-col items-center justify-between px-6 py-3 bg-white gap-2.5">
            {/* Top bar */}
            <div className="flex items-center justify-between w-full max-w-6xl  border-b pb-3 border-gray-400">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1 text-green-700 font-semibold">
                  <BiPhoneCall size={20} />
                  1174
                </div>
                <a href="#" className="text-gray-600 hover:text-black">Biz haqimizda</a>
                <a href="#" className="text-gray-600 hover:text-black">Bo'sh ish o'rinlari</a>
              </div>
              <img src="https://bellissimo.uz/images/uzFlag.svg" alt="UZ" className="h-5" />
            </div>

            {/* Main bar */}
            <div className="flex items-center justify-between w-full max-w-6xl">
              <div className="flex items-center gap-6">
                <img onClick={()=> navigate('/')} src="https://bellissimo.uz/images/logo_new.svg" alt="Logo" className="h-10" />
                <div className="flex items-center gap-1">
                  <MdLocationOn className="text-green-600" />
                  <span className="text-gray-800 font-semibold">Toshkent</span>
                </div>
                <div className="bg-gray-100 px-2 py-1 rounded text-sm font-medium">24/7</div>
                <div className="text-sm text-gray-600">Bepul yetkazish endi 24/7 mavjud</div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <BiSolidCoin className="text-yellow-500" />
                  <span className="font-semibold">0</span>
                </div>
                {
                  !user ? (
                    <button onClick={() => navigate('/login')} className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800">
                      Kirish
                    </button>
                  ) : (
                    <div onClick={() => navigate('/profile')} className="flex items-center gap-2 cursor-pointer hover:text-green-700">
                      <BiUser className="text-3xl rounded-full p-1 bg-gray-200" />
                      <span className="text-sm">{user.name || "Profil"}</span>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Header;