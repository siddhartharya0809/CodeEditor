import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import EditorPage from './pages/EditorPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      {/* We will store the react toast here */}
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              }
            }
          }}>
        </Toaster>
      </div>
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
