import React, { useState } from 'react';
import { BiLogOut, BiMenu } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Feauters/auth/authSlice';
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
        toast.success('✅ Hisobdan muvaffaqiyatli chiqdingiz!');
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gradient-to-tr from-green-50 to-white flex flex-col lg:flex-row max-w-6xl m-auto">
            {/* Sidebar / Mobile Menu */}
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
            <div className="absolute top-4 left-4 z-50">
                <HomeBtn />
            </div>

            <div className="w-full lg:w-[400px] bg-white p-6 lg:h-screen flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <BiMenu
                            size={24}
                            onClick={() => setMenuOpen(true)}
                            className="cursor-pointer text-gray-600 lg:hidden"
                        />
                        <h1 className="text-xl font-bold text-gray-800">Profil</h1>
                        <div className="w-6" />
                    </div>

                    {user && (
                        <div className="flex items-center gap-4 mb-8 transition duration-500">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600 shadow">
                                {user.name?.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
                                <p className="text-gray-500 text-sm">{user.phone}</p>
                            </div>
                        </div>
                    )}

                    <div className="space-y-4 border-t pt-4">
                        <button className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-100 hover:bg-green-100 transition duration-300 shadow-sm">
                            <span className="font-medium text-gray-800">Shaxsiy ma'lumotlar</span>
                        </button>
                        <button className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-100 hover:bg-green-100 transition duration-300 shadow-sm">
                            <span className="font-medium text-gray-800">Mening manzilim</span>
                        </button>
                        <button className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-100 hover:bg-green-100 transition duration-300 shadow-sm">
                            <span className="font-medium text-gray-800">Mening buyurmalarim</span>
                        </button>
                    </div>
                </div>

                <div className="mt-8 border-t pt-4">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 text-red-600 hover:text-red-700 text-sm font-semibold px-4 py-3 bg-red-50 hover:bg-red-100 rounded-full border border-red-200 transition"
                    >
                        <BiLogOut className="text-lg" />
                        Hisobdan chiqish
                    </button>
                </div>
            </div>

            {/* Right Side Placeholder */}
            <div className="flex-1 hidden lg:flex items-center justify-center text-gray-400 italic">
                {/* You can put profile-related content here */}
                Profil sahifasi — bu yerda qo‘shimcha kontent bo‘lishi mumkin.
            </div>
        </div>
    );
};

export default Profile;
