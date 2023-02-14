// # IMPORTS
// SVG
import { GoTo, GitHubLogo } from '../../../assets/export';

// STYLE
import './index.css';

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
			<button className="link-btn-pushable">
				<span className="link-btn-shadow"></span>
				<span className="link-btn-edge"></span>
				<a
					className="link-btn-front text"
					href={site}
					role="button"
					target="_blank"
					rel="noreferrer"
				>
					<img className="icon-btn" src={svg} alt={`Link to ${site}	`} />
				</a>
			</button>
		) : null;
	};

	return (
		<div className={`project-card card`} key={id}>
			<h2 className="project-title  card-title">{title}</h2>
			<img
				src={picture}
				className="project-image  card-img-top"
				alt={`Screenshot of ${title}`}
			/>
			<div className="card-body">
				<p className="card-text">{description}</p>
				<ul className="technologies  list-group list-group-horizontal">
					{technologies}
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
