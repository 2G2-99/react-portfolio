const Column = ({ size, children }) => {
	const totalSize = size
		.split('')
		.map(size => 'col' + size)
		.join(' ');

	console.log(totalSize);

	return <div className={totalSize}>{children}</div>;
};

export default Column;
