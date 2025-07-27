import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppContext } from '../Context/AppContext';

const ProductDetalis = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [thumbnail, setThumbnail] = useState("");
  const { AddToCart, setAddToCart, toggleCart } = useAppContext();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024); // 1024px = lg

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios.get(`https://dummyjson.com/recipes/${id}`)
      .then(res => {
        setProduct(res.data);
        setThumbnail(res.data.thumbnail);
        setLoading(false);
      })
      .catch(err => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(AddToCart));
  }, [AddToCart]);

  if (!isDesktop) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6">
        <p className="text-xl text-gray-600 font-medium">
          Ushbu sahifa faqat kompyuter (desktop) ekranlarida ko‘rsatiladi.
        </p>
      </div>
    );
  }

  // oldingi loading va product mavjudligi tekshirishlar o'zgarishsiz qoladi

  if (loading) {
    return (
      <div className="max-w-6xl w-full px-6 py-8 mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex gap-4 animate-pulse">
            <div className="flex flex-col gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-24 h-24 bg-slate-300 rounded border border-gray-200" />
              ))}
            </div>
            <div className="w-[400px] h-[400px] bg-slate-300 rounded border border-gray-200" />
          </div>
          <div className="flex-1 space-y-4 animate-pulse">
            <div className="h-8 bg-slate-300 rounded w-1/2" />
            <div className="h-4 bg-slate-300 rounded w-1/3" />
            <div className="h-6 bg-slate-300 rounded w-1/4" />
            <div className="h-20 bg-slate-300 rounded w-full" />
            <div className="h-10 bg-slate-300 rounded w-full" />
            <div className="h-10 bg-slate-300 rounded w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center py-10 text-red-500">Mahsulot topilmadi</div>;
  }

  return (
    <div className="max-w-6xl w-full px-6 py-8 mx-auto">
      {/* ...qolgan sahifa */}
    </div>
  );
};

export default ProductDetalis;
