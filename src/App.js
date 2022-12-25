
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route ,Routes} from 'react-router-dom'
import Home from './Home';
import Navbar from './Navbar';
import Tradition from './Tradition';
import YouthActivi from './YouthActivi';

function App() {
  return (
    <div className="App">
       <div>
        <Router>
          <Navbar/>
          <Routes>
               <Route path='/' element = {<Home/>}/>
               <Route path='/tradit' element = {<Tradition/>}/>
               <Route path='/youth' element = {<YouthActivi/>}/>
          </Routes>
        </Router>
       </div>
    </div>
  );
}

export default App;
