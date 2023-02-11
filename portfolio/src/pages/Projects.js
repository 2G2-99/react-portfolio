// # IMPORTS
// COMPONENTS
import { Container, Row, Card } from '../components/export';

// PROJECTS JSON
import listOfProjects from '../listOfProjects.json';

const Projects = () => {
	return (
		<Container type={'container-fluid'}>
			<Row type={'row row-cols-2'}>
				{listOfProjects.map(project => {
					return (
						<Card
							title={project.title}
							picture={project.picture}
							description={project.description}
							technologies={project.technologies}
							repository={project.repository}
							deployed={project.deployed}
						/>
					);
				})}
			</Row>
		</Container>
	);
};

export default Projects;
