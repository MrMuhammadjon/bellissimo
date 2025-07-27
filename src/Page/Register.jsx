import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Feauters/auth/authSlice";
import { useNavigate } from "react-router-dom";
import HomeBtn from "../Components/PageComponetns/HomeBtn";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", phone: "", password: "" });
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name.trim().length < 3) {
      alert("Ismingiz kamida 3 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    const numericPhone = form.phone.replace(/\D/g, "");
    if (!form.phone.startsWith("998") && !form.phone.startsWith("+998")) {
      alert("Telefon raqam +998 bilan boshlanishi kerak.");
      return;
    }
    if (numericPhone.length < 9 || numericPhone.length > 15) {
      alert("Telefon raqam 9–15 ta raqamdan iborat bo'lishi kerak.");
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
    <div className="min-h-screen flex justify-center bg-gradient-to-br">
      <HomeBtn />
      <div className="bg-white p-10 mt-20 rounded-2xl shadow-2xl w-[90%] h-[470px] md:maz-w-md max-w-md border border-green-200">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Ro'yxatdan o'tish
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            required
            placeholder="Ismingiz"
            value={form.name}
            className="border border-green-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            minLength={3}
          />

          <PhoneInput
            country={"uz"}
            value={form.phone}
            onChange={(phone) => setForm({ ...form, phone })}
            inputClass="!w-full border border-green-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            containerClass="!w-full"
          />

          <input
            type="password"
            name="password"
            required
            placeholder="Maxfiy kalit (kamida 4 belgi)"
            value={form.password}
            className="border border-green-300 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            minLength={4}
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
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

          {error && (
            <p className="text-red-500 text-center mt-2">❌ {error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
