import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion';
import axios from 'axios';
import { useAppContext } from '../Context/AppContext';
import { LuLeaf, LuMoveLeft } from 'react-icons/lu';

const ComboDetalis = () => {
  const { code } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useAppContext()
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-gray-500 w-full h-[600px]">Yuklanmoqda...</div>;
  }

  if (!product) {
    return <div className="text-center py-10 text-red-500">Mahsulot topilmadi</div>;
  }

  console.log(product.items);
  console.log(product);

  return (
    <div className="hidden md:grid grid-cols-2 gap-10 max-w-6xl mx-auto p-6 py-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='relative'
      >
        <img
          src={product.img}
          alt="Combo"
          className="rounded-xl w-full object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-0 rounded-full shadow-sm w-10 h-10 text-2xl font-bold hover:text-gray-600 transition flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100"
        >
          <LuMoveLeft />
        </button>
        <div className="mt-4 relative">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-gray-600">
            {product.description || 'Bu combo haqida ma\'lumot mavjud emas.'}
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col justify-between gap-6">
        <div className="space-y-4">
          {product.comboItems.map((item, idx) => {
            const variants = [
              { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
              { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
              { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
            ];

            const variant = variants[idx % variants.length];

            return (
              <motion.div
                key={idx}
                initial={variant.initial}
                animate={variant.animate}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow hover:-translate-y-0.5 transform duration-300 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 object-cover"
                  />
                  <span className="font-semibold">{item.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between text-lg font-bold">
            <span>Umumiy narx:</span>
            <div>
              <span className="line-through text-gray-400 mr-2">
                {product.price} so'm
              </span>
              <span className="text-green-700">{product.discount}so'm</span>
            </div>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-full font-semibold">
            Savatga qo‘shish
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ComboDetalis
