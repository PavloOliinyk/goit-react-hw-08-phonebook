import { useState } from 'react';
import { useLoginMutation } from '../redux/authApi';
import { useDispatch } from 'react-redux';
import { isLogin, setToken } from '../redux/actions';

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

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUser] = useLoginMutation();
  const dispatch = useDispatch();

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

  const dataHandler = ({ data }) => {
    dispatch(setToken(data.token));
    dispatch(isLogin(true));
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginUser({ email, password })
      .then(dataHandler)
      .catch(e => console.log(e));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 style={styles.title}>Login page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
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

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
