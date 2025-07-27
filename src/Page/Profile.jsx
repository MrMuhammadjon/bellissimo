import React, { useState } from 'react';
import { BiLogOut, BiMenu } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../Feauters/auth/authSlice";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import HomeBtn from '../Components/PageComponetns/HomeBtn';
import MobileMenu from '../Components/PageComponetns/MobileMenu';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        toast.success("✅ Hisobdan muvaffaqiyatli chiqdingiz!");
        navigate('/');
    };

    return (
        <div className="w-full fixed top-0 h-full flex flex-col justify-between bg-gray-50 p-6">
            {/* Mobile Menu */}
            <div className="">
                <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                <HomeBtn />

                {/* Profile Card */}
                <div className="p-6 relative h-[90%]">
                    <div className="flex items-center justify-between mb-6">
                        <BiMenu size={24} onClick={() => setMenuOpen(true)} className="cursor-pointer text-gray-600" />
                        <h1 className="text-xl font-semibold text-gray-800">Profil</h1>
                        <div className="w-6" />
                    </div>

                    {user && (
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
                                {user.name?.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
                                <p className="text-gray-600 text-sm">{user.phone}</p>
                            </div>
                        </div>
                    )}

                    <div className="space-y-4 text-gray-700 text-sm border-t pt-4">
                        <div className='w-full h-15 bg-gray-100 flex items-center p-4 rounded-full transform duration-300 hover:px-6'>
                            <h1 className="text-base font-semibold text-gray-800 mb-1">Shaxsiy ma'lumotlar</h1>
                        </div>

                        <div className='w-full h-15 bg-gray-100 flex items-center p-4 rounded-full transform duration-300 hover:px-6'>
                            <h1 className="text-base font-semibold text-gray-800 mb-1">Mening manzilim</h1>
                        </div>
                    </div>

                    {/* Logout Button */}
                </div>
            </div>

            <div className="mt-30 border-t pt-4 pb-20">
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 text-red-600 hover:text-red-700 text-sm font-semibold px-4 py-3 bg-red-50 hover:bg-red-100 rounded-full  border border-red-200 transition"
                >
                    <BiLogOut className="text-lg" />
                    Hisobdan chiqish
                </button>
            </div>
        </div>
    );
};

export default Profile;
