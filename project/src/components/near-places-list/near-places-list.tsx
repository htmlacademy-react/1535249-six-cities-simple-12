import PlaceCard from '../place-card/place-card';
import { PlaceCardLocation } from '../../const';
import { Offers } from '../../types/offer';

type NearPlacesListProps = {
  offers: Offers;
}

function NearPlacesList({offers}: NearPlacesListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        offers.map((offer) => (
          <PlaceCard
            offer={offer}
            location={PlaceCardLocation.nearPlaces}
            key={offer.id}
          />
        ))
      }
    </div>
  );
}

export default NearPlacesList;
