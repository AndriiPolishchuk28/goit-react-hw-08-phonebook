import { useSelector } from 'react-redux';
import { selectIsLoggenIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
