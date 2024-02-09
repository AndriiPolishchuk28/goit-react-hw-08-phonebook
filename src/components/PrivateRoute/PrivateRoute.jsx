import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggenIn } from '../../redux/auth/selectors';

export const PrivateRoute = ({ children, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};
