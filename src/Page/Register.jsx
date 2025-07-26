import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Feauters/auth/authSlice";
import { useNavigate } from "react-router-dom";
import HomeBtn from "../Components/PageComponetns/HomeBtn";
import InputMask from "react-input-mask";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", phone: "", password: "" });
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // VALIDATSIYA
    if (form.name.trim().length < 3) {
      alert("Ismingiz kamida 3 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    const cleanedPhone = form.phone.replace(/\D/g, "");
    if (cleanedPhone.length !== 12) {
      alert("Telefon raqam to‘liq va to‘g‘ri formatda bo‘lishi kerak.");
      return;
    }

    if (form.password.trim().length < 4) {
      alert("Parol kamida 4 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    try {
      await dispatch(registerUser(form)).unwrap();
      navigate("/");
    } catch (err) {
      console.error("Ro'yxatdan o'tishda xatolik:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <HomeBtn />
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-green-200">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Ro'yxatdan o'tish</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            required
            placeholder="👤 Ismingiz"
            value={form.name}
            className="border border-green-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <InputMask
            mask="+998 (99) 999 99 99"
            maskChar={null}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                type="tel"
                name="phone"
                required
                placeholder="📱 Telefon raqam"
                className="border border-green-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
              />
            )}
          </InputMask>
          <input
            type="password"
            name="password"
            required
            placeholder="🔒 Maxfiy kalit"
            value={form.password}
            className="border border-green-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-60"
          >
            {loading ? "⏳ Ro'yxatdan o'tilmoqda..." : "Ro'yxatdan o'tish"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="border border-green-600 text-green-700 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all"
          >
            Kirish sahifasiga
          </button>

          {error && <p className="text-red-500 text-center mt-2">❌ {error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
