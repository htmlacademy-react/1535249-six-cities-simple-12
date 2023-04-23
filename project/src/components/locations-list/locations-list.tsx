import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/offer-process/offer-process';
import { CITIES_NAME } from '../../const';
import LocationsItem from '../locations-item/locations-item';

type LocationsListProps = {
  currentLocation: string;
}

function LocationsList({currentLocation}: LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES_NAME.map((locationItem) => (
          <LocationsItem
            key={locationItem}
            locationsItemName={locationItem}
            isActive={currentLocation === locationItem}
            onClick={(locationItemName) => dispatch(changeCity(locationItemName))}
          />
        ))
      }
    </ul>
  );
}

export default LocationsList;
