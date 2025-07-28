import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppContext } from '../Context/AppContext';
import { motion } from 'framer-motion';
import { BiLeftArrow } from 'react-icons/bi';
import { LuLeaf, LuMoveLeft } from 'react-icons/lu';

const ProductDetalis = () => {
  const { code } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { AddToCart, toggleCart } = useAppContext();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios.get(`https://686bac8ee559eba908739191.mockapi.io/Products`)
      .then(res => {
        const found = res.data.find(p => p.code === code);
        setProduct(found || null);
        setLoading(false);
      })
      .catch(err => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, [code]);

  if (!isDesktop) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <p className="text-xl text-gray-600 font-medium">
          Ushbu sahifa faqat kompyuter (desktop) ekranlarida ko‘rsatiladi.
        </p>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Yuklanmoqda...</div>;
  }

  if (!product) {
    return <div className="text-center py-10 text-red-500">Mahsulot topilmadi</div>;
  }

  return (
    <div
      id="productDetalis"
      className="fixed inset-0 z-50 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3 }}
        className="relative bg-white rounded-2xl shadow-xl max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 p-10 md:p-6"
      >
        {/* Yopish tugmasi */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 rounded-full shadow-sm w-10 h-10 text-2xl font-bold hover:text-gray-600 transition flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100"
        >
          <LuMoveLeft />
        </button>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={product.img}
            alt={product.name}
            className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-between"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-3">{product.name}</h1>
            <p className="text-gray-600 text-sm mb-1">
              Kategoriya: <span className="capitalize">{product.category}</span>
            </p>
            <p className="text-gray-600 text-sm mb-1">
              Hajmi: <span className="font-medium">{product.sizes}</span>
            </p>
            <div className="mt-4">
              <p className="text-xl font-semibold text-green-600">
                {product.price.toLocaleString()} so'm
              </p>
            </div>
          </div>

          {/* 🟩 Tugma - pastdan chiqadi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => toggleCart(product)}
              className="flex-1 py-3 rounded-full bg-[#006f4c] hover:bg-[#5aab91] text-white font-medium transition cursor-pointer"
            >
              {AddToCart?.some(item => item.id === product.id)
                ? 'Remove from Cart'
                : 'Add to Cart'}
            </button>
          </motion.div>

          {/* 📘 Tavsif – o'ngdan chiqadi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6"
          >
            <h2 className="text-xl font-semibold mb-2">Tavsif</h2>
            <p className="text-gray-700">{product.description}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );

};

export default ProductDetalis;
