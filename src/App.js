
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Router>
      <Routes>
        <Route path='/'element ={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
