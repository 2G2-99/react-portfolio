function AboutCard({ image, children }) {
	return (
		<>
			<div className="card-container col-sm-12 col-md-12 col-lg-12 my-1">
				<div className="card">
					<div className="img-container">
						<img alt="me" src={image} />
					</div>
					<div className="card-body">{children}</div>
				</div>
			</div>
		</>
	);
}

export default AboutCard;

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
