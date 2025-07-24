import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdLogin, MdPlayCircleFilled } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BiRestaurant } from 'react-icons/bi';
import { useAppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  const [isDelivery, setIsDelivery] = useState(true);
  const { user } = useAppContext()

  const navigate = useNavigate()

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
    >
      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[60%] h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <button onClick={onClose} className="absolute top-4 -right-15 text-2xl bg-white rounded-full p-3">
          <IoMdClose />
        </button>

        <div className="p-4 rounded-full">
          <select className="w-full p-3 py-3 bg-gray-100 rounded-full">
            <option>Samarqand</option>
            <option>Toshkent</option>
          </select>
        </div>

        <div className="p-4 flex flex-col gap-3">
          {
            !user ? (
              (<button onClick={() => {
                navigate('/login');
                onClose();
              }} className="flex items-center gap-2 p-3 rounded-full bg-gray-100">
                <MdLogin /> Kirish
              </button>)
            ) : (
              <button onClick={() => navigate('/profile')} className="flex items-center gap-2 p-3 rounded-full bg-gray-100">
                <MdPlayCircleFilled /> Profile
              </button>
            )
          }
          <button className="flex items-center gap-2 p-3 rounded-full bg-gray-100">
            <FaMapMarkerAlt /> Menu
          </button>
          <button className="flex items-center gap-2 p-3 rounded-full bg-gray-100">
            <BiRestaurant /> Restoranlar
          </button>

          <button className="flex items-center gap-2 mt-4 p-3 bg-gray-100 rounded-full">
            <FaPhoneAlt /> Bizga qo'ng'iroq
          </button>

          <div className="mt-6">
            <p className="text-sm font-medium mb-2">Til</p>
            <div className="flex items-center justify-center p-1 gap-2 bg-gray-100 rounded-full shadow-inner w-[250px] mt-4">
              <button
                onClick={() => setIsDelivery(true)}
                className={`flex-1 px-4 py-2 rounded-full text-[12px] font-medium transition 
          ${isDelivery ? "bg-white text-black shadow" : "text-gray-500"}`}
              >
                uzb
              </button>
              <button
                onClick={() => setIsDelivery(false)}
                className={`flex-1 px-4 py-2 rounded-full text-[12px] font-medium transition 
          ${!isDelivery ? "bg-white text-black shadow" : "text-gray-500"}`}
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
