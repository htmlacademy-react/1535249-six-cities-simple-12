//import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { Offers } from '../../types/offer';
import { PlaceCardLocation } from '../../const';

type CitiesPlacesListProps = {
  offers: Offers;
  onPlaceCardHover: (id: number | null) => void;
}

function CitiesPlacesList({offers, onPlaceCardHover}: CitiesPlacesListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
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
  );
}

export default CitiesPlacesList;
