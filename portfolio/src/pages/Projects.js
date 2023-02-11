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
					<Column className={'col-12 col-md-6'}>
						{listOfProjects.map(project => {
							return (
								<Card
									id={project.id}
									title={project.title}
									picture={project.picture}
									description={project.description}
									technologies={project.technologies}
									repository={project.repository}
									deployed={project.deployed}
								/>
							);
						})}
					</Column>
				</Row>
			</Container>
		</>
	);
};

export default Projects;
