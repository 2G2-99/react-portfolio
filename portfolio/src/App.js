import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/header/Navbar';
import Wrapper from './components/main/Wrapper';
import { Home, About, Projects, Contact } from './pages/export';

function App() {
	return (
		<>
			<Router>
				<Navbar>
					<Wrapper>
						<Routes>
							<Route path="/" element={Home} />
							<Route path="/about" element={About} />
							<Route path="/projects" element={Projects} />
							<Route path="/contact" element={Contact} />
						</Routes>
					</Wrapper>
				</Navbar>
			</Router>
		</>
	);
}

export default App;
