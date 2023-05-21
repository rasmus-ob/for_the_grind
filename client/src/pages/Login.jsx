import '../css/page.css';
import '../css/form.css';

function Login() {
	return (
		<>
			<h1 className='page-title'>Login</h1>
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
		</>
	);
}

export default Login;
