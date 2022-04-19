import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import './SignUpForm.styles.scss'
import Button from '../Button/Button';
import {UserContext} from '../../context/UserContext';
import {reqLogin, reqRegister} from '../../api';

const SignUpForm = () => {

  const navigate = useNavigate()
  const [formFields, setFormFields] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { displayName, email, password, confirmPassword } = formFields

  const {setCurrentUser} = useContext(UserContext)

  const handleSubmit = async (event)=> {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return
    }
    const { status, msg } = await reqRegister({email, password, displayName})
    if(status === 0) {
      const {status, data} = await reqLogin( email,password)
      if(status === 0){
        const {user, token} = data
        localStorage.setItem('token', JSON.stringify(token))
        setCurrentUser(user)
        navigate(-1)
      }
    }else{
      alert(msg)
    }
    resetFormFields()
  }
  const handleChange= (event)=> {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }
  const resetFormFields = () => {
    setFormFields({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
