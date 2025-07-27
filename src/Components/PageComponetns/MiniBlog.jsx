import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../Context/AppContext';
import { SiBitcoinsv } from "react-icons/si";
import { BiArrowToTop } from 'react-icons/bi';
import { data, useNavigate } from 'react-router-dom';

const MiniBlog = () => {
  const { active, setActive } = useAppContext();
  const [categories, setCategories] = useState([]);
  const [isSticky, setIsSticky] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate()

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
    fetch('https://686bac8ee559eba908739191.mockapi.io/Products')
      .then(res => res.json())
      .then(data => {
        // category va type ni olib, birlashtiramiz
        const allTags = [
          ...data.map(item => item.category),
          ...data.map(item => item.type)
        ].filter(Boolean); // undefined yoki null bo‘lganlarini chiqarib tashlaydi

        // Noyob qilib olish
        const uniqueTags = ['all', ...new Set(allTags)];

        // Formatlab chiqaramiz
        const formatted = uniqueTags.map(tag => ({
          slug: tag.toLowerCase(),
          name: tag.charAt(0).toUpperCase() + tag.slice(1),
        }));

        setCategories(formatted);
      });
  }, []);


  const handleCategoryClick = (slug) => {
    setActive(slug.toLowerCase());

    const element = document.getElementById(slug);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };



  return (
    <div id='all' className={`mt-5 sticky top-0 z-30 bg-white transition-all duration-300 w-full m-auto ${isSticky ? 'shadow-md' : 'shadow-0'}`}>
      <div className="flex items-center px-3 py-2 gap-2 max-w-6xl m-auto">

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
              onClick={() => handleCategoryClick(cat.slug)}
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

        <div className="">
          <button onClick={() => navigate('/cart')} className='flex p-2 px-4 bg-red-500 text-white rounded-full gap-3 hidden md:flex'>
            savatchada <span className='border-l pl-2 border-white'>0</span>
          </button>
        </div>
      </div>

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
