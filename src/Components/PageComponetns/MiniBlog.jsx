import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../Context/AppContext';
import { SiBitcoinsv } from "react-icons/si";

const MiniBlog = () => {
  const { active, setActive } = useAppContext();
  const [categories, setCategories] = useState([]);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyPoint = 340; // Sizning header balandligingizga mos
      setIsSticky(window.scrollY > stickyPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data =>
        setCategories([
          { slug: 'all', name: 'All' },
          ...data.map(cat => ({
            slug: cat,
            name: cat.name, // to'g'ri string holat
          })),
        ])
      );
  }, []);

  return (
    <div className={`mt-5 sticky top-0 z-30 bg-white shadow-sm transition-all duration-300`}>
      <div className="flex items-center px-3 py-2 gap-2">

        <div className={`logo-container ${isSticky ? 'visible' : ''}`}>
          <img
            src="https://bellissimo.uz/_next/image?url=%2Fimages%2Ficon.png&w=828&q=75"
            alt="Sticky Logo"
            className="logo"
          />
        </div>

        <div className="flex gap-3 overflow-x-auto scrollbar-hide w-full">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActive(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300
                ${active === cat.slug
                  ? 'bg-[#006f4c] text-white shadow-md'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniBlog;
