import { useState } from 'react';
import './form.css';
// import '../../../src/index.css';
import FormInput from './FormInput';
import Navbar2 from '../../components/Navbar2/Navbar2';

const Form = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "* Username should be 3-30 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,30}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: '* It should be a valid email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        '* Password should atleast be 10 characters long and include at least 1 special character!',
      label: 'Password',
      pattern: `^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,}$`,
      required: true,
    },
    // (?=.*[0-9])(?=.*[a-zA-Z])
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      errorMessage: "* Passwords don't match!",
      label: 'Confirm Password',
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div id="formArea">
      <Navbar2 />
      <div id="wrap">
        <h1 className="formHeading">Register</h1>
        <form id="form" onSubmit={handleSubmit}>
          {inputs.map(input => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button id="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
