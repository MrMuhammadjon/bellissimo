import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppContext } from '../Context/AppContext';

const ProductDetalis = () => {
  const { code } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { AddToCart, toggleCart } = useAppContext();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

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
    <div className="max-w-5xl mx-auto p-8 grid grid-cols-2 gap-10 bg-white shadow-lg rounded-xl mt-6">
      {/* Mahsulot rasmi */}
      <div className="relative">
        <img
          src={product.img}
          alt={product.name}
          className="rounded-xl w-full h-[450px] object-cover border"
        />
      </div>

      {/* Mahsulot ma’lumotlari */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-3">{product.name}</h1>
          <p className="text-gray-600 text-sm mb-1">Kategoriya: <span className="capitalize">{product.category}</span></p>
          <p className="text-gray-600 text-sm mb-1">Hajmi: <span className="font-medium">{product.sizes}</span></p>

          <div className="mt-4">
            <p className="text-xl font-semibold text-green-600">{product.price.toLocaleString()} so'm</p>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => toggleCart(product)}
            className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium"
          >
            {AddToCart?.some(item => item.id === product.id) ? "Remove from Cart" : "Add to Cart"}
          </button>
          <button className="flex-1 py-3 rounded-xl border border-black hover:bg-black hover:text-white font-medium transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetalis;
