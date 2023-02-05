import Navbar from './components/header/Navbar';
import Jumbotron from './components/header/Jumbotron';
import About from './components/pages/About';

// # Importing images and SVGs
import {
	HTML5Logo,
	CSSLogo,
	JSLogo,
	GITLogo,
	GitHubLogo,
	JQueryLogo,
	BootstrapLogo,
	NodejsLogo,
} from './assets/svg/export';
function App() {
	return (
		<>
			<header>
				<Navbar />
				<Jumbotron />
			</header>
			<main>
				<About />
			</main>
		</>
	);
}

export default App;
