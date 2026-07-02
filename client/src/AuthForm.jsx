import { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "LOGIN" : "REGISTER", form);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Blurred background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')] bg-cover bg-center blur-2xl scale-110" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          {isLogin ? "Вход" : "Регистрация"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Имя пользователя"
            value={form.username}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-white/40"
          />

          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-white/40"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition"
          >
            {isLogin ? "Войти" : "Создать аккаунт"}
          </button>
        </form>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-4 w-full text-sm text-white/80 hover:text-white transition"
        >
          {isLogin ? "Нет аккаунта? Регистрация" : "Уже есть аккаунт? Вход"}
        </button>
      </div>
    </div>
  );
}