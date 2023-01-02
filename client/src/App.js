import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Components 
import Login from './components/login'
import Register from './components/register';
import Project from './components/project';

function App()
{
    let Component
    switch (window.location.pathname)
    {
        case "/":
            Component = Login;
            break;
        case "/login":
            Component = Login;
            break;
        case "/register":
            Component = Register;
            break;
        case "project":
            Component = Project;
            break;
    }

    return (
        <>
            <Project />
            <Component />
        </>
        
        // <Router>
        //     <div className='App'>
        //         <Routes>
        //             {/* TODO Change to transaction */}
        //             <Route exact path="/" element={<Login />} />

        //             <Route path='/login' element={<Login />} />
        //             <Route path='/register' element={<Register />} />
        //             <Route path='/project' element={<Project />} />
        //         </Routes>
        //     </div>
        // </Router>
    );
}

export default App;