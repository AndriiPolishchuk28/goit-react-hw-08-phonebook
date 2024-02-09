import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { Layout } from './Layout/Layout';
import { Contacts } from 'pages/Contacts/Contacts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrent } from '../redux/auth/operations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { selectFetchingCurrentUser } from '../redux/auth/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectFetchingCurrentUser);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCurrent());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/login', { replace: true });
    }
  }, []);

  return (
    !isFetchingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            exact
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    )
  );
};
