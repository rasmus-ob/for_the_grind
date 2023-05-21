import { useState } from 'react';
import '../css/page.css';

function Signup() {
	const dataTemplate = {
		username: '',
		email: '',
		password: '',
		passwordRepeat: '',
	};

	const [data, setData] = useState(dataTemplate);

	const updateData = (inputEvent) => {
		const inputValue = inputEvent.target.value;
		const key = inputEvent.target.id;

		setData((prev) => ({ ...prev, [key]: inputValue }));
	};

	const submitHandler = (e) => {
		e.preventDefault();
		// write to database
	};

	return (
		<>
			<h1 className='page-title'>Signup</h1>
			<form className='form' onSubmit={(e) => submitHandler(e)}>
				<input
					type='text'
					placeholder='Username'
					className='form-input'
					id='username'
					onChange={(e) => updateData(e)}
					value={data.username}
				/>
				<input
					type='email'
					placeholder='Email'
					className='form-input'
					id='email'
					onChange={(e) => updateData(e)}
					value={data.email}
				/>
				<input
					type='password'
					placeholder='Password'
					className='form-input'
					id='password'
					onChange={(e) => updateData(e)}
					value={data.password}
				/>
				<input
					type='password'
					placeholder='Repeat Password'
					className='form-input'
					id='passwordRepeat'
					onChange={(e) => updateData(e)}
					value={data.passwordRepeat}
				/>
				<input type='submit' value='Submit' className='form-btn' />
			</form>
		</>
	);
}

export default Signup;
