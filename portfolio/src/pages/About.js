// # IMPORTS
// COMPONENTS
import { Container, Row, Column, Card } from '../components/export';

// SVG
import {
	HTML5Logo,
	CSSLogo,
	JSLogo,
	JQueryLogo,
	BootstrapLogo,
	NodejsLogo,
	selfie,
} from '../assets/export';

// STYLE
import '../assets/styles/About.css';

const About = () => {
	return (
		<>
			<Container type={'container'}>
				<Row type={'row'}>
					<Column size={'col-12'}>
						<div className="card custom-card" id="card-intro">
							<div className="card-body">
								<Row type={'row'}>
									<img alt="That's me" src={selfie} />
								</Row>
								<Row type={'row'}>
									<p className="card-text">
										<span id="greeting">Hello again!</span> as you might have
										seen on the top of the page, my name is Santiago and I'm a
										front-end developer with experience in hospitality. To be
										more exact, in restaurants since I enjoy cooking and
										preparing food as much as eating it.
									</p>
									<p className="card-text">
										Having experienced what is to work in a fast paced
										environment has given me the opportunity to learn about how
										to work under pressure and still achieve great results. Now
										I'm looking on another direction trying to take on a
										challenge as a web developer, in a constantly innovating
										industry.
									</p>
									<p className="card-text"></p>
								</Row>
								<Row type={'row'}>
									<button className="btn-resume-pushable">
										<span className="btn-resume-shadow"></span>
										<span className="btn-resume-edge"></span>
										<a
											className="btn-resume-front text"
											href="https://drive.google.com/file/d/1k5YBTciucnt3N5Dxceq2FNJp9iv7Y21l/view?usp=sharing"
											role="button"
											target="_blank"
											rel="noreferrer"
										>
											Resume
										</a>
									</button>
									{/*  */}
								</Row>
							</div>
						</div>
					</Column>
				</Row>
				<Row type={'row'}>
					<Column size={'col-12'}>
						<div className="card custom-card" id="card-experience">
							<div className="card-body">
								<h3 className="card-heading">Experience</h3>
								<ul id="experience-set">
									<li className="experience">
										Certificate of front-end developer from Trilogy Skills Boot
										camp
									</li>
								</ul>
							</div>
						</div>
					</Column>
				</Row>
				<Row type={'row'}>
					<Column size={'col-12'}>
						<div className="card custom-card" id="card-skills">
							<div className="card-body">
								<h3 className="card-heading">Skills</h3>
								<p>I'm well experienced in this technologies... </p>
								<ul
									id="skills-set"
									className="list-group list-group-horizontal"
								>
									<li className="custom-li  list-group-item">
										<img
											className="svg-logo"
											src={HTML5Logo}
											alt="HTML5 logo"
										/>
									</li>
									<li className="custom-li  list-group-item">
										<img className="svg-logo" src={CSSLogo} alt="" />
									</li>
									<li className="custom-li  list-group-item">
										<img className="svg-logo" src={JSLogo} alt="" />
									</li>
									<li className="custom-li  list-group-item">
										<img className="svg-logo" src={BootstrapLogo} alt="" />
									</li>
									<li className="custom-li  list-group-item">
										<img className="svg-logo" src={NodejsLogo} alt="" />
									</li>
								</ul>
							</div>
						</div>
					</Column>
				</Row>
			</Container>
		</>
	);
};

export default About;
