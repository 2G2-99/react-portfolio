// # IMPORTS
// COMPONENTS
import { Container, Row, Card } from '../components/export';

// PROJECTS JSON
import listOfProjects from '../data/listOfProjects.json';

const Projects = () => {
	return (
		<Container type={'container-fluid'}>
			<Row type={'row row-cols-2'}>
				{listOfProjects.map(project => {
					return (
						<Card
							key={project.id}
							title={project.title}
							picture={`${project.picture}`}
							description={project.description}
							technologies={project.technologies.map(technology => {
								return technology ? (
									<li key={technology.id} className="list-group-item">
										<img
											className="tech-icons"
											src={`${technology.path}`}
											alt={`Logo of ${technology.technology}`}
										/>
									</li>
								) : null;
							})}
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
