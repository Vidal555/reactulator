// src/components/Pythagoras.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

// מחשב c = √(a² + b²)
const Pythagoras = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  let result = '';

  if (a !== '' && b !== '') {
    result = Math.sqrt(Math.pow(Number(a), 2) + Math.pow(Number(b), 2));
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <Link to="/" className="absolute top-6 left-6 text-white hover:text-indigo-200">
        ← Home
      </Link>

      <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-4">
        Pythagoras&nbsp;(c&nbsp;=&nbsp;√(a²&nbsp;+&nbsp;b²))
      </h1>

      {/* הסבר בעברית – משפט אחד */}
      <p className="text-white text-center mb-6">
        מחשב את אורך&nbsp;היתר במשולש ישר־זווית לפי נוסחת פיתגורס
      </p>

      <form className="w-full max-w-sm bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col gap-4">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Side a"
          className="px-4 py-2 rounded-xl shadow-inner bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Side b"
          className="px-4 py-2 rounded-xl shadow-inner bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="text-xl font-bold text-center text-white drop-shadow-md">
          {result !== '' && result.toFixed(4).replace(/\.?0+$/, '')}
        </div>
      </form>
    </div>
  );
};

export default Pythagoras;
