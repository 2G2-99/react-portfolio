import { Container, Hero } from '../components/export';

const Home = () => {
	return (
		<>
			<Container
				type={
					'container-fluid d-flex justify-content-center align-items-center'
				}
			>
				<Hero />
			</Container>
		</>
	);
};

export default Home;
