import { Helmet } from 'react-helmet-async';
import { useRef, FormEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthData } from '../../types/auth-data';
import Logo from '../../components/logo/logo';
import { loginAction } from '../../store/api-actions';
import {
  AppRoute,
  AuthorizationStatus,
  CITIES_NAME,
  LocationItemLinkPosition
} from '../../const';
import { changeCity } from '../../store/offer-process/offer-process';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import LocationsItemLink from '../../components/locations-item-link/locations-item-link';
import { redirectToRoute } from '../../store/action';

function LoginPage(): JSX.Element {
  const randomCityName = CITIES_NAME[Math.floor(Math.random() * CITIES_NAME.length)];

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main}/>;
  }

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const submitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (
      loginRef.current !== null &&
      (passwordRef.current !== null && isValidPassword(passwordRef.current.value))
    ) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const isValidPassword = (password: string) => {
    const pattern = new RegExp('^(?=.*[0-9])(?=[a-zA-Z0-9]*[a-zA-Z])[a-zA-Z0-9]{2,20}$');
    return pattern.test(password);
  };

  return (
    <div className="page page--gray page--login">

      <header className="header">
        <Helmet>
          <title>
            Шесть городов. Вход в сервис
          </title>
        </Helmet>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={submitHandle}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={ loginRef }
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={ passwordRef }
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <LocationsItemLink
                position={ LocationItemLinkPosition.Login }
                locationsItemName={ randomCityName }
                onClick={ (locationItemName) => {
                  dispatch(changeCity(locationItemName));
                  dispatch(redirectToRoute(AppRoute.Main));
                }}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
