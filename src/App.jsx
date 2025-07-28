import React, { useEffect, useState } from 'react';
import { AppContextProvider } from './Context/AppContext';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Welcome from './Components/PageComponetns/Welcome';
import Loader from './Components/PageComponetns/Loader'; // loading component
import axios from 'axios';
import ProductDetalis from './Page/ProductDetalis';


const App = () => {
  const [loading, setLoading] = useState(false);
  
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation || location;

  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => setLoading(false), 500);
  //   return () => clearTimeout(timer);
  // }, [location.pathname]);

  //   const bulkData = [
  //     {
  //       "category": "combo",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=3840&q=75",
  //       "title": "Ishta-Ha! boks",
  //       "price": 120000,
  //       "discount": 99000,
  //       "description": "Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!",
  //       "comboItems": [
  //         {
  //           "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fef265f26-d395-4256-ab5d-dd092025fee9.jpg&w=3840&q=75",
  //           "name": "Pepperoni 20 sm",
  //           "description": "Kichik o'lchamdagi pepperoni pitsasi"
  //         },
  //         {
  //           "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F02b6e2a7-787c-46cb-b5b3-2dfafb6d23e2.jpg&w=3840&q=75",
  //           "name": "Kartoshka fri",
  //           "description": "Chitir-chitir qovurilgan kartoshka fri"
  //         },
  //         {
  //           "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fe83b5a8f-f0c0-4c81-bb1e-9ee88475f9b7.jpg&w=3840&q=75",
  //           "name": "3 ta strips",
  //           "description": "Qarsildoq tovuq stripslari"
  //         }
  //       ]
  //     },
  //     {
  //       "category": "combo",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-8938-08dd9ece412c.jpg&w=3840&q=75",
  //       "title": "2+1 Super Combo",
  //       "price": 180000,
  //       "discount": 150000,
  //       "description": "2 ta katta pitsa + 1 ta bepul ichimlik",
  //       "comboItems": [
  //         {
  //           "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fbd276106-b16a-4c07-a963-1ccffef5e30d.jpg&w=3840&q=100",
  //           "name": "Chicken BBQ",
  //           "description": "Tovuq go‘shti, BBQ sousi, piyoz, moxito pishlog‘i"
  //         },
  //         {
  //           "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fb3635a5f-1556-47e8-a600-d88dd8170b36.jpg&w=3840&q=100",
  //           "name": "4 Pishloqli",
  //           "description": "Mozzarella, Cheddar, Parmezan, Brie"
  //         },
  //         {
  //           "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F83bf6e19-b204-4351-84ce-ab7376b40827.jpg&w=3840&q=75",
  //           "name": "Coca-Cola 1.5L",
  //           "description": "Salqin gazli ichimlik"
  //         }
  //       ]
  //     },
  //     {
  //       "category": "pizza",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fb3635a5f-1556-47e8-a600-d88dd8170b36.jpg&w=3840&q=100",
  //       "title": "4 Pishloqli",
  //       "price": 69000,
  //       "discount": 59000,
  //       "description": "Cheddar, parmezan, yangi motsarellali sharchalar va motsarella pishlog‘i",
  //       "sizes": {
  //         "kichik": 69000,
  //         "orta": 89000,
  //         "katta": 109000
  //       },
  //       "crusts": ["Oddiy bort", "Yupqa", "Qalin"],
  //       "toppings": [
  //         { "name": "Kornishon", "price": 2000 },
  //         { "name": "Ananas", "price": 3000 },
  //         { "name": "Donar go'shti", "price": 5000 },
  //         { "name": "Kabob", "price": 17000 },
  //         { "name": "Pomidor", "price": 2000 },
  //         { "name": "Kurka", "price": 3000 }
  //       ]
  //     },
  //     {
  //       "category": "snek",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F45458d7f-4661-4107-9bd5-b007f7c28f79.jpg&w=3840&q=75",
  //       "title": "Tovuq strips",
  //       "price": 22000,
  //       "description": "Qarsildoq va ziravorli tovuq bo‘lakchalari"
  //     },
  //     {
  //       "category": "snek",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F9e629de6-027e-431c-b3d3-bc2762b8238c.jpg&w=3840&q=75",
  //       "title": "Nuggets",
  //       "price": 18000,
  //       "description": "Tovuq go‘shtidan tayyorlangan yumshoq va mazali nuggetslar"
  //     },
  //     {
  //       "category": "drinks",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fb3c127ef-0a3b-45a9-a8ee-7a5610d2a05e.jpg&w=3840&q=75",
  //       "name": "Cocla-Cola",
  //       "price": 12000,
  //       "sizes": "0.5L"
  //     },
  //     {
  //       "category": "drinks",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff956bfaa-a2db-401a-8e9b-2edb2cc6a099.jpg&w=3840&q=75",
  //       "name": "Cocla-Cola",
  //       "price": 12000,
  //       "sizes": "1L"
  //     },
  //     {
  //       "category": "drinks",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F83bf6e19-b204-4351-84ce-ab7376b40827.jpg&w=3840&q=75",
  //       "name": "Cocla-Cola",
  //       "price": 12000,
  //       "sizes": "1.5L"
  //     },
  //     {
  //       "category": "extra",
  //       "type": "salad",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fc9683d57-8d30-44fa-ad1e-2e1b53091fb0.jpg&w=3840&q=75",
  //       "name": "Grechka salat",
  //       "price": 15000,
  //       "description": "Pomidor, bodring, zaytun, zaytun yog‘i"
  //     },
  //     {
  //       "category": "extra",
  //       "type": "sauce",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fc9683d57-8d30-44fa-ad1e-2e1b53091fb0.jpg&w=3840&q=75",
  //       "name": "Pishloqli sous",
  //       "price": 5000
  //     },
  //     {
  //       "category": "extra",
  //       "type": "sauce",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fc2a176cd-4434-4afd-a4d4-9ea83ce5dd03.jpg&w=3840&q=75",
  //       "name": "Achchiq sous",
  //       "price": 3000
  //     },
  //     {
  //       "category": "extra",
  //       "type": "dessert",
  //       "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fb643ceb5-6a4e-4101-a3dc-91c5327c588a.jpg&w=3840&q=75",
  //       "name": "Shokoladli tort",
  //       "price": 25000,
  //       "description": "Mazali shokoladli krem bilan bezatilgan"
  //     }
  //   ]

  //   function generateCode() {
  //     const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  //     let code = '';
  //     for (let i = 0; i < 6; i++) {
  //       code += chars[Math.floor(Math.random() * chars.length)];
  //     }
  //     return code;
  //   }

  //   // 🎯 Har bir itemga code qo‘shamiz
  //   const updatedMenu = bulkData.map(item => ({
  //     ...item,
  //     code: generateCode()
  //   }));

  // const handlePost = () => {
  //   updatedMenu.forEach(item => {
  //     axios.post("https://686bac8ee559eba908739191.mockapi.io/Products", item)
  //       .then(res => console.log("Qo‘shildi:", res.data))
  //       .catch(err => console.error("Xatolik:", err));
  //   });
  // };







  return (
    <AppContextProvider>
      {loading && <Loader />}
      {/* <button onClick={handlePost} className='w-20 h-20 bg-red-500'>Menu qo‘shish</button> */}
      <Welcome />
      <Header />
      <Outlet />

      <Footer />
    </AppContextProvider>
  );
};

export default App;
