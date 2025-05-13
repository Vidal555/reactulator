// src/components/PercentOf.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

// מחזיר את האחוז שאיבר (A) הוא מתוך כלל (B)
// לדוגמה: 20 מתוך 50 ⇒ 40%
const PercentOf = () => {
  const [part, setPart] = useState('');
  const [whole, setWhole] = useState('');

  let result = '';
  if (part !== '' && whole !== '') {
    result =
      Number(whole) === 0
        ? 'Whole cannot be 0'
        : (Number(part) / Number(whole)) * 100;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <Link to="/" className="absolute top-6 left-6 text-white hover:text-indigo-200">
        ← Home
      </Link>

      <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-4">
        Percent Of
      </h1>

      {/* הסבר בעברית – משפט אחד */}
      <p className="text-white text-center mb-6">
        מחשב איזה אחוז מהווה הערך הראשון (B) מתוך הערך השני (A)
      </p>

      <form className="w-full max-w-sm bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col gap-4">
        <input
          type="number"
          value={part}
          onChange={(e) => setPart(e.target.value)}
          placeholder="Part (A)"
          className="px-4 py-2 rounded-xl shadow-inner bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="number"
          value={whole}
          onChange={(e) => setWhole(e.target.value)}
          placeholder="Whole (B)"
          className="px-4 py-2 rounded-xl shadow-inner bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="text-xl font-bold text-center text-white drop-shadow-md">
          {result !== '' &&
            (typeof result === 'number' ? `${result.toFixed(2)}%` : result)}
        </div>
      </form>
    </div>
  );
};

export default PercentOf;
