import { useSelector } from 'react-redux';
// import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import Container from '../Container';
import { isUserLogin } from '../../redux/selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(isUserLogin);

  return (
    <Container>
      <header style={styles.header}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      {/* <Outlet /> */}
    </Container>
  );
}
