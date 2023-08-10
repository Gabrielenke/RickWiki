import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SearchBar from './components/SearchBar';
import Episodes from './Pages/Episodes';
import Characters from './Pages/Characters';
import CardDetails from './components/CardDetails';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
        <Routes>
          <Route path="/characters/:id" element={<CardDetails />} />
          <Route path="/episodes/:id" element={<CardDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
