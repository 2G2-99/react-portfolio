function Container({ styles, children }) {
	return (
		<>
			<div className="container" style={styles}>
				{children}
			</div>
		</>
	);
}

export default Container;
