import { Link } from 'react-router-dom';

type LocationsItemProps = {
  locationsItemName: string;
  isActive: boolean;
  onClick: (location: string) => void;
}

function LocationsItem({locationsItemName, isActive, onClick}: LocationsItemProps): JSX.Element {
  const onLocationItemClickHandler = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClick(locationsItemName);
  };

  return (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        to="/"
        onClick={onLocationItemClickHandler}
      >
        <span>{locationsItemName}</span>
      </Link>
    </li>
  );
}

export default LocationsItem;
