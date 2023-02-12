// # IMPORTS
// Main components
import { Container, Row, Column, Form } from '../components/export';

// SVGs
import { Linkedin, GitHubLogo, mailEnvelope } from '../assets/export';

// # COMPONENT METHOD
const Contact = () => {
	return (
		<>
			<Container type={'container-fluid'}>
				<Row type={'row'}>
					<Column size={'col-12  col-md-8'}>
						<Container type={'container'}>
							<Row type={'row'}>
								<h3>Hello there!</h3>
								<p>
									Feel free to send me a message to get in touch, or if you
									rather look around, here are another links to reach me.
								</p>
							</Row>
							<Row type={'row'}>
								<ul className="list-group list-group-horizontal">
									<li className="list-group-item">
										<a
											href={
												'https://www.linkedin.com/in/santiago-gomez-837297215/'
											}
										>
											<img src={Linkedin} alt={`Linkedin Logo`} />
										</a>
									</li>
									<li className="list-group-item">
										<a href={'https://github.com/2G2-99'}>
											<img src={GitHubLogo} alt={'GitHub Logo'} />
										</a>
									</li>
									<li className="list-group-item">
										<a href={'mailto:sagos0919@gmail.com'}>
											<img src={mailEnvelope} alt={'Email envelope symbol'} />
										</a>
									</li>
								</ul>
							</Row>
						</Container>
					</Column>
					<Column size={'col-12 col-md-4'}>
						<Form />
					</Column>
				</Row>
			</Container>
		</>
	);
};

export default Contact;
