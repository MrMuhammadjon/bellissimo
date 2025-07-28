import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const navigate = useNavigate()

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-4 text-center bg-white">
      <div className="mb-6 p-4 bg-gray-100 rounded-full">
        <BiShoppingBag className="w-12 h-12 text-gray-400" />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-2">Savatcha</h1>

      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Hozircha sizning savatchangiz bo'sh 😊
      </p>

      <button onClick={()=> navigate('/')} className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors duration-200">
        Menyuga qaytish
      </button>
    </div>
  );
};

export default Cart;
