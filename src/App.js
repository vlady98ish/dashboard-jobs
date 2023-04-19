import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './layouts/Dashboard';

function App() {
	return (
		<div className="App relative">
			<ToastContainer />
			<Dashboard />
		</div>
	);
}

export default App;
