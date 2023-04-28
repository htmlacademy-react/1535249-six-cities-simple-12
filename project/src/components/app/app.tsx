import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import {
  getCityName,
  getOffers,
  getOffersDataCompletingStatus
} from '../../store/offer-process/selectors';

function App(): JSX.Element {
  const cityName = useAppSelector(getCityName);
  const offers = useAppSelector(getOffers);
  const isOffersCompleting = useAppSelector(getOffersDataCompletingStatus);

  if (isOffersCompleting) {
    return (
      <LoadingScreen />
    );
  }

  const offersOfCity = offers.filter((offer) => offer.city.name === cityName);

  return (
    <HelmetProvider>
      <HistoryRouter history={ browserHistory }>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <MainPage
                currentCity={ cityName }
                offers={ offersOfCity }
              />
            }
          />
          <Route
            path={ AppRoute.Login }
            element={ <LoginPage /> }
          />
          <Route
            path={AppRoute.NotFound}
            element={ <NotFoundPage /> }
          />
          <Route
            path={ AppRoute.Property }
            element={
              <OfferPage/>
            }
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
