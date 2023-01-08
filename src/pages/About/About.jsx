import React from 'react';
import './About.css';
import aboutImg from '../../images/about-img.jpg';

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About ReadHamster</h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              dignissimos consequuntur vero commodi provident maiores, iusto
              atque corrupti voluptate vel sequi consectetur unde aliquam
              corporis saepe animi non, tempora reiciendis molestias sed
              laudantium dolores. Assumenda aperiam fuga quo voluptate commodi
              ullam aliquam expedita voluptas delectus.
            </p>
            <p className="fs-17">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              dicta, possimus inventore eveniet atque voluptatibus repellendus
              aspernatur illo aliquam dignissimos illum. Commodi, porro omnis
              dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// ==============================>
// import React, { useState } from 'react';

// function About() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [repeatPassword, setRepeatPassword] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();
//     // Save the form data for this particular state here
//   };

//   return (
//     <div className="form">
//       <form className="formContent" onSubmit={handleSubmit}>
//         <label className="fromField" htmlFor="name">
//           Name:
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={event => setName(event.target.value)}
//             maxLength={30}
//             minLength={3}
//             required
//           />
//         </label>
//         <br />
//         <label className="fromField" htmlFor="email">
//           Email:
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={event => setEmail(event.target.value)}
//             required
//           />
//         </label>
//         <br />
//         <label className="fromField" htmlFor="password">
//           Password:
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={event => setPassword(event.target.value)}
//             pattern="[^A-Za-z0-9]{1,}"
//             minLength={10}
//             required
//           />
//         </label>
//         <br />
//         <label className="fromField" htmlFor="repeatPassword">
//           Repeat your password:
//           <input
//             type="password"
//             id="repeatPassword"
//             value={repeatPassword}
//             onChange={event => setRepeatPassword(event.target.value)}
//             required
//             minLength={10}
//             pattern="[^A-Za-z0-9]{1,}"
//           />
//         </label>
//         <br />
//         <button
//           className="formContent form-btn"
//           type="submit"
//           disabled={password !== repeatPassword}
//         >
//           Sign up
//         </button>
//       </form>
//     </div>
//   );
// }
// export default About;
// ===================================>
// import React from 'react';
// import { Formik, Form } from 'formik';
// import { TextField } from './TextField';
// import * as Yup from 'yup';

// function About() {
//   const validate = Yup.object({
//     firstName: Yup.string()
//       .min(3, 'Must be 15 characters or less')
//       .max(15, 'Must be 15 characters or less')
//       .required('Required'),
//     lastName: Yup.string()
//       .max(20, 'Must be 20 characters or less')
//       .required('Required'),
//     email: Yup.string().email('Email is invalid').required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 charaters')
//       .required('Password is required'),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), null], 'Password must match')
//       .required('Confirm password is required'),
//   });

//   return (
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//       }}
//       validationSchema={validate}
//       onSubmit={values => {
//         console.log(values);
//       }}
//     >
//       {formik => (
//         <div>
//           <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
//           <Form>
//             <TextField label="First Name" name="firstName" type="text" />
//             <TextField label="last Name" name="lastName" type="text" />
//             <TextField label="Email" name="email" type="email" />
//             <TextField label="password" name="password" type="password" />
//             <TextField
//               label="Confirm Password"
//               name="confirmPassword"
//               type="password"
//             />
//             <button className="btn btn-dark mt-3" type="submit">
//               Register
//             </button>
//             <button className="btn btn-danger mt-3 ml-3" type="reset">
//               Reset
//             </button>
//           </Form>
//         </div>
//       )}
//     </Formik>
//   );
// }
// export default About;
