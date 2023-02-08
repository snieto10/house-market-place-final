import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { db, auth } from '../firebase.config';

function CreateAccount() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='loginBox createAccount'>
      <h3 className='loginBox_title'>Create Account</h3>
      <form onSubmit={onSubmit}>
        <p className='loginBox_text'>Name</p>
        <div className='loginBox_inputBox'>
          <input
            type='text'
            className='loginBox_input'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <p className='loginBox_text'>Email</p>
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
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
