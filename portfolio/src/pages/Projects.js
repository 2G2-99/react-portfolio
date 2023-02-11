// # IMPORTS
// COMPONENTS
import { Container, Row, Column, Card } from '../components/export';

// PROJECTS JSON
import listOfProjects from '../listOfProjects.json';

const Projects = () => {
	return (
		<>
			<Container>
				<Row>
					{listOfProjects.map(project => {
						return (
							<Column size={'col-12 col-md-6'}>
								<Card
									title={project.title}
									picture={project.picture}
									description={project.description}
									technologies={project.technologies.map(technology => {
										return technology ? (
											<li key={technology.id} className="list-group-item">
												<img
													className="tech-icons"
													src={technology.path}
													alt={`Technology ${technology.technology}`}
												/>
											</li>
										) : null;
									})}
									repository={project.repository}
									deployed={project.deployed}
								/>{' '}
							</Column>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default Projects;
