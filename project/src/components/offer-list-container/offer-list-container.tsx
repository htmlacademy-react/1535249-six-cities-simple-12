import { useState } from 'react';
import CitiesPlacesList from '../cities-places-list/cities-places-list';
import Map from '../map/map';
import { City, Offers, Offer } from '../../types/offer';
//import { ZERO_ID} from '../../const';

type OfferListContainerProps = {
  city: City;
  offers: Offers;
}

function OfferListContainer({city, offers}: OfferListContainerProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<Offer | undefined>(undefined);

  const onPlaceCardHover = (offerId: number | null) => {
    const currentOffer = offers.find((offer) => offer.id === offerId);

    setActiveOffer(currentOffer);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
            Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <CitiesPlacesList offers={offers} onPlaceCardHover={onPlaceCardHover}/>
      </section>
      <div className="cities__right-section">
        <Map city={city} offers={offers} selectedOffer={activeOffer}/>
      </div>
    </div>
  );
}

export default OfferListContainer;
