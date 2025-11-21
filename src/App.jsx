import './App.css';

function App() {
  return (
    <div className="justify-center  min-h-screen flex items-center bg-linear-to-r from-blue-500  text-white to-purple-600">
      <h1 className=" drop-shadow-lg mb-4 font-bold">VacationTime Test</h1>

      <p className="underline decoration-yellow-300 italic text-lg  ">
        Tailwind should be working, test test
      </p>
      <div className="bg-amber-400">Test</div>

      <button className="px-6 bg-yellow-400 hover:bg-yellow-300 mt-6 shadow-lg hover:scale-105 transition-transform py-3 rounded-lg text-black font-semibold">
        Testy Button
      </button>
    </div>
  );
}

export default App;
