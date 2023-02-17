// # IMPORTS
// COMPONENTS
import { Container, Row, Column, Card } from '../components/export';

// PROJECTS JSON
import listOfProjects from '../data/listOfProjects.json';

// STYLE
import '../assets/styles/Projects.css';

const Projects = () => {
	return (
		<Container type={'container-fluid'}>
			<Row type={'row'}>
				{listOfProjects.map(project => {
					return (
						<Column size={'col-12 col-md-6 col-lg-4'}>
							<Card
								key={project.id}
								title={project.title}
								picture={`${project.picture}`}
								description={project.description}
								technologies={project.technologies.map(technology => {
									return technology ? (
										<li
											key={technology.id}
											className="technology list-group-item"
										>
											<img
												className="tech-icon"
												src={`${technology.path}`}
												alt={`Logo of ${technology.technology}`}
											/>
										</li>
									) : null;
								})}
								repository={project.repository}
								deployed={project.deployed}
							/>
						</Column>
					);
				})}
			</Row>
		</Container>
	);
};

export default Projects;
