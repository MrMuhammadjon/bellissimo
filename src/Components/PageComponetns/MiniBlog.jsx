import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../Context/AppContext';

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
        <div className='mt-5'>
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
                        {cat.name} {/* ☑ endi bu string */}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MiniBlog;
