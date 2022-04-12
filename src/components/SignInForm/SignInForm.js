import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase';
import {useContext, useState} from 'react';
import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';
import {UserContext} from '../../context/UserContext';
import './SignInForm.styles.scss'
import {reqLogin} from '../../api';


const SignInForm = () => {
  const [formFields, setFormFields] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formFields

  const {setCurrentUser} = useContext(UserContext)

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    let response = await createUserDocumentFromAuth(user)
    setCurrentUser(user)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      // const { user } = await signInAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );

      const {status, data} = await reqLogin( email,password)
      if(status === 0){
        const {user, token} = data
        localStorage.setItem('token', JSON.stringify(token))
        setCurrentUser(user)
      }
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const resetFormFields = () => {
    setFormFields({email: '', password: ''});
  }

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
