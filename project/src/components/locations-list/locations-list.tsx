import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/offer-process/offer-process';
import { CITIES_NAME, LocationItemLinkPosition } from '../../const';
import LocationsItemLink from '../locations-item-link/locations-item-link';

type LocationsListProps = {
  currentLocation: string;
}

function LocationsList({ currentLocation }: LocationsListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {
        CITIES_NAME.map((locationItem) => (
          <li className="locations__item" key={ locationItem }>
            <LocationsItemLink
              position={ LocationItemLinkPosition.cities }
              locationsItemName={ locationItem }
              isActive={ currentLocation === locationItem }
              onClick={(locationItemName) => dispatch(changeCity(locationItemName))}
            />
          </li>
        ))
      }
    </ul>
  );
}

export default LocationsList;
