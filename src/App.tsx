import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SearchBar from './components/SearchBar';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import Characters from './Pages/Characters';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/" element={<Location />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
