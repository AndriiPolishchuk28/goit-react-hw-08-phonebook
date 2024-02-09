import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './AppBar.module.css';
import { selectIsLoggenIn } from '../../redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  return (
    <nav className={css.navbar}>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </nav>
  );
};
