// src/components/Home.jsx
import { Link } from 'react-router-dom';
import {
  Divide as DivideIcon,
  Plus,
  Minus,
  X as MultiplyIcon,
  Percent,
  PieChart,
  PercentCircle,
  Radical as SqrtIcon,   // √  (שם החבילה: Radical)
  Superscript,           // xʸ
  Sigma,                 // Σ
  Triangle,              // Δ
} from 'lucide-react';

const features = [
  { icon: <MultiplyIcon size={32} />,  label: 'Multiply',   path: '/multiply'    },
  { icon: <DivideIcon   size={32} />,  label: 'Divide',     path: '/divide'      },
  { icon: <Plus         size={32} />,  label: 'Add',        path: '/add'         },
  { icon: <Minus        size={32} />,  label: 'Subtract',   path: '/subtract'    },
  { icon: <Percent      size={32} />,  label: 'Modulo',     path: '/modulo'      },
  { icon: <PieChart     size={32} />,  label: 'Percentage', path: '/percentage'  },
  { icon: <PercentCircle size={32} />, label: 'Percent Of', path: '/percent-of'  },
  { icon: <SqrtIcon     size={32} />,  label: 'Square Root',path: '/sqrt'        },
  { icon: <Superscript  size={32} />,  label: 'Power',      path: '/power'       },
  { icon: <Sigma        size={32} />,  label: 'Average',    path: '/average'     },
  { icon: <Triangle     size={32} />,  label: 'Pythagoras', path: '/pythagoras'  },
];

const Home = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
    <h1 className="text-4xl font-extrabold text-white mb-12 drop-shadow-lg">
      Reactulator
    </h1>

    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {features.map(({ icon, label, path }) => (
        <Link
          key={label}
          to={path}
          className="flex flex-col items-center justify-center w-32 h-32 bg-white/25 backdrop-blur-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-200"
        >
          {icon}
          <span className="mt-2 font-semibold text-white text-center">{label}</span>
        </Link>
      ))}
    </div>
  </div>
);

export default Home;
