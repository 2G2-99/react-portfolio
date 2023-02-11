// const Card = ({ type, title, text }) => {
// 	const checkContentOf = content => {
// 		if (!content) {
// 			return null;
// 		}
// 	};
// 	return (
// 		<div className={`card card-${type}`}>
// 			<div className="card-body">
// 				<div className={`card-${title}`}>{checkContentOf(title)}</div>
// 				<div className={`card-${text}`}>{checkContentOf(text)}</div>
// 			</div>
// 		</div>
// 	);
// };

const Card = ({ project, image, description, technologies }) => {
	return (
		<>
			<div className={`card card-${project}`}>
				<h3 className="card-title">{project}</h3>
				<img src={image} className="card-img-top" alt={description} />
				<div className="card-body">
					<ul className="list-group list-group-horizontal"></ul>
				</div>
			</div>
		</>
	);
};

export default Card;
