import { Container, Row, Hero } from '../components/export';

const Home = () => {
	return (
		<>
			<Container type={'container justify-content-center '}>
				<Hero />
			</Container>
			<span className="attribution">
				Background by:{' '}
				<a
					id="attribution-link"
					href="https://svgbackgrounds.com"
					target={'_blank'}
					rel="noreferrer noopener"
				>
					SVGBackgrounds.com
				</a>
			</span>
		</>
	);
};

export default Home;
