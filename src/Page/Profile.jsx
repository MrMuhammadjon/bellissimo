import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { logout } from "../Feauters/auth/authSlice";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("✅ Hisobdan chiqdingiz!");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mt-6">
        <button
          onClick={()=>{handleLogout; navigate('/')}}
          className="flex items-center gap-2 text-red-500 text-sm font-medium px-4 py-3 w-full bg-white rounded-md shadow-sm hover:bg-red-50 transition"
        >
          <BiLogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
