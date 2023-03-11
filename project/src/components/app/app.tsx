import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import { AppRoute } from '../../types/const';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage offersCount={offersCount} />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
          <Route
            path={AppRoute.Property}
            element={<OfferPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
