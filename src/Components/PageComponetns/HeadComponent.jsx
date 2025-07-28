import React, { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { LuPen, LuShoppingCart } from 'react-icons/lu';
import MobileMenu from './MobileMenu';
import { useNavigate } from 'react-router-dom';
import SetNavigationMap from '../PageComponetns/SetNavigateionMap';

const HeadComponent = () => {
    const [PlaceOfService] = useState([
        { name: 'Yetkazib berish', onClick: 'openMep' },
        { name: 'Olib ketish', onClick: 'openRes' }
    ]);
    const [isDelivery, setIsDelivery] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [showMap, setShowMap] = useState(false);
    const [showRestaurants, setShowRestaurants] = useState(false);

    const handleAddressClick = () => {
        if (isDelivery) {
            setShowMap(true);
        } else {
            setShowRestaurants(true); 
        }
    };


    return (
        <div className="block md:flex md:w-full max-w-6xl md:p-0 m-auto">
            <MobileMenu className="right" isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

            <div className="w-full flex items-center justify-between px-4 md:px-0">
                <div className='md:hidden'>
                    <BiMenu size={24} onClick={() => setMenuOpen(true)} />
                </div>

                <div className="flex items-center justify-center p-1 gap-2 bg-gray-100 rounded-full shadow-inner w-[240px] mt-4">
                    {PlaceOfService.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setIsDelivery(index === 0)}
                            className={`flex-1 px-2 py-2 rounded-full text-[12px] font-medium transition ${(index === 0 && isDelivery) || (index === 1 && !isDelivery)
                                ? 'bg-white text-black shadow'
                                : 'text-gray-500'
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                <div onClick={() => navigate('/cart')} className="relative md:hidden">
                    <LuShoppingCart size={24} />
                    <span className="absolute -top-2 -right-2 bg-red-700 text-white text-[10px] px-[6px] py-[1px] rounded-full">
                        0
                    </span>
                </div>
            </div>

            <div className="w-full px-4 mt-5 m-auto flex items-center justify-center">
                <div
                    onClick={handleAddressClick}
                    className="w-full border border-orange-300 text-orange-300 rounded-xl bg-amber-50 flex items-center justify-between p-2 cursor-pointer"
                >
                    <h1 className="text-[14px]">
                        {isDelivery ? 'Bu yerda manzilni tanlang' : 'Filialni tanlang'}
                    </h1>
                    <LuPen />
                </div>
            </div>

            <SetNavigationMap
                showMap={showMap}
                setShowMap={setShowMap}
                showRestaurants={showRestaurants}
                setShowRestaurants={setShowRestaurants}
            />
        </div>
    );

};

export default HeadComponent;
