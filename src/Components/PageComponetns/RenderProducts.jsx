import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../Feauters/products/ProductsAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RenderProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status } = useSelector((state) => state.products);
  const state = useSelector((state) => state);
  console.log(state);


  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const ProductSkeleton = () => (
    <div className="animate-pulse rounded-xl shadow-md bg-white overflow-hidden">
      <div className="w-full h-48 bg-gray-200"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/3 mt-2"></div>
      </div>
    </div>
  );

  if (status === 'loading') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
        {[...Array(8)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (status === 'failed') {
    return <h1 className="text-center text-red-500 text-lg font-semibold p-6">❌ Xatolik yuz berdi</h1>;
  }

  // ✅ Categoriya bo‘yicha filter
  const combo = items.filter(p => p.category?.toLowerCase() === 'combo');
  const pizza = items.filter(p => p.category?.toLowerCase() === 'pizza');
  const drinks = items.filter(p => p.category?.toLowerCase() === 'drinks');
  const snek = items.filter(p => p.category?.toLowerCase() === 'snek');
  const dessert = items.filter(p => p.type?.toLowerCase() === 'dessert');
  const salad = items.filter(p => p.type?.toLowerCase() === 'salad');
  const sauce = items.filter(p => p.type?.toLowerCase() === 'sauce');

  
  const renderCategory = (title, data) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              onClick={() => navigate(`/products/${product.code}`)}
              className="cursor-pointer rounded-xl shadow bg-white hover:shadow-lg transition-all overflow-hidden group"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 space-y-1">
                <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.des}</p>
                <p className="text-green-600 text-lg font-bold">${product.reviewCount}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 w-full md:max-w-6xl m-auto">
      {renderCategory("🥙 Combo", combo)}
      {renderCategory("🍕 Pizza", pizza)}
      {renderCategory("🥤 Snek", snek)}
      {renderCategory("🥤 Drinks", drinks)}
      {renderCategory("🥤 desser", dessert)}
      {renderCategory("🥤 desser", salad)}
      {renderCategory("🥤 desser", sauce)}


    </div>
  );
};

export default RenderProducts;
