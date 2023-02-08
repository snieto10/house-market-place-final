import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit');
  };

  return (
    <div className='loginBox'>
      <h3 className='loginBox_title'>Log In</h3>
      <p className='loginBox_text'>Email</p>
      <form onSubmit={onSubmit}>
        <div className='loginBox_inputBox'>
          <input
            type='text'
            className='loginBox_input'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <p className='loginBox_text'>Password</p>
        <div className='loginBox_inputBox'>
          <input
            type='text'
            className='loginBox_input'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='center'>
          <button
            type='submit'
            className='btn btn-orange'
            onClick={(e) => onSubmit(e)}
          >
            Log In
          </button>
        </div>
      </form>
      <p className='login_footer'>
        <Link to='/create-account'>Create Account</Link>{' '}
      </p>

      <p className='login_footer'>Log In with Google</p>
      <p className='login_footer'>Forgot Password</p>
    </div>
  );
}

export default LogIn;
