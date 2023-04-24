import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import MainPageEmpty from '../main-page-empty/main-page-empty';
import OfferListContainer from '../../components/offer-list-container/offer-list-container';
import { Offers } from '../../types/offer';

type MainPageProps = {
  currentCity: string;
  offers: Offers;
}

function MainPage({ currentCity, offers, }: MainPageProps): JSX.Element {
  const mainPageClass = classNames('page__main page__main--index', {
    'page__main--index-empty': offers.length === 0,
  });

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>
          Шесть городов - сервис для путешественников, не желающих переплачивать за аренду жилья
        </title>
      </Helmet>
      <Header />

      <main className={ mainPageClass }>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList currentLocation={ currentCity }/>
          </section>
        </div>
        <div className="cities">
          {
            offers.length !== 0 ?
              <OfferListContainer offers={ offers } /> :
              <MainPageEmpty />
          }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
