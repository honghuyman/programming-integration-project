import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Style
import 'bootstrap/dist/css/bootstrap.css';

// Pages
import Login from './pages/login';
import Register from './pages/register';
import Project from './pages/project';
import Transaction from './pages/transaction';
import Modal from './Components/Modal/Modal';
import Report from './Components/Report/Report';
import Barchart from './Components/Barchart';
import Piechart from './Components/Piechart';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					{/* TODO Change to transaction */}
					<Route exact path="/" element={<Login />} />

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/project" element={<Project />} />
					<Route path="/transaction" element={<Transaction />} />
					<Route path="/pop-up" element={<Modal />} />
					<Route path="/report" element={<Report />} />
					<Route path="/barchart" element={<Barchart />} />
					<Route path="/piechart" element={<Piechart />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
