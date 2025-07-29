import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAppContext } from '../Context/AppContext';
import { motion } from 'framer-motion';
import { BiLeftArrow } from 'react-icons/bi';
import { LuLeaf, LuMoveLeft } from 'react-icons/lu';

const PizzaDetalis = () => {
  const { code } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { AddToCart, toggleCar0t, responsive } = useAppContext();

  const navigate = useNavigate();


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

  if (loading) {
    return <div className="text-center py-10 text-gray-500">Yuklanmoqda...</div>;
  }

  if (!product) {
    return <div className="text-center py-10 text-red-500">Mahsulot topilmadi</div>;
  }

  return (
    <div
      id="productDetalis"
      className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-10"
    >
      {
        !responsive ?
          (<motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl grid grid-cols-2 gap-8 p-6 sm:p-10"
          >
            <button
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white border text-2xl font-bold hover:bg-gray-100 transition"
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
                className="rounded-xl w-full md:h-[380px] object-cover"
              />
              <p className="mt-4 text-lg text-gray-700">
                <strong>Massaliq:</strong> {product.massaliq || 'N/A'}
              </p>
              <p className="mt-2 text-2xl font-bold text-green-600">
                {product.price.toLocaleString()} so'm
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">{product.name}</h1>

                <div className="mb-3 text-gray-700 text-sm flex items-center justify-start gap-2">
                  <p className="mb-1 font-medium">Hajmi:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((item, id) => (
                      <button
                        key={id}
                        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  <strong>Kategoriya:</strong> <span className="capitalize">{product.category}</span>
                </p>

                <div className="max-h-50 overflow-y-auto scrollbar-hide mt-4">
                  <h3 className="text-sm font-semibold mb-2">Toppinglar</h3>
                  <div className="grid grid-cols-3 gap-3 p-1">
                    {product.toppings.map((item, index) => (
                      <div
                        key={index}
                        className="relative shadow-sm hover:bg-gray-200 rounded-xl p-2 flex flex-col items-center justify-center transition"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-8 h-8 object-cover rounded-full mb-1"
                        />
                        <p className="text-xs text-center text-gray-700">{item.name}</p>
                        <div className="absolute -top-1 -right-1 bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold cursor-pointer">
                          +
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => toggleCart(product)}
                  className="flex-1 py-3 rounded-full bg-[#006f4c] hover:bg-[#5aab91] text-white font-semibold transition"
                >
                  {AddToCart?.some(item => item.id === product.id)
                    ? 'Remove from Cart'
                    : 'Add to Cart'}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <h2 className="text-lg font-semibold mb-2">Tavsif</h2>
                <p className="text-sm text-gray-700">{product.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>)
          :
          (<motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl gap-8 p-6 sm:p-10"
          >
            <button
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white border text-2xl font-bold hover:bg-gray-100 transition"
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
                className="rounded-xl w-full md:h-[380px] object-cover"
              />
              <p className="mt-4 text-lg text-gray-700">
                <strong>Massaliq:</strong> {product.massaliq || 'N/A'}
              </p>
              <p className="mt-2 text-2xl font-bold text-green-600">
                {product.price.toLocaleString()} so'm
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">{product.name}</h1>

                <div className="mb-3 text-gray-700 text-sm flex items-center justify-start gap-2">
                  <p className="mb-1 font-medium">Hajmi:</p>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((item, id) => (
                      <button
                        key={id}
                        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  <strong>Kategoriya:</strong> <span className="capitalize">{product.category}</span>
                </p>

                <div className="max-h-50 overflow-y-auto scrollbar-hide mt-4">
                  <h3 className="text-sm font-semibold mb-2">Toppinglar</h3>
                  <div className="grid grid-cols-3 gap-3 p-1">
                    {product.toppings.map((item, index) => (
                      <div
                        key={index}
                        className="relative shadow-sm hover:bg-gray-200 rounded-xl p-2 flex flex-col items-center justify-center transition"
                      >
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-8 h-8 object-cover rounded-full mb-1"
                        />
                        <p className="text-xs text-center text-gray-700">{item.name}</p>
                        <div className="absolute -top-1 -right-1 bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold cursor-pointer">
                          +
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => toggleCart(product)}
                  className="flex-1 py-3 rounded-full bg-[#006f4c] hover:bg-[#5aab91] text-white font-semibold transition"
                >
                  {AddToCart?.some(item => item.id === product.id)
                    ? 'Remove from Cart'
                    : 'Add to Cart'}
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <h2 className="text-lg font-semibold mb-2">Tavsif</h2>
                <p className="text-sm text-gray-700">{product.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>)
      }
    </div>

  );

};

export default PizzaDetalis;
