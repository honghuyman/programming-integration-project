import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Pages
import Login from './pages/login';
import Register from './pages/register';
import Project from './pages/project';
import NewProject from './pages/new-project';
import Transaction from './pages/transaction';

function App()
{
    return (
        <Router>
            <div className='App'>
                <Routes>
                    {/* TODO Change to transaction */}
                    <Route exact path="/" element={<Login />} />

                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/project/new-project' element={<NewProject />} />
                    <Route path='/transaction' element={<Transaction />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;