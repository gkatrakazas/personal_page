import './css/App.css';

import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigationbar from './components/Νavigationbar'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="personal_app">

          <>
            <Navigationbar/>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </>

      </div>
    </BrowserRouter>
  );
}

export default App;
