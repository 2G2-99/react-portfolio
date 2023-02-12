// # IMPORTS
// REACT
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

// STYLE
import './index.css';

const Hero = () => {
	const [flip, setFlip] = useState(false);
	return (
		<ReactCardFlip isFlipped={flip} flipDirection="vertical">
			<div className="jumbotron jumbotron-fluid" id="custom-hero">
				<div className="container text-center">
					<h1 className="display-4">Welcome to my website! </h1>
					<p className="lead" onClick={() => setFlip(!flip)}>
						I'm a front-end developer based on London. Passionate about books,
						video games and music.
					</p>
				</div>
			</div>
			<div>
				<button onClick={() => setFlip(!flip)}>Flip Again</button>
			</div>
		</ReactCardFlip>
	);
};

// const [flip, setFlip] = useState(false);
//
// const handleFlip = () => {
// 	setFlip(!flip);
// };
//
// return <>
// 	<div className="jumbotron jumbotron-fluid" id="custom-hero">
// 		<div className="container text-center">
// 			<h1 className="display-4">Welcome to my website! </h1>
// 			<p className="lead">
// 				I'm a front-end developer based on London. Passionate about books,
// 				video games and music.
// 			</p>
// 		</div>
// 	</div>
// </>

export default Hero;
