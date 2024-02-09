import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggenIn } from '../../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  return (
    <>
      {!isLoggedIn ? (
        <div className={css.nav_wrap}>
          <NavLink
            className={({ isActive }) =>
              `${css.nav_link} ${isActive ? css.active : ''}`
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${css.nav_link} ${isActive ? css.active : ''}`
            }
            to="/register"
          >
            Register
          </NavLink>
        </div>
      ) : (
        <NavLink
          className={({ isActive }) =>
            `${css.nav_link} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </>
  );
};
