import AuthForm from './AuthForm';
import { useState } from 'react';
const dreams = [
  'Посетить Японию',
  'Научиться играть на гитаре',
  'Написать книгу',
  'Путешествовать по Европе',
  'Выучить новый язык',
]
function App() {
  const [isAuth, setAuth] = useState(true);
  const [isLoggingIn, setLoggingIn] = useState(true);
  return (
    <div className="bg-mainColor min-h-screen relative">
      <div className={`${isAuth ? "blur-md" : ''}`}>
        <div className="flex justify-center items-center gap-4 pt-16">
          <div className="bg-dirtyWhite w-1/4 p-4 rounded-lg h-auto">
            <h1 className="text-2xl text-dirtyBrown font-bold text-center">Мечты</h1>
            <ul className="">
              {dreams.map((dream, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-300 py-2">
                  <span className="text-dirtyBlack">{dream}</span>
                  <div className="flex gap-2">
                    <button className="bg-green-400 text-white p-1 rounded hover:bg-green-600 duration-300">
                      <img src="/done.png" alt="Удалить" className="w-6 h-6" />
                    </button>
                    <button className="bg-red-400 text-white p-1 rounded hover:bg-red-600 duration-300">
                      <img src="/drop.png" alt="Удалить" className="w-6 h-6" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-4">
              <input className='bg-slate-300 p-2 w-full rounded-md border border-1 border-dirtyBlack focus:outline focus:outline-1 focus:outline-dirtyBrown' placeholder='Введите заметку:' />
              <button className="bg-secondaryColor text-white p-2 rounded hover:bg-blue-600 duration-300">Добавить</button>
            </div>
          </div>
          <div className="bg-dirtyBrown w-1/4 p-4 rounded-lg h-auto">
            <h1 className="text-2xl text-dirtyWhite font-bold text-center">Желания</h1>
            <ul className="">
              {dreams.map((dream, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-300 py-2">
                  <span className="text-dirtyWhite">{dream}</span>
                  <div className="flex gap-2">
                    <button className="bg-green-400 text-white p-1 rounded hover:bg-green-600 duration-300">
                      <img src="/done.png" alt="Удалить" className="w-6 h-6" />
                    </button>
                    <button className="bg-red-400 text-white p-1 rounded hover:bg-red-600 duration-300">
                      <img src="/drop.png" alt="Удалить" className="w-6 h-6" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-4">
              <input className='bg-slate-300 p-2 w-full rounded-md border border-1 border-dirtyBlack focus:outline focus:outline-1 focus:outline-dirtyBrown' placeholder='Введите заметку:' />
              <button className="bg-secondaryColor text-white p-2 rounded hover:bg-blue-600 duration-300">Добавить</button>
            </div>
          </div>
          <div className="bg-dirtyBlack w-1/4 p-4 rounded-lg h-auto">
            <h1 className="text-2xl text-dirtyWhite font-bold text-center">Действия</h1>
            <ul className="">
              {dreams.map((dream, index) => (
                <li key={index} className="flex justify-between items-center border-b border-gray-300 py-2">
                  <span className="text-dirtyWhite">{dream}</span>
                  <div className="flex gap-2">
                    <button className="bg-green-400 text-white p-1 rounded hover:bg-green-600 duration-300">
                      <img src="/done.png" alt="Удалить" className="w-6 h-6" />
                    </button>
                    <button className="bg-red-400 text-white p-1 rounded hover:bg-red-600 duration-300">
                      <img src="/drop.png" alt="Удалить" className="w-6 h-6" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-4">
              <input className='bg-slate-300 p-2 w-full rounded-md border border-1 border-dirtyBlack focus:outline focus:outline-1 focus:outline-dirtyBrown' placeholder='Введите заметку:' />
              <button className="bg-secondaryColor text-white p-2 rounded hover:bg-blue-600 duration-300">Добавить</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isAuth ? 'absolute inset-0 bg-black/50' : 'hidden'} `}>
      </div>
      {
        isLoggingIn ? <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md flex flex-col items-center justify-center gap-4 py-6 rounded-2xl bg-white/10  border border-white/20 shadow-2xl px-8">
          <h1 className='text-white text-2xl font-semibold text-center mb-6'>Авторизация</h1>
          <input className='w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-white/40' placeholder="Имя пользователя:"></input>
          <input className='w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-white/40' placeholder="Пароль:"></input>
          <div className="flex justify-between items-center gap-4 w-full">
            <a href="/#!" className="text-white text-sm font-medium hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] duration-300">Ещё нет аккаунта?</a>
            <button className="border border-white/20 hover:bg-white/20 text-white py-2 px-4 rounded-xl duration-300">Войти</button>
          </div>
        </form> : <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-md flex flex-col items-center justify-center gap-4 py-6 rounded-2xl bg-white/10  border border-white/20 shadow-2xl px-8">
          <h1 className='text-white text-2xl font-semibold text-center mb-6'>Регистрация</h1>
          <input className='w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-white/40' placeholder="Имя пользователя:"></input>
          <input className='w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none border border-white/20 focus:border-white/40' placeholder="Пароль:"></input>
          <div className="flex justify-between items-center gap-4 w-full">
            <a href="/#!" className="text-white text-sm font-medium hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] duration-300">Уже есть аккаунт?</a>
            <button className="border border-white/20 hover:bg-white/20 text-white py-2 px-4 rounded-xl duration-300">Создать аккаунт</button>
          </div>
        </form>
      }

    </div>
  );
}

export default App;
