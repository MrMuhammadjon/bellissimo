import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../Context/AppContext';
import { SiBitcoinsv } from "react-icons/si";

const MiniBlog = () => {
    const { active, setActive } = useAppContext();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data =>
                setCategories([
                    { slug: 'all', name: 'All' },
                    ...data.map(cat => ({
                        slug: cat,
                        name: cat.name, // ☑ stringga o‘girildi
                    })),
                ])
            );
    }, []);




    return (
<div className='mt-5 sticky top-0 z-50 bg-white shadow-sm transition-all duration-300'>
  <div className="flex items-center">
    {/* Logo that appears when sticky */}
    <div className="hidden sticky-logo:flex items-center ml-3 mr-2">
      <SiBitcoinsv className="text-xl text-yellow-400" />
      <span className="font-semibold text-sm ml-1">23</span>
    </div>
    
    {/* Categories scroll */}
    <div className="flex gap-3 overflow-x-auto scrollbar-none px-3 py-2 w-[95%] mx-auto">
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
