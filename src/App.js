import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import EditorPage from './pages/EditorPage';

function App() {
  return (
    <>
      {/* Wrap the whole app in Browser Router */}
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/editor/:roomId' element={<EditorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
