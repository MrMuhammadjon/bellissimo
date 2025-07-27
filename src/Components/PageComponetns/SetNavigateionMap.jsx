import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SetNavigationMap = ({ showMap, setShowMap, showRestaurants, setShowRestaurants }) => {

    const locationResta = [
        { name: "Bellissimo Pizza Gelyion", loction: 'Ulitsa Tashkentskaya 1, Бухара, Samarqand Region, Узбекистан' },
        { name: "Bellissimo Pizza Saidbaraka", loction: 'улица Мир Саид Барака 2, 140100, Samarqand, Samarqand viloyati, Узбекистан' },
        { name: "Bellissimo Pizza FamilyPark", loction: 'Narpayskaya Ulitsa 76, Samarkand, Samarqand Region, Узбекистан' },
        { name: "Bellissimo Pizza Samarqand Qorasuv", loction: 'массив Карасу, Узбекистан' },
        { name: "Bellissimo Pizza Marhabo", loction: 'Буюк Ипак Йули кучаси 69A, Samarqand, Samarqand viloyati, Узбекистан' },
        { name: "Bellissimo Pizza Orzu Mahmudova", loction: 'Bellissimo Pizza Orzu Mahmudova' },
        { name: "Bellissimo Pizza Registan", loction: 'Регистан, ул. Регистан, напротив площадь, Samarkand, Узбекистан' },
        { name: "Bellissimo Pizza Saidbaraka", loction: 'улица Мир Саид Барака 2, 140100, Samarqand, Samarqand viloyati, Узбекистан' },


    ]
    return (
        <AnimatePresence>
            {/* Google Map Modal */}
            {showMap && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="bg-white rounded-2xl overflow-hidden w-[90%] h-[80%] relative shadow-2xl"
                    >
                        <button
                            onClick={() => setShowMap(false)}
                            className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow"
                        >
                            <X size={18} />
                        </button>
                        <iframe
                            title="Google Map"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Tashkent+Uzbekistan`}
                        />
                    </motion.div>
                </motion.div>
            )}

            {/* Restaurant Modal */}
            {showRestaurants && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl w-[90%] max-h-[80%] p-6 shadow-2xl overflow-y-auto relative"
                    >
                        <button
                            onClick={() => setShowRestaurants(false)}
                            className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow"
                        >
                            <X size={18} />
                        </button>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">Filiallar</h2>
                        <ul className="space-y-3">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {locationResta.map((item, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => handleSelectLocation(item.loction)} // optional click handler
                                        className="cursor-pointer bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col gap-2"
                                    >
                                        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a4 4 0 00-5.657 0l-4.243 4.243M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            <span>{item.name}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-snug pl-7">{item.loction}</p>
                                    </li>
                                ))}
                            </ul>

                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SetNavigationMap;
