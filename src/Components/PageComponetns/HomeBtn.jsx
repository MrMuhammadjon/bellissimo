import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';

const HomeBtn = () => {
    const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate('/')}
      className="fixed right-[10%] bottom-[5%] flex items-center gap-2 text-white bg-green-600 hover:bg-green-700 transition px-2 py-2 rounded-full shadow-md"
    >
      <AiOutlineHome className="text-xl" />
    </button>
  )
}

export default HomeBtn
