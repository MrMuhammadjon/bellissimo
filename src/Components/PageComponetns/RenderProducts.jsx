import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../Feauters/products/ProductsAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAppContext } from '../../Context/AppContext';

const RenderProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status } = useSelector((state) => state.products);
  const state = useSelector((state) => state);
  const { responsive, setResponsive } = useAppContext()

  const location = useLocation();
  


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
      <div className="w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
        {[...Array(8)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (status === 'failed') {
    return <h1 className="text-center text-red-500 text-lg font-semibold p-6">❌ Xatolik yuz berdi</h1>;
  }

  const combo = items.filter(p => p.category?.toLowerCase() === 'combo');
  const pizza = items.filter(p => p.category?.toLowerCase() === 'pizza');
  const drinks = items.filter(p => p.category?.toLowerCase() === 'drinks');
  const snek = items.filter(p => p.category?.toLowerCase() === 'snek');
  const dessert = items.filter(p => p.type?.toLowerCase() === 'dessert');
  const salad = items.filter(p => p.type?.toLowerCase() === 'salad');
  const sauce = items.filter(p => p.type?.toLowerCase() === 'sauce');


  const renderCategory = (title, data) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-15" id={title.toLowerCase()}>{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up"
              onClick={() => {
                const path =
                  product.category === 'combo'
                    ? `/combo/${product.code}`
                    : product.category === 'pizza'
                      ? `/pizza/${product.code}`
                      : `/Product/${product.code}`;

                navigate(path, {
                  state: { backgroundLocation: location }
                });
              }}
              className="cursor-pointer rounded-xl shadow bg-white hover:shadow-lg transition-all overflow-hidden group"
            >
              <div className="w-full h-48 relative flex items-center justify-center overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                <p className="text-green-600 text-lg font-bold">{product.price} so'm</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );

  const renderPizza = (title, data) => {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" id={title.toLowerCase()}>{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product, index) => {
            return (
              !responsive ? (
                <div
                  key={index}
                  data-aos="fade-up"
                  onClick={() => navigate(`/pizza/${product.code}`, { state: { backgroundLocation: location } })}
                  className="cursor-pointer rounded-xl shadow bg-white hover:shadow-lg transition-all overflow-hidden group flex flex-col items-center justify-start"
                >
                  <div className="h-48 relative flex items-center justify-center overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    <p className="text-green-600 text-lg font-bold">{product.price} so'm</p>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  data-aos="fade-up"
                  onClick={() => navigate(`/pizza/${product.code}`, { state: { backgroundLocation: location } })}
                  className="cursor-pointer rounded-xl shadow bg-white hover:shadow-lg transition-all overflow-hidden group flex items-center justify-start"
                >
                  <div className="h-28 min-w-28 overflow-hidden">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    <p className="text-green-600 text-lg font-bold">{product.price} so'</p>
                  </div>
                </div>
              )
            )
          }
          )}
        </div>
      </div>
    );
  };

  const renderOtherCategories = (title, data) => {
    return (
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4" id={title.toLowerCase()}>{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {data.map((product, index) => {
            return (
              <div
                key={index}
                data-aos="fade-up"
                onClick={() => navigate(`/Product/${product.code}`, { state: { backgroundLocation: location } })}
                className="cursor-pointer rounded-xl shadow-md bg-white hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className="w-full h-48 relative flex items-center justify-center overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <h3 className="text-base font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                  <p className="text-green-600 text-lg font-bold">{product.price} so'm</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }


  return (
    <div className="p-4 md:p-6 w-full md:max-w-6xl m-auto">
      {renderCategory("Combo", combo)}
      {renderPizza("Pizza", pizza)}
      {renderOtherCategories("Snek", snek)}
      {renderOtherCategories("Drinks", drinks)}
      {renderOtherCategories("Dessert", dessert)}
      {renderOtherCategories("Salad", salad)}
      {renderOtherCategories("Sauce", sauce)}
    </div>
  );
};

export default RenderProducts;
