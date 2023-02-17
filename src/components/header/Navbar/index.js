// # IMPORTS
// REACT
import { NavLink } from 'react-router-dom';

// COMPONENTS
import HeaderWrapper from '../../HeaderWrapper/index';

// STYLE
import './index.css';

const Navbar = () => {
	return (
		<>
			<HeaderWrapper>
				<div className="custom-navbar">
					<h1 className="brand">Santiago Gomez</h1>
					<nav className="nav nav-head justify-content-center">
						<NavLink
							to="/"
							end
							className={({ isActive }) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
						>
							Home
						</NavLink>
						<NavLink
							to="about"
							end
							className={({ isActive }) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
						>
							About
						</NavLink>
						<NavLink
							to="projects"
							end
							className={({ isActive }) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
						>
							Projects
						</NavLink>
						<NavLink
							to="contact"
							end
							className={({ isActive }) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
						>
							Contact
						</NavLink>
					</nav>
				</div>
			</HeaderWrapper>

			{/* <nav className="custom-navbar navbar navbar-expand">
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
			</nav> */}
		</>
	);
};

export default Navbar;
