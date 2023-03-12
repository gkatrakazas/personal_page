import './css/App.css';

import Home from "./pages/Home";
import Datavisualization from "./pages/Datavisualization";

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
              <Route exact path="/personal_page/" element={<Home />} />
              <Route exact path="/personal_page/data_visualization/" element={<Datavisualization />} />

            </Routes>
          </>

      </div>
    </BrowserRouter>
  );
}

export default App;
