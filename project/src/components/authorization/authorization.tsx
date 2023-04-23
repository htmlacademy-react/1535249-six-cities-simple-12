import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../const';
import { UserData } from '../../types/user-data';

type NavProfileAuthProps = {user: UserData};

export const NavProfileAuth = ({ user }: NavProfileAuthProps) => {
  const dispatch = useAppDispatch();

  const signOutClickHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">{ user.email }</span>
        </div>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to="/"
          onClick={ signOutClickHandler }
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
};

export const NavProfileNoAuth = () => (
  <li className="header__nav-item user">
    <Link
      className="header__nav-link header__nav-link--profile"
      to={ AppRoute.Login }
    >
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign in</span>
    </Link>
  </li>
);
