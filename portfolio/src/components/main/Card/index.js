import { GoTo, GitHubLogo } from '../../../assets/export';

const Card = ({
	title,
	picture,
	description,
	technologies,
	repository,
	deployed,
}) => {
	// # FUNCTIONS
	// Generate Technology Badges
	const generateBadgesOf = technologies => {
		technologies.map(technology => {
			return technology ? (
				<li key={technology.id} className="list-group-item">
					<img
						className="tech-icons"
						src={technology.path}
						alt={`Logo of ${technology.technology}`}
					/>
				</li>
			) : null;
		});
	};

	// Generate link buttons
	const generateButtonOf = (site, svg) => {
		return site ? (
			<a href={site}>
				<button type="button" className={`btn btn-secondary`}>
					<img src={svg} alt={`Link to ${site}	`} />
				</button>
			</a>
		) : null;
	};

	return (
		<div className={`card h-100`}>
			<h5 className="card-title">{title}</h5>
			<img
				src={picture}
				className="card-img-top"
				alt={`Screenshot of ${title}`}
			/>
			<div className="card-body">
				<p className="card-text">{description}</p>
				<ul className="list-group list-group-horizontal">
					{generateBadgesOf(technologies)}
				</ul>
				<div className="btn-group" role="group" aria-label="Basic example">
					{generateButtonOf(repository, GitHubLogo)}
					{generateButtonOf(deployed, GoTo)}
				</div>
			</div>
		</div>
	);
};

export default Card;
