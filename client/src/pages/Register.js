import {useState, useEffect} from 'react'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialStates = {
  name: '',
  email: '',
  password: '',
  isMember: true
}

const Register = () => {
  const [values, setValues] = useState(initialStates)

  const handleChange = (e) => {
    console.log(e.target);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
  }


  return (
    <Wrapper className='full-page'>
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name input */}
        <div className="form-row">
          <label htmlFor="name" className='form-label'>
            name
          </label>
          <input
            type="text"
            value={values.name}
            onChange={handleChange}
            className="form-input"
          />
          <button type="submit" className="btn btn-block">
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Register