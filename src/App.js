import { Route, Routes } from 'react-router-dom';
import Bookspage from './pages/Bookspage';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookspage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
