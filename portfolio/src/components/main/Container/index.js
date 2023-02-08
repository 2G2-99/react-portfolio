const Container = ({ type, styles, children }) => {
	return (
		<>
			<div className={{ type }} style={styles}>
				{children}
			</div>
		</>
	);
};

export default Container;
