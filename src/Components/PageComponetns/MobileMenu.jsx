import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaPhoneAlt, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { MdLogin } from 'react-icons/md';
import { BiBorderOuter, BiFoodMenu, BiMenu, BiRestaurant } from 'react-icons/bi';
import { LuUser } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CiPizza } from "react-icons/ci";

const MobileMenu = ({ isOpen, onClose }) => {
  const [isDelivery, setIsDelivery] = useState(true);
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
    >
      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[60%] h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 -right-15 text-2xl bg-white rounded-full p-3">
          <IoMdClose />
        </button>

        {/* City Selector */}
        <div className="p-4">
          <select className="w-full p-3 bg-gray-100 rounded-[20px] transform duration-300 hover:py-5">
            <option>Samarqand</option>
            <option>Toshkent</option>
          </select>
        </div>

        {/* Menu Items */}
        <div className="p-4 flex flex-col gap-3">
          {!user ? (
            <button
              onClick={() => {
                navigate('/login');
                onClose();
              }}
              className="cursor-pointer transform duration-300 hover:py-5 flex items-center gap-2 p-3 rounded-[20px] bg-gray-100"
            >
              <MdLogin /> Kirish
            </button>
          ) : (
            <div onClick={() => navigate('/profile')} className="flex flex-col gap-4 p-4 bg-gray-100 rounded-[20px] transform duration-300 hover:py-5">
              <div className='flex items-center gap-1 cursor-pointer'>
                <FaUser className='text-2xl text-gray-500' />
                <div className="">
                  <p className="text-sm text-black font-bold">{user.name || "Foydalanuvchi"}</p>
                  <p className="text-xs text-gray-500">{user.phone || ""}</p>
                </div>
              </div>
              <div className="w-full h-[2px] bg-gray-300 rounded-full"></div>
              <button className="flex gap-2 rounded-full bg-gray-100 cursor-pointer">
                <BiFoodMenu className='text-2xl text-gray-500' />
                Mening buyurtmalarim
              </button>
            </div>
          )}



          <button className="cursor-pointer flex items-center gap-2 p-4 rounded-[20px] bg-gray-100 transform duration-300 hover:py-5">
            <CiPizza  className='text-2xl text-gray-500' /> Menu
          </button>

          <button className="cursor-pointer flex items-center gap-2 mt-4 p-4 bg-gray-100 rounded-[20px] transform duration-300 hover:py-5">
            <FaPhoneAlt className='text-1xl text-gray-500' /> Bizga qo'ng'iroq
          </button>

          {/* Language Switch */}
          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Til</p>
            <div className="flex items-center justify-center p-1 gap-2 bg-gray-100 rounded-full w-[250px] mt-4">
              <button
                onClick={() => setIsDelivery(true)}
                className={`flex-1 px-4 py-2 rounded-full text-[12px] font-medium transition ${isDelivery ? "bg-white text-black shadow" : "text-gray-500"}`}
              >
                uzb
              </button>
              <button
                onClick={() => setIsDelivery(false)}
                className={`flex-1 px-4 py-2 rounded-full text-[12px] font-medium transition ${!isDelivery ? "bg-white text-black shadow" : "text-gray-500"}`}
              >
                ru
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
