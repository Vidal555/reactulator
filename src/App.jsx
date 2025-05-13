// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Multiply from './components/Multiply';
import Divide from './components/Divide';
import Add from './components/Add';
import Subtract from './components/Subtract';
import Modulo from './components/Modulo';
import Percentage from './components/Percentage';
import PercentOf from './components/PercentOf';
import Sqrt from './components/Sqrt';
import Power    from './components/Power';
import Average  from './components/Average';
import Pythagoras from './components/Pythagoras';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/multiply" element={<Multiply />} />
      <Route path="/divide" element={<Divide />} />
      <Route path="/add" element={<Add />} />
      <Route path="/subtract" element={<Subtract />} />
      <Route path="/modulo" element={<Modulo />} />
      <Route path="/percentage" element={<Percentage />} />
      <Route path="/percent-of" element={<PercentOf />} />
      <Route path="/sqrt" element={<Sqrt />} />
      <Route path="/power" element={<Power />} />
      <Route path="/average" element={<Average />} />
      <Route path="/pythagoras" element={<Pythagoras />} />
    </Routes>
  </Router>
);

export default App;
