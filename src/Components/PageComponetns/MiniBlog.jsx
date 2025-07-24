import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../Context/AppContext';
import { SiBitcoinsv } from "react-icons/si";
import { BiArrowToTop } from 'react-icons/bi';

const MiniBlog = () => {
  const { active, setActive } = useAppContext();
  const [categories, setCategories] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyPoint = 340;
      setIsSticky(window.scrollY > stickyPoint);
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(data =>
        setCategories([
          { slug: 'all', name: 'All' },
          ...data.map(cat => ({
            slug: cat,
            name: cat.name,
          })),
        ])
      );
  }, []);

  return (
    <div className={`mt-5 sticky top-0 z-30 bg-white shadow-sm transition-all duration-300`}>
      <div className="flex items-center px-3 py-2 gap-2">

        {/* Logo faqat sticky bo‘lganda chiqadi */}
        <div className={`logo-container ${isSticky ? 'visible' : ''}`}>
          <img
            src="https://bellissimo.uz/_next/image?url=%2Fimages%2Ficon.png&w=828&q=75"
            alt="Sticky Logo"
            className="logo"
          />
        </div>

        {/* Kategoriya tugmalari */}
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

      {/* Scroll to top button */}
      {show && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#006f4c] text-white p-3 rounded-full shadow-md hover:bg-[#004b34] transition"
          aria-label="Scroll to top"
        >
          <BiArrowToTop className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default MiniBlog;
