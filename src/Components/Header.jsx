import React, { useState } from 'react'
import { useAppContext } from '../Context/AppContext'
import { SiBitcoinsv } from "react-icons/si";
import { LuShoppingCart } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { BiMenu, BiSolidUserBadge } from 'react-icons/bi';
import MobileMenu from './PageComponetns/MobileMenu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { responsive, user } = useAppContext();
  const [isDelivery, setIsDelivery] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate  = useNavigate()

  return (
    <>
      {
        responsive ? (
          <>
            <MobileMenu className='right' isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            <div className="w-full flex items-center justify-between px-4 py-2 bg-[#006f4c] text-white shadow-md">
              <div className="flex items-center gap-2">
                <SiBitcoinsv className="text-[25px] text-yellow-400" />
                <span className="font-semibold text-lg">23</span>
              </div>

              <div className="cursor-pointer">
                {
                  !user ? (
                    <div onClick={()=> navigate('/login')} className=" flex gap-1 bg-white text-[#006f4c] p-1.5 py-1 rounded-full hover:bg-[#006f4c] hover:text-white border border-white trsnfomr duration-300">
                      <MdAccountCircle className="text-[24px]" />
                      <p>kirish</p>
                    </div>
                  ) : (
                    <div className="">
                      <BiSolidUserBadge className="text-[24px]" />
                    </div>
                  )
                }
              </div>

            </div>
            <div className="w-full flex items-center justify-between px-4 md:hidden">
              {/* Menu icon */}
              <div>
                <BiMenu size={24} onClick={() => setMenuOpen(true)} />
              </div>

              <div className="flex items-center justify-center p-1 gap-2 bg-gray-100 rounded-full shadow-inner w-[250px] mt-4">
                <button
                  onClick={() => setIsDelivery(true)}
                  className={`flex-1 px-4 py-2 rounded-full text-[12px] font-medium transition 
          ${isDelivery ? "bg-white text-black shadow" : "text-gray-500"}`}
                >
                  Yetkazib berish
                </button>
                <button
                  onClick={() => setIsDelivery(false)}
                  className={`flex-1 px-4 py-2 rounded-full text-[12px] font-medium transition 
          ${!isDelivery ? "bg-white text-black shadow" : "text-gray-500"}`}
                >
                  Olib ketish
                </button>
              </div>

              <div className="relative">
                <LuShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-red-700 text-white text-[10px] px-[6px] py-[1px] rounded-full">
                  0
                </span>
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-center text-xl font-bold mt-4">Desktop version</h1>
        )
      }
    </>
  )
}

export default Header;
