import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../Feauters/products/ProductsAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RenderProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status } = useSelector(state => state.products);

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 w-full md:max-w-6xl m-auto">
      {items.map(product => (
        <div
          key={product.id}
          data-aos="fade-up"
          onClick={() => navigate(`/products/${product.id}`)}
          className="cursor-pointer rounded-xl shadow bg-white hover:shadow-lg transition-all overflow-hidden group"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 space-y-1">
            <p className="text-sm text-gray-500 line-clamp-2">{product.ingredients}</p>
            <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
            <p className="text-green-600 text-lg font-bold">${product.reviewCount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderProducts;
