import { useDispatch } from 'react-redux';
import { setToken, isLogin } from '../../redux/actions';
import { useCurrentQuery, useLogoutMutation } from '../../redux/authApi';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    fontSize: 20,
  },
  user: {
    color: '#ffffff',
    fontSize: 20,
  },
};

export default function UserMenu() {
  const [logoutUser] = useLogoutMutation();
  const dispatch = useDispatch();

  const { data } = useCurrentQuery();

  function dataHandler() {
    dispatch(setToken(''));
    dispatch(isLogin(false));
  }

  function handleLogout() {
    logoutUser()
      .then(dataHandler)
      .catch(e => console.log(e));
  }

  return (
    <div style={styles.container}>
      <span style={styles.name}>
        Welcome, <span style={styles.user}>{data?.name}</span>
      </span>
      <button type="button" onClick={handleLogout}>
        LogOut
      </button>
    </div>
  );
}
