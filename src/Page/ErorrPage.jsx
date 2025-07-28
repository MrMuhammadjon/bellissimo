// src/pages/ErrorPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 text-center">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[120px] font-extrabold text-green-600 leading-none"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
      >
        Sahifa topilmadi
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-500 mb-8"
      >
        Afsuski, siz izlayotgan sahifa mavjud emas yoki ko‘chirilgan.
      </motion.p>

      <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        onClick={() => navigate('/')}
        className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
      >
        Bosh sahifaga qaytish
      </motion.button>
    </div>
  );
};

export default ErrorPage;
