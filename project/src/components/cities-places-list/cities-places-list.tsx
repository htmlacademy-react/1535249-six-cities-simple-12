import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { PlaceCardLocation } from '../../const';
import PlacesSorting from '../places-sorting/places-sorting';
import { sortingByType } from '../places-sorting/compireFn';


type CitiesPlacesListProps = {
  offers: Offers;
  onPlaceCardHover: (id: number | null) => void;
}

function CitiesPlacesList({offers, onPlaceCardHover}: CitiesPlacesListProps): JSX.Element {
  const [placesSortingType, setPlacesSortingType] = useState<string>('Popular');

  const sortedOffers = sortingByType(offers, placesSortingType);

  return (
    <>
      <PlacesSorting
        offers={offers}
        placesSortingType={placesSortingType}
        setPlacesSortingType={setPlacesSortingType}
      />
      <div className="cities__places-list places__list tabs__content">
        {
          sortedOffers.map((offer) => (
            <PlaceCard
              offer={offer}
              location={PlaceCardLocation.cities}
              key={offer.id}
              onMouseEnter={() => onPlaceCardHover(offer.id)}
              onMouseLeave={() => onPlaceCardHover(null)}
            />
          ))
        }
      </div>
    </>
  );
}

export default CitiesPlacesList;
