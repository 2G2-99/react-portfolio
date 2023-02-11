const Card = ({
	id,
	title,
	picture,
	description,
	technologies,
	repository,
	deployed,
}) => {
	const checkContentOf = content => {
		if (!content) {
			return null;
		}
	};

	const generateBadgesOf = technologies => {
		technologies.map(technology => {
			return (
				<>
					<li key={id} className="list-group-item">
						<img className="tech-icons" src={technology} alt="#" />
					</li>
				</>
			);
		});
	};

	const generateButtonOf = site => {
		return (
			<>
				<button type="button" class={`btn btn-secondary btn-${site}`}>
					<img src={site} alt={`Link to ${site}`} />
				</button>
			</>
		);
	};

	return (
		<div key={id} class={`card card-${title}`}>
			<h5 class="card-title">{checkContentOf(title)}</h5>
			<img
				src={checkContentOf(picture)}
				class="card-img-top"
				alt={`Screenshot of ${title}`}
			/>
			<div class="card-body">
				<p class="card-text">{checkContentOf(description)}</p>
				<ul className="list-group list-group-horizontal">
					{generateBadgesOf(technologies)}
				</ul>
				<div class="btn-group" role="group" aria-label="Basic example">
					{generateButtonOf(repository)}
					{generateButtonOf(deployed)}
				</div>
			</div>
		</div>
	);
};

export default Card;
