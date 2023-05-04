import React from 'react';
import './index';
import Home from './routes/Home';
import History from './routes/History';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
		<Navbar/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/History' element={<History />} />
			</Routes>
		</>
	);
}

export default App;
