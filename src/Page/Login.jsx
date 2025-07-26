import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Feauters/auth/authSlice';
import HomeBtn from '../Components/PageComponetns/HomeBtn';
import Home from './Home';

const Login = () => {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ phone, password })).unwrap();
      navigate('/');
    } catch (err) {
      console.error('Loginda xatolik:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <HomeBtn/>
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-green-200">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-6">Kirish</h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="tel"
            placeholder="📱 Telefon raqamingiz"
            value={phone}
            minLength={9}
            required
            className="border border-green-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="🔒 Parolingiz"
            value={password}
            minLength={4}
            required
            className="border border-green-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-60"
          >
            {loading ? '⏳ Kirilmoqda...' : 'Kirish'}
          </button>

          <button
            type="button"
            onClick={() => navigate('/register')}
            className="border border-green-600 text-green-700 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>

        {user && <p className="text-green-600 text-center mt-4">✅ Xush kelibsiz, {user.name}!</p>}
        {error && <p className="text-red-500 text-center mt-4">❌ {error}</p>}
      </div>
    </div>
  );
};

export default Login;
