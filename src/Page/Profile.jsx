import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { logout } from "../Feauters/auth/authSlice";

const Profile = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout());
    };
    return (
        <div>
            Profile
            <div className="mt-6">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500 text-sm font-medium px-4 py-3 w-full bg-white rounded-md shadow-sm"
                >
                    <BiLogOut />
                    Logout
                </button>
            </div>
        </div>

    )
}

export default Profile
