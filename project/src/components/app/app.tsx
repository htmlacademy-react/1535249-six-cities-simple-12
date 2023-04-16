import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute } from '../../const';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


function App(): JSX.Element {
  const cityName = useAppSelector((state) => state.cityName); //current city
  const offers = useAppSelector((state) => state.offers); // all offers
  const isOffersCompleting = useAppSelector((state) => state.isOffersCompleting);

  if (isOffersCompleting) {
    return (
      <LoadingScreen />
    );
  }

  const offersOfCity = offers.filter((offer) => offer.city.name === cityName);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                currentCity={cityName}
                offers={offersOfCity}
              />
            }
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
            element={
              <OfferPage/>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
