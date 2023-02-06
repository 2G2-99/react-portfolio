import Navbar from './components/header/Navbar';
import Jumbotron from './components/header/Jumbotron';
import About from './components/pages/About';
import AboutCard from './components/main/AboutCard';
import AboutMe from './components/main/AboutMe';

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
import picture from './assets/images/png-transparent-default-avatar-thumbnail.png';

function App() {
	return (
		<>
			<header>
				<Navbar />
				<Jumbotron />
			</header>
			<main>
				<About>
					<AboutCard image={picture}>
						<AboutMe
							content="Hello! I'm attending a web development boot camp with the
									intention to become a full stack web developer."
						/>
						<AboutMe
							content="There has always been a huge gap about the use and knowledge
									of the technology we use every day. And there is much to
									discover and create with all the tools we have now."
						/>
					</AboutCard>
				</About>
			</main>
		</>
	);
}

export default App;
