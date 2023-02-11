import { GoTo, GitHubLogo } from '../../../assets/export';

const Card = ({
	id,
	title,
	picture,
	description,
	technologies,
	repository,
	deployed,
}) => {
	// # FUNCTIONS

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
		<div className={`card h-100`} key={id}>
			<h5 className="card-title">{title}</h5>
			<img
				src={picture}
				className="card-img-top"
				alt={`Screenshot of ${title}`}
			/>
			<div className="card-body">
				<p className="card-text">{description}</p>
				<ul className="list-group list-group-horizontal">{technologies}</ul>
				<div className="btn-group" role="group" aria-label="Basic example">
					{generateButtonOf(repository, GitHubLogo)}
					{generateButtonOf(deployed, GoTo)}
				</div>
			</div>
		</div>
	);
};

export default Card;
