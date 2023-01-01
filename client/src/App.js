import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import SignUp from './components/signup';

function App()
{
    return (
        <Router>
            <div className='App'>
                <Routes>
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;