import { useState } from 'react';

const Form = () => {
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const handleEmail = e => {
		setEmail(e.target.value);
	};

	const handleSubject = e => {
		setSubject(e.target.value);
	};

	const handleMessage = e => {
		setMessage(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<>
			<form>
				<div className="form-group">
					<label htmlFor="user-email">Email</label>
					<input
						type={'email'}
						className="form-control"
						id="user-email"
						placeholder="random@email.com"
						value={email}
						onChange={handleEmail}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message-subject">Subject</label>
					<input
						type={'text'}
						className="form-control"
						id="message-subject"
						value={subject}
						onChange={handleSubject}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="message-body">Text Area</label>
					<textarea
						className="form-control"
						id="message-body"
						placeholder="Write your message here... "
						value={message}
						onChange={handleMessage}
					></textarea>
				</div>
				{/*  */}
				<button
					className="submit-btn-pushable"
					type="submit"
					onClick={handleSubmit}
				>
					<span className="submit-btn-shadow"></span>
					<span className="submit-btn-edge"></span>
					<span className="submit-btn-front text">Submit</span>
				</button>
			</form>
		</>
	);
};

export default Form;
