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

	return (
		<>
			<form>
				<div className="form-group">
					<label for="user-email">email</label>
					<input
						type={'email'}
						className="form-control"
						id="user-email"
						placeholder="random@email.com"
						value={email}
						onChange={handleEmail}
					/>
					<label for="message-subject">subject</label>
					<input
						type={'text'}
						className="form-control"
						id="message-subject"
						placeholder=""
						value={subject}
						onChange={handleSubject}
					/>
					<label for="message-body">text area</label>
					<textarea
						className="form-control"
						id="message-body"
						placeholder="Write your message here... "
						value={message}
						onChange={handleMessage}
					></textarea>
				</div>
			</form>
		</>
	);
};
