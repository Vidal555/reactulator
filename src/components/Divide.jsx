// === Divide.jsx ===
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Divide = () => {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const result =
    a !== '' && b !== ''
      ? Number(b) === 0
        ? 'Cannot divide by zero'
        : Number(a) / Number(b)
      : '';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <Link to="/" className="absolute top-6 left-6 text-white hover:text-indigo-200">
        ← Home
      </Link>

      <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-4">
        Division
      </h1>

      {/* הסבר קצר בעברית */}
      <p className="text-white text-center mb-6">
        מחלק את המספר הראשון בשני ומציג את התוצאה
        (אם המחלק הוא 0 תופיע הודעת&nbsp;שגיאה)
      </p>

      <form className="w-full max-w-sm bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col gap-4">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="Dividend"
          className="px-4 py-2 rounded-xl shadow-inner bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="Divisor"
          className="px-4 py-2 rounded-xl shadow-inner bg-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="text-xl font-bold text-center text-white drop-shadow-md">
          {result}
        </div>
      </form>
    </div>
  );
};

export default Divide;
