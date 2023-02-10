import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<span className="navbar-brand">Santiago Gomez</span>
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
						<li className="nav-item">
							<NavLink
								to="/"
								end
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="about"
								end
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="projects"
								end
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
							>
								Projects
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="contact"
								end
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
							>
								Contact
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="resume"
								end
								className={({ isActive }) =>
									isActive ? 'nav-link active' : 'nav-link'
								}
							>
								Resume
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
