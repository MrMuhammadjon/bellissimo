import React, { useState } from 'react'
import { useAppContext } from '../Context/AppContext'
import { SiBitcoinsv } from "react-icons/si";
import { LuPen, LuShoppingCart, LuUser, LuUserCog } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { BiMenu, BiPen, BiSolidUserBadge } from 'react-icons/bi';
import MobileMenu from './PageComponetns/MobileMenu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const { responsive} = useAppContext();
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
                    <div className="" onClick={()=> navigate('/loyalty')}>
                      <LuUser className="text-[24px]" />
                    </div>
                  )
                }
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