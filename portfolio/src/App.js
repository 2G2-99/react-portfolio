import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/header/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import { Home, About, Projects, Contact } from './pages/export';

function App() {
	return (
		<>
			<Router>
				<Navbar>
					<Wrapper>
						<Routes>
							<Route path="/" />
							<Route path="/about" />
							<Route path="/projects" />
							<Route path="/contact" />
						</Routes>
					</Wrapper>
				</Navbar>
			</Router>
		</>
	);
}

export default App;
