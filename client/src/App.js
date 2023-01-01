import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Page
import Login from './components/login'
import Register from './components/register';

function App()
{
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;