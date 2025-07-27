import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../Feauters/auth/authSlice";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import HomeBtn from '../Components/PageComponetns/HomeBtn';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("✅ Hisobdan muvaffaqiyatli chiqdingiz!");
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <HomeBtn/>
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Profil</h1>
      
      {user && (
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-600">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.phone}</p>
            </div>
          </div>
        </div>
      )}

      <div className="border-t pt-4">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center gap-2 text-red-600 hover:text-red-700 text-sm font-medium px-4 py-3 w-full bg-white rounded-md border border-red-200 hover:bg-red-50 transition-all"
        >
          <BiLogOut className="text-lg" />
          Hisobdan chiqish
        </button>
      </div>
    </div>
  );
};

export default Profile;