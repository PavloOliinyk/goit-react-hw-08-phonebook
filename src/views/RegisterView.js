import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { isLogin, setToken } from '../redux/actions';
//fetch servises
import { useSignupMutation } from '../redux/authApi';

const styles = {
  form: {
    margin: 'auto',
    width: 320,
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupUser] = useSignupMutation();
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const dataHandle = ({ data }) => {
    console.log(data);
    dispatch(setToken(data.token));
    dispatch(isLogin(true));
  };

  const handleSubmit = e => {
    e.preventDefault();
    signupUser({ name, email, password })
      .then(dataHandle)
      .catch(error => console.log(error));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 style={styles.title}>Sign up page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
