// # IMPORTS
// REACT
import { NavLink } from 'react-router-dom';

// STYLE
import './index.css';

const Navbar = () => {
	return (
		<>
			<nav className="custom-navbar navbar navbar-expand">
				<span className="navbar-brand">Santiago Gomez</span>

				<ul className="navbar-nav nav nav-tabs border-bottom-0">
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
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
