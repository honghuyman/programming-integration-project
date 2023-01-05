import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Page
import Login from './components/login'
import Register from './components/register';
import Modal from './components/Modal/Modal';
import Report from './components/Report/Report';
import Barchart from './components/Barchart';
import Piechart from './components/Piechart';

function App()
{
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/pop-up' element={<Modal />} />
                    <Route path='/report' element={<Report />} />
                    <Route path='/barchart' element={<Barchart />} />
                    <Route path='/piechart' element={<Piechart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;