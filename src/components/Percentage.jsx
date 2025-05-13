// === Percentage.jsx ===
import { useState } from 'react';
import { Link } from 'react-router-dom';

// מחזיר כמה זה X אחוז מתוך Y (לדוגמה 20% מתוך 50 = 10)
const Percentage = () => {
  const [base, setBase] = useState('');
  const [pct, setPct] = useState('');
  const result =
    base !== '' && pct !== ''
      ? (Number(base) * Number(pct)) / 100
      : '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <Link
        to="/"
        className="absolute top-6 left-6 text-white hover:text-indigo-200"
      >
        ← Home
      </Link>

      <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-4">
        Percentage
      </h1>

      {/* הסבר בעברית – משפט אחד */}
      <p className="text-white text-center mb-6">
        מחשב כמה זה אחוז נתון (X %) מתוך מספר בסיס (Y)
      </p>

      <form className="w-full max-w-sm bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col gap-4">
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(e.target.value)}
          placeholder="Base number (Y)"
          className="px-4 py-2 rounded-xl shadow-inner bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="number"
          value={pct}
          onChange={(e) => setPct(e.target.value)}
          placeholder="Percentage (X%)"
          className="px-4 py-2 rounded-xl shadow-inner bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="text-xl font-bold text-center text-white drop-shadow-md">
          {result}
        </div>
      </form>
    </div>
  );
};

export default Percentage;
