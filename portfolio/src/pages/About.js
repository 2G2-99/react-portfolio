// # IMPORTS
import { Container, Row, Column } from '../components/export';
import {
	HTML5Logo,
	CSSLogo,
	JSLogo,
	GITLogo,
	GitHubLogo,
	JQueryLogo,
	BootstrapLogo,
	NodejsLogo,
} from '../assets/export';

const About = () => {
	return (
		<>
			<Container type={'container'}>
				<Row type={'row'}>
					<Column size={'col-12'}>
						<div className="card card-intro">
							<div className="card-body">
								<p className="card-text">
									Hello! I'm attending a web development boot camp with the
									intention to become a full stack web developer.
								</p>
								<p className="card-text">
									There has always been a huge gap about the use and knowledge
									of the technology we use every day. And there is much to
									discover and create with all the tools we have now.
								</p>
							</div>
						</div>
					</Column>
				</Row>
				<Row type={'row'}>
					<Column size={'col-12 col-md-6'}>
						<div className="card card-experience">
							<div className="card-body">
								<h3 className="card-heading">Experience</h3>
								<p className="card-text">
									Certificate of front-end developer from Trilogy Skills Boot
									camp
								</p>
							</div>
						</div>
					</Column>
					<Column size={'col-12 col-md-6'}>
						<div className="card card-skills">
							<div className="card-body">
								<h3 className="card-heading">Skills</h3>
								<div className="skills-container">
									<ul className="list-group list-group-horizontal">
										<li className="list-group-item">
											<img src={HTML5Logo} alt="HTML5 logo" />
										</li>
										<li className="list-group-item">
											<img src={CSSLogo} alt="" />
										</li>
										<li className="list-group-item">
											<img src={JSLogo} alt="" />
										</li>
										<li className="list-group-item">
											<img src={GITLogo} alt="" />
										</li>
										<li className="list-group-item">
											<img src={GitHubLogo} alt="" />
										</li>
										<li className="list-group-item">
											<img src={JQueryLogo} alt="" />
										</li>
										<li className="list-group-item">
											<img src={BootstrapLogo} alt="" />
										</li>
										<li className="list-group-item">
											<img src={NodejsLogo} alt="" />
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Column>
				</Row>
			</Container>
		</>
	);
};

export default About;
