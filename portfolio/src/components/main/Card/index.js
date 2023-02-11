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

/**
 * (
		<>
			<>
				<div className="container-fluid">
					<div className="row">
						<div className="card card-intro">
							<div className="card-body">
								<p className="card-text">
									Hello! I'm attending a web development boot camp with the
									intention to become a full stack web developer.
								</p>
								<p className="card-text">
									There has always been a huge gap about the use and knowledge
									of the technology we use every day. And there is much to
									discover and create with all the tools we have now.
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="card card-experience">
							<div className="card-body">
								<h3 className="card-heading">Experience</h3>
								<p className="card-text">
									Certificate of front-end developer from Trilogy Skills
									Bootcamp
								</p>
							</div>
						</div>
						<div className="card card-skills">
							<div className="card-body">
								<h3 className="card-heading">Skills</h3>
								<div className="skills-container">
									<ul className="skills">
										<li className="skill" id="html5"></li>
										<li className="skill" id="css3"></li>
										<li className="skill" id="javascript"></li>
										<li className="skill" id="git"></li>
										<li className="skill" id="github"></li>
										<li className="skill" id="jquery"></li>
										<li className="skill" id="bootstrap"></li>
										<li className="skill" id="nodejs"></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
			;
		</>
	);
 */
