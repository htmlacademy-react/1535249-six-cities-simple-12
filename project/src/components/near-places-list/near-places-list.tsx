import PlaceCard from '../place-card/place-card';
import { NEARBY_LIST_PLACE_CARD_COUNT, PlaceCardPosition } from '../../const';
import { Offers } from '../../types/offer';

type NearPlacesListProps = {
  offers: Offers;
}

function NearPlacesList({ offers }: NearPlacesListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {
        offers.slice(0, NEARBY_LIST_PLACE_CARD_COUNT).map((offer) => (
          <PlaceCard
            offer={ offer }
            location={ PlaceCardPosition.NearPlaces }
            key={ offer.id }
          />
        ))
      }
    </div>
  );
}

export default NearPlacesList;
