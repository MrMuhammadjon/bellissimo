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

  // const bulkData = [
  //   {
  //     "category": "combo",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-1835-08dd5243903e.jpg&w=3840&q=75",
  //     "title": "Ishta-Ha! boks",
  //     "price": 120000,
  //     "discount": 99000,
  //     "description": "Pepperoni pitsasi (20 cm), chitir-chitir kartoshka fri va 3 ta ishtahaochar stripslar. 1-2 kishi uchun ayni muddao!",
  //     "comboItems": [
  //       {
  //         "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fef265f26-d395-4256-ab5d-dd092025fee9.jpg&w=3840&q=75",
  //         "name": "Pepperoni 20 sm",
  //         "description": "Kichik o'lchamdagi pepperoni pitsasi"
  //       },
  //       {
  //         "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F02b6e2a7-787c-46cb-b5b3-2dfafb6d23e2.jpg&w=3840&q=75",
  //         "name": "Kartoshka fri",
  //         "description": "Chitir-chitir qovurilgan kartoshka fri"
  //       },
  //       {
  //         "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fe83b5a8f-f0c0-4c81-bb1e-9ee88475f9b7.jpg&w=3840&q=75",
  //         "name": "3 ta strips",
  //         "description": "Qarsildoq tovuq stripslari"
  //       }
  //     ]
  //   },
  //   {
  //     "category": "combo",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff8990000-6beb-ac1f-ad8c-08dc575cbda9.jpg&w=3840&q=75",
  //     "title": "10 yil! Do'stlar 2",
  //     "price": 89000,
  //     "discount": 105000,
  //     "description": "Pitsa (25 cm), 8 ta sinnamonchalar, 5 ta tovuqli strips va 2 ta Coca-Cola (quyma). Ikki kishiga ayni muddao!",
  //     "comboItems": [
  //       {
  //         "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F3a9e1b1a-9327-4c6c-959f-a2981565baaa.jpg&w=2048&q=75",
  //         "name": "Sinnamonchalar 8 ta 👶",
  //         "description": "Sinnamonchalar, shirinlik uchun ajoyib tanlov"
  //       },
  //       {
  //         "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F45458d7f-4661-4107-9bd5-b007f7c28f79.jpg&w=750&q=75",
  //         "name": "Tovuqli stripslar 5 ta",
  //         "description": "Qarsildoq va ziravorli tovuq bo‘lakchalari"
  //       },
  //       {
  //         "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fd0f7954b-2bc3-4e0d-b492-d8e9256d451a.jpg&w=3840&q=75",
  //         "name": "Quyiladigan Coca-Cola",
  //         "description": "Coca-Cola ichimligi (quyma) salqinlasnish uchun"
  //       }
  //     ]
  //   },
  //   {
  //     "category": "combo",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F03bf0000-6bec-ac1f-8938-08dd9ece412c.jpg&w=3840&q=75",
  //     "title": "2+1 Super Combo",
  //     "price": 0,
  //     "discount": 0,
  //     "description": "O‘z uchligingizni to‘plang va faqat ikkitasi uchun to‘lang! O‘z mukammal kombongizni yarating: istalgan uchta pitsani (25 cm) tanlang va faqat ikkitasi uchun to‘lang.   Kombo narxi 119 000 so‘mdan boshlanadi",
  //     "optionalCombo": [
  //       [
  //         { "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F08e54c5c-6078-4777-91fc-6bb66d90c926.jpg&w=2048&q=75", "name": "Dabl chizburger kichkina", "price": 69000 },
  //         { "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F1050d521-0449-4fe4-96ee-a426277df28c.jpg&w=2048&q=75", "name": "Chedder Donar kichkina", "price": 69000 },
  //         { "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6f5a89e4-002f-4307-a811-5e27ccc36120.jpg&w=2048&q=75", "name": "Tovuqli donar kichkina", "price": 69000 },
  //       ],
  //       [
  //         { "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F064b7789-cb4e-468c-8fc1-f76fe29714e9.jpg&w=2048&q=75", "name": "Barbekyu tovuq kichkina", "price": 56000 },
  //         { "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F4ce64bb6-25b7-48a3-b424-e648c94e8919.jpg&w=2048&q=75", "name": "Kombo kichkina", "price": 56000 },
  //         { "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6f5a89e4-002f-4307-a811-5e27ccc36120.jpg&w=2048&q=75", "name": "Tovuqli donar kichkina", "price": 56000 },
  //       ],
  //       [
  //         { "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F064b7789-cb4e-468c-8fc1-f76fe29714e9.jpg&w=2048&q=75", "name": "Barbekyu tovuq kichkina", "price": 56000 },
  //         { "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F4ce64bb6-25b7-48a3-b424-e648c94e8919.jpg&w=2048&q=75", "name": "Kombo kichkina", "price": 56000 },
  //         { "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6f5a89e4-002f-4307-a811-5e27ccc36120.jpg&w=2048&q=75", "name": "Tovuqli donar kichkina", "price": 56000 },
  //       ]
  //     ]
  //   },
  //   {
  //     "category": "pizza",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fb3635a5f-1556-47e8-a600-d88dd8170b36.jpg&w=3840&q=100",
  //     "title": "4 Pishloqli",
  //     "price": 69000,
  //     "discount": 59000,
  //     "description": "Cheddar, parmezan, yangi motsarellali sharchalar va motsarella pishlog‘i",
  //     "sizes": [
  //       { "name": "kichik", "price": 69000 },
  //       { "name": "orta", "price": 89000 },
  //       { "name": "katta", "price": 109000 }
  //     ],
  //     "thickness": [
  //       { "name": "Yupqa", "price": 7500 },
  //       { "name": "O'rtacha", "price": 10000 },
  //       { "name": "Qalin", "price": 13000 }
  //     ],
  //     "toppings": [
  //       { "name": "Kornishon", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F23016321-023d-44b9-9399-b7424755dcbb.png&w=3840&q=75" },
  //       { "name": "Ananas", "price": 3000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F2b5936fd-f9ce-4338-a8b4-1b7346a6edfb.png&w=3840&q=75" },
  //       { "name": "Donar go'shti", "price": 5000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F453d2c42-1660-4967-86c3-3d4670e9b211.png&w=3840&q=75" },
  //       { "name": "Kabob", "price": 17000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F58a9463c-63cd-4c8e-8855-fd91d1281aad.png&w=3840&q=75" },
  //       { "name": "Pomidor", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6b3afc2a-a50b-4d13-86e0-084ab028f63c.png&w=750&q=75" },
  //       { "name": "Kurka", "price": 3000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6c50dde1-0e57-4b34-aaa5-ae240d3dd776.png&w=3840&q=75" },
  //       { "name": "Halapeno", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F7925a50b-d5ed-4faf-aaf3-df526693c020.png&w=3840&q=75" },
  //       { "name": "Qo'ziqorinlar", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F958b5d3e-1b7e-4214-8138-a2888ea99961.png&w=3840&q=75" },
  //       { "name": "Tovuqli donar", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa07b28ca-c0f3-484b-9bfd-955fc870a1e2.png&w=3840&q=75" },
  //       { "name": "Qo'shimcha pishloq", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa18fae1d-97da-4101-a67b-5bf181713bf1.png&w=3840&q=75" },
  //       { "name": "Peppernochini qalimpiri", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa33a7c3a-cd16-4d73-af74-d1bbe6f6db63.png&w=3840&q=75" },
  //     ]
  //   },
  //   {
  //     "category": "pizza",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F601282db-7274-43e4-ac74-e8987d53dd6e.jpg&w=3840&q=100",
  //     "title": "Pepperoni",
  //     "price": 56000,
  //     "discount": 70000,
  //     "description": "Pepperoni, motsarella pishlog‘i va tomat sousi",
  //     "sizes": [
  //       { "name": "kichik", "price": 56000 },
  //       { "name": "orta", "price": 66000 },
  //       { "name": "katta", "price": 72000 }
  //     ],
  //     "thickness": [
  //       { "name": "Yupqa", "price": 7500 },
  //       { "name": "O'rtacha", "price": 10000 },
  //       { "name": "Qalin", "price": 13000 }
  //     ],
  //     "toppings": [
  //       { "name": "Kornishon", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F23016321-023d-44b9-9399-b7424755dcbb.png&w=3840&q=75" },
  //       { "name": "Ananas", "price": 3000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F2b5936fd-f9ce-4338-a8b4-1b7346a6edfb.png&w=3840&q=75" },
  //       { "name": "Donar go'shti", "price": 5000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F453d2c42-1660-4967-86c3-3d4670e9b211.png&w=3840&q=75" },
  //       { "name": "Kabob", "price": 17000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F58a9463c-63cd-4c8e-8855-fd91d1281aad.png&w=3840&q=75" },
  //       { "name": "Pomidor", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6b3afc2a-a50b-4d13-86e0-084ab028f63c.png&w=750&q=75" },
  //       { "name": "Kurka", "price": 3000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6c50dde1-0e57-4b34-aaa5-ae240d3dd776.png&w=3840&q=75" },
  //       { "name": "Halapeno", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F7925a50b-d5ed-4faf-aaf3-df526693c020.png&w=3840&q=75" },
  //       { "name": "Qo'ziqorinlar", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F958b5d3e-1b7e-4214-8138-a2888ea99961.png&w=3840&q=75" },
  //       { "name": "Tovuqli donar", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa07b28ca-c0f3-484b-9bfd-955fc870a1e2.png&w=3840&q=75" },
  //       { "name": "Qo'shimcha pishloq", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa18fae1d-97da-4101-a67b-5bf181713bf1.png&w=3840&q=75" },
  //       { "name": "Peppernochini qalimpiri", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa33a7c3a-cd16-4d73-af74-d1bbe6f6db63.png&w=3840&q=75" },
  //     ]
  //   },
  //   {
  //     "category": "pizza",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F33b46d3a-a289-4971-88f5-bd0a3807785c.jpg&w=3840&q=100",
  //     "title": "Cheddar donar",
  //     "price": 69000,
  //     "discount": 78000,
  //     "description": "Donar go‘shti va chedder pishloq sousi, bulg‘or qalampiri, qizil piyoz",
  //     "sizes": [
  //       { "name": "kichik", "price": 69000 },
  //       { "name": "orta", "price": 76000 },
  //       { "name": "katta", "price": 85000 }
  //     ],
  //     "thickness": [
  //       { "name": "Yupqa", "price": 7500 },
  //       { "name": "O'rtacha", "price": 10000 },
  //       { "name": "Qalin", "price": 13000 }
  //     ],
  //     "toppings": [
  //       { "name": "Kornishon", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F23016321-023d-44b9-9399-b7424755dcbb.png&w=3840&q=75" },
  //       { "name": "Ananas", "price": 3000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F2b5936fd-f9ce-4338-a8b4-1b7346a6edfb.png&w=3840&q=75" },
  //       { "name": "Donar go'shti", "price": 5000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F453d2c42-1660-4967-86c3-3d4670e9b211.png&w=3840&q=75" },
  //       { "name": "Kabob", "price": 17000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F58a9463c-63cd-4c8e-8855-fd91d1281aad.png&w=3840&q=75" },
  //       { "name": "Pomidor", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6b3afc2a-a50b-4d13-86e0-084ab028f63c.png&w=750&q=75" },
  //       { "name": "Kurka", "price": 3000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F6c50dde1-0e57-4b34-aaa5-ae240d3dd776.png&w=3840&q=75" },
  //       { "name": "Halapeno", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F7925a50b-d5ed-4faf-aaf3-df526693c020.png&w=3840&q=75" },
  //       { "name": "Qo'ziqorinlar", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F958b5d3e-1b7e-4214-8138-a2888ea99961.png&w=3840&q=75" },
  //       { "name": "Tovuqli donar", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa07b28ca-c0f3-484b-9bfd-955fc870a1e2.png&w=3840&q=75" },
  //       { "name": "Qo'shimcha pishloq", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa18fae1d-97da-4101-a67b-5bf181713bf1.png&w=3840&q=75" },
  //       { "name": "Peppernochini qalimpiri", "price": 2000, "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa33a7c3a-cd16-4d73-af74-d1bbe6f6db63.png&w=3840&q=75" },
  //     ]
  //   },
  //   {
  //     "category": "snek",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F45458d7f-4661-4107-9bd5-b007f7c28f79.jpg&w=3840&q=75",
  //     "title": "Tovuq strips",
  //     "price": 22000,
  //     "description": "Qarsildoq va ziravorli tovuq bo‘lakchalari"
  //   },
  //   {
  //     "category": "snek",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F9e629de6-027e-431c-b3d3-bc2762b8238c.jpg&w=3840&q=75",
  //     "title": "Nuggets",
  //     "price": 18000,
  //     "description": "Tovuq go‘shtidan tayyorlangan yumshoq va mazali nuggetslar"
  //   },
  //   {
  //     "category": "drinks",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fb3c127ef-0a3b-45a9-a8ee-7a5610d2a05e.jpg&w=3840&q=75",
  //     "name": "Cocla-Cola",
  //     "price": 12000,
  //     "sizes": "0.5L",
  //     "description": "0.5 L (500 ml) Kaloriyalar: 210 kcal, Yog‘: 0.0 g, To‘yingan yog‘lar: 0.0 g, Uglevodlar: 53 g, Shakar: 53 g, Protein: 0.0 g, Tuz: ~0.10 g"
  //   },
  //   {
  //     "category": "drinks",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ff956bfaa-a2db-401a-8e9b-2edb2cc6a099.jpg&w=3840&q=75",
  //     "name": "Cocla-Cola",
  //     "price": 12000,
  //     "sizes": "1L",
  //     "description": "1 L (1000 ml) Kaloriyalar: 420 kcal, Yog‘: 0.0 g, To‘yingan yog‘lar: 0.0 g, Uglevodlar: 106 g, Shakar: 106 g, Protein: 0.0 g, Tuz: ~0.20 g"

  //   },
  //   {
  //     "category": "drinks",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F83bf6e19-b204-4351-84ce-ab7376b40827.jpg&w=3840&q=75",
  //     "name": "Cocla-Cola",
  //     "price": 12000,
  //     "sizes": "1.5L",
  //     "description": "1.5 L (1500 ml) Kaloriyalar: 630 kcal, Yog‘: 0.0 g, To‘yingan yog‘lar: 0.0 g, Uglevodlar: 159 g, Shakar: 159 g, Protein: 0.0 g, Tuz: ~0.30 g"
  //   },
  //   {
  //     "category": "drinks",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa3bc9eed-4749-46e1-9645-03f51ff478ad.jpg&w=750&q=75",
  //     "name": "Ays ti",
  //     "price": 17000,
  //     "sizes": "400 ml",
  //     "description": "Rezavorlar va karkadeli choy mazasi bilan tayyorlangan salqin ichimlik"
  //   },
  //   {
  //     "category": "drinks",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F2e6957dd-7e64-4538-99c3-1139e1b3d0b7.jpg&w=750&q=75",
  //     "name": "Moxito",
  //     "price": 17000,
  //     "sizes": "400 ml",
  //     "description": "Limon va yalpiz ta’mli klassik limonad ichimlik"
  //   },
  //   {
  //     "category": "drinks",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F69d0a179-cf8e-436c-b932-1e6fee9e8c7a.jpg&w=750&q=75",
  //     "name": "Tarxun",
  //     "price": 17000,
  //     "sizes": "400 ml",
  //     "description": "Tarxun o'simlikidan tayyorlangan salqin ichimlik"
  //   },
  //   {
  //     "category": "drinks",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fd4eb7152-2d95-4734-8e22-1ebc0fc9cca4.jpg&w=750&q=75",
  //     "name": "Mango-marakuyya",
  //     "price": 20000,
  //     "sizes": "400 ml",
  //     "description": "Tropik ta’mga ega mango va marakuyya ichimligi"
  //   },
  //   {
  //     "category": "extra",
  //     "type": "salad",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fc9683d57-8d30-44fa-ad1e-2e1b53091fb0.jpg&w=3840&q=75",
  //     "name": "Grechka salat",
  //     "price": 29000,
  //     "description": "Pomidor, bodring, zaytun, zaytun yog‘i"
  //   },
  //   {
  //     "category": "extra",
  //     "type": "salad",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ffc1cd67e-1b88-4c03-86ed-11f43a784fbe.jpg&w=750&q=75",
  //     "name": "“Sezar” salati",
  //     "price": 32000,
  //     "description": "Pomidor, bodring, zaytun, zaytun yog‘i, parmesan pishlog‘i, tovuq go‘shti, Sezar sousi"
  //   },
  //   {
  //     "category": "extra",
  //     "type": "sauce",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F1c50817b-2ed5-41a4-8192-12aa169a734b.jpg&w=750&q=75",
  //     "name": "Pishloqli sous",
  //     "price": 5000
  //   },
  //   {
  //     "category": "extra",
  //     "type": "sauce",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fc2a176cd-4434-4afd-a4d4-9ea83ce5dd03.jpg&w=3840&q=75",
  //     "name": "Achchiq sous",
  //     "price": 3000
  //   },
  //   {
  //     "category": "extra",
  //     "type": "sauce",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fb33f0b64-fa93-4f15-8c94-21ceb4ce722b.jpg&w=750&q=75",
  //     "name": "Maxsus sous",
  //     "price": 5000
  //   },
  //   {
  //     "category": "extra",
  //     "type": "sauce",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fc2a176cd-4434-4afd-a4d4-9ea83ce5dd03.jpg&w=750&q=75",
  //     "name": "Chili sous",
  //     "price": 4000
  //   },
  //   {
  //     "category": "extra",
  //     "type": "sauce",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Ffa3e85c6-813f-41d2-902e-56d9225e6608.jpg&w=750&q=75",
  //     "name": "Barbekyu sous",
  //     "price": 6000
  //   },
  //   {
  //     "category": "extra",
  //     "type": "sauce",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F306a44d7-ca18-4f68-a7c0-e15f9773226a.jpg&w=750&q=75",
  //     "name": "Ketchup sous",
  //     "price": 3000
  //   },
  //   {
  //     "category": "extra",
  //     "type": "dessert",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fb643ceb5-6a4e-4101-a3dc-91c5327c588a.jpg&w=3840&q=75",
  //     "name": "Shokoladli tort",
  //     "price": 25000,
  //     "description": "Mazali shokoladli krem bilan bezatilgan"
  //   },
  //   {
  //     "category": "extra",
  //     "type": "dessert",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F3a9e1b1a-9327-4c6c-959f-a2981565baaa.jpg&w=750&q=75",
  //     "name": "Sinnamonchalar 8 ta 👶",
  //     "price": 15000,
  //     "description": "Mazali shokoladli krem bilan bezatilgan"
  //   },
  //   {
  //     "category": "extra",
  //     "type": "dessert",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F8e827ad6-07c1-4666-9710-2e88e769a5c6.jpg&w=750&q=75",
  //     "name": "Sinnamonchalar 4 ta 👶",
  //     "price": 12000,
  //     "description": "Mazali shokoladli krem bilan bezatilgan"
  //   },
  //   {
  //     "category": "extra",
  //     "type": "dessert",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F0f273e76-ee34-42e5-b565-500186dc2f5b.jpg&w=750&q=75",
  //     "name": "Shokoladli chizkeyk",
  //     "price": 24000,
  //     "description": "Mazali shokoladli krem bilan bezatilgan"
  //   },
  //   {
  //     "category": "extra",
  //     "type": "dessert",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F697b7e86-f11a-4090-89f1-45cadba7f1e0.jpg&w=750&q=75",
  //     "name": "Klassik chizkeyk",
  //     "price": 25000,
  //     "description": "Mazali shokoladli krem bilan bezatilgan"
  //   },
  //   {
  //     "category": "extra",
  //     "type": "dessert",
  //     "img": "https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fb643ceb5-6a4e-4101-a3dc-91c5327c588a.jpg&w=3840&q=75",
  //     "name": "Shokoladli tort",
  //     "price": 25000,
  //     "description": "Mazali shokoladli krem bilan bezatilgan"
  //   },
  // ]

  // function generateCode() {
  //   const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  //   let code = '';
  //   for (let i = 0; i < 6; i++) {
  //     code += chars[Math.floor(Math.random() * chars.length)];
  //   }
  //   return code;
  // }

  // // 🎯 Har bir itemga code qo‘shamiz
  // const updatedMenu = bulkData.map(item => ({
  //   ...item,
  //   code: generateCode()
  // }));

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
