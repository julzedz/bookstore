import { Route, Routes } from 'react-router-dom';
import './App.css';
import Bookspage from './pages/Bookspage';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookspage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
