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
  console.log(items);
  

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const ProductSkeleton = () => (
    <div className="animate-pulse rounded-xl shadow-lg overflow-hidden w-full max-w-sm bg-white">
      <div className="w-full h-48 bg-gray-200"></div>
      <div className="space-y-3 p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        <div className="h-5 bg-gray-300 rounded w-1/3 mt-4"></div>
      </div>
    </div>
  );

  if (status === 'loading') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {[...Array(6)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (status === 'failed') {
    return <h1 className="text-center text-red-500 text-lg font-semibold p-6">Xatolik yuz berdi</h1>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {items.map(product => (
        <div
          key={product.id}
          data-aos="fade-up"
          onClick={() => navigate(`/products/${product.id}`)}
          className="cursor-pointer rounded-xl shadow hover:shadow-lg transition-all bg-white overflow-hidden group"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4 space-y-2">
            <p className="text-sm text-gray-600 line-clamp-2">{product.ingredients}</p>
            <h3 className="text-base font-bold text-gray-800">{product.name}</h3>
            <p className="text-primary text-lg font-semibold">${product.reviewCount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderProducts;
