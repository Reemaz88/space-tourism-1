import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Crew from './components/Crew';
import Destination from './components/Destination';
import Technology from './components/Technology';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/destination" element={ <Destination /> } />
          <Route path="/technology" element={ <Technology />} />
          <Route path="/crew" element={ <Crew /> } />
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;