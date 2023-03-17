import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { PlaceCardLocation } from '../../const';

type CitiesPlacesListProps = {
  offers: Offers;
  setActiveOffer: (id: number | null) => void;
}

function CitiesPlacesList({offers, setActiveOffer}: CitiesPlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            location={PlaceCardLocation.cities}
            key={offer.id}
            onMouseEnter={() => setActiveOffer(offer.id)}
            onMouseLeave={() => setActiveOffer(null)}
          />
        ))
      }
    </div>
  );
}

export default CitiesPlacesList;
