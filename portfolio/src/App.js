import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar, Wrapper, Container } from './components/export';
import { Home, About, Projects, Contact } from './pages/export';

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Wrapper>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Wrapper>
			</div>
		</Router>
	);
}

export default App;
