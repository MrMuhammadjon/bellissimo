import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const SetNavigationMap = ({ showMap, setShowMap, showRestaurants, setShowRestaurants }) => {
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
                            {["Chilonzor", "Yunusobod", "Sergeli", "Olmazor", "Mirzo Ulug'bek"].map((item, idx) => (
                                <li key={idx} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                    {item} filiali
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SetNavigationMap;
