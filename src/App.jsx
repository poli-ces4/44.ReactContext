import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import NotFound from './pages/NotFound';
import Menu from './components/Menu';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Menu />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/dashboard' element={<DashboardPage />} />
					<Route path='/users' element={<UsersPage />} />
					<Route path='/user' element={<UserPage />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
