import React from 'react'
import { useAppContext } from '../Context/AppContext'
import { SiBitcoinsv } from "react-icons/si";
import { MdAccountCircle } from "react-icons/md";
import { BiSolidUserBadge } from 'react-icons/bi';

const Header = () => {
  const { responsive, user } = useAppContext();

  return (
    <>
      {
        responsive ? (
          <div className="w-full flex items-center justify-between px-4 py-3 bg-[#006f4c] text-white shadow-md">
            <div className="flex items-center gap-2">
              <SiBitcoinsv className="text-[25px] text-orange-300" />
              <span className="font-semibold text-lg">23</span>
            </div>

            <div className="cursor-pointer">
              {
                !user ? (
                  <div className="">
                    <BiSolidUserBadge className="text-[24px]" />
                  </div>
                ) : (
                  <div className=" flex gap-1 bg-white text-[#006f4c] p-2 rounded-full hover:bg-[#006f4c] hover:text-white border border-white trsnfomr duration-300">
                    <MdAccountCircle className="text-[24px]" />
                    <p>kirish</p>
                  </div>
                )
              }
            </div>
          </div>
        ) : (
          <h1 className="text-center text-xl font-bold mt-4">Desktop version</h1>
        )
      }
    </>
  )
}

export default Header;
