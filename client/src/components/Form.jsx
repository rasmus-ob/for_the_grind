import '../css/form.css';

function Form() {
	return (
		<form className='form'>
			<input type='text' placeholder='Username' className='form-input' />
			<input type='email' placeholder='Email' className='form-input' />
			<input type='password' placeholder='Password' className='form-input' />
			<input
				type='password'
				placeholder='Repeat Password'
				className='form-input'
			/>
			<input type='submit' value='Submit' className='form-btn' />
		</form>
	);
}

export default Form;
