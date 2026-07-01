const dreams = [
  'Посетить Японию',
  'Научиться играть на гитаре',
  'Написать книгу',
  'Путешествовать по Европе',
  'Выучить новый язык',
]
function App() {
  return (
    <div className="bg-mainColor min-h-screen">
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
  );
}

export default App;
