const Wrapper = ({ children }) => {
	return (
		<main className="wrapper container-fluid d-flex flex-wrap justify-content-center align-content-center vh-100">
			{children}
		</main>
	);
};

export default Wrapper;
