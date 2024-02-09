import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import { selectName } from '../../redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectName);

  return (
    <div className={css.user_wrap}>
      <p className={css.user_name}>Welcome, {userName}</p>
      <button
        className={css.btn}
        onClick={() => dispatch(logout())}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};
