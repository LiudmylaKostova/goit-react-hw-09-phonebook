import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import MyButton from '../components/MyButton/MyButton';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className="div">
      <h1 className="title">Phonebook</h1>

      <form onSubmit={handleSubmit} className="form" autoComplete="off">
        <label className="label">
          E-mail
          <input
            className="input"
            type="email"
            name="email"
            value={email}
            placeholder="e-mail:"
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Password
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            placeholder="password:"
            onChange={handleChange}
          />
        </label>
        <MyButton
          className="button"
          disabled={email === '' || password === '' ? true : false}
          value="Login"
          onClick={() => {}}
        />
      </form>
    </div>
  );
}

// import { Component } from 'react';
// import { connect } from 'react-redux';
// import { logIn } from '../redux/auth/authOperations';
// import MyButton from '../components/MyButton/MyButton';

// class LoginView extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.setState({ name: '', email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <div className="div">
//         <h1 className="title">Phonebook</h1>

//         <form onSubmit={this.handleSubmit} className="form" autoComplete="off">
//           <label className="label">
//             E-mail
//             <input
//               className="input"
//               type="email"
//               name="email"
//               value={email}
//               placeholder="e-mail:"
//               onChange={this.handleChange}
//             />
//           </label>

//           <label className="label">
//             Password
//             <input
//               className="input"
//               type="password"
//               name="password"
//               value={password}
//               placeholder="password:"
//               onChange={this.handleChange}
//             />
//           </label>
//           <MyButton
//             style="button"
//             disable={email === '' || password === '' ? true : false}
//             value="Login"
//             handleClick={() => {}}
//           />
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = {
//   onLogin: logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
