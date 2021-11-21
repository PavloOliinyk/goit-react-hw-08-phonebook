import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import * as authSelectors from '../redux/selectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/login',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.isUserLogin);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
