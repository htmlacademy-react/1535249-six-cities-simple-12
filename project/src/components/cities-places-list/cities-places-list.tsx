import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { PlaceCardLocation } from '../../types/const';

type CitiesPlacesListProps = {
  offers: Offers;
  offerHoverHandler?: (id: number | undefined) => void;
}

function CitiesPlacesList({offers, offerHoverHandler}: CitiesPlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            location={PlaceCardLocation.cities}
            key={offer.id}
            onMouseEnter={offerHoverHandler}
          />
        ))
      }
    </div>
  );
}

export default CitiesPlacesList;
