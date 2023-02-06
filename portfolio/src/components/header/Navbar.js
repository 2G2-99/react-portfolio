/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<span className="navbar-brand">Navbar</span>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Resume
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
