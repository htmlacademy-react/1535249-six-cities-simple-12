import { useAppSelector } from '../../hooks';
import Logo from '../../components/logo/logo';
import { AuthorizationStatus } from '../../const';
import { NavProfileAuth, NavProfileNoAuth } from '../../components/authorization/authorization';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const user = useAppSelector((state) => state.userData);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                (authorizationStatus === AuthorizationStatus.Auth && user)
                  ?
                  <NavProfileAuth user={user} />
                  :
                  <NavProfileNoAuth />
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
