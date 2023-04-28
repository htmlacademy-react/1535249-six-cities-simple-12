import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { AppRoute, LocationItemLinkPosition } from '../../const';

type LocationsItemLinkProps = {
  position: LocationItemLinkPosition;
  locationsItemName: string;
  isActive?: boolean;
  onClick: (location: string) => void;
}

function LocationsItemLink ({
  position,
  locationsItemName,
  isActive,
  onClick,
}: LocationsItemLinkProps): JSX.Element {

  const locationItemLinkClass = classNames('locations__item-link', {
    'tabs__item': position === LocationItemLinkPosition.Cities,
    'tabs__item--active': isActive === true,
  });

  const onLocationItemClickHandler = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onClick(locationsItemName);
  };

  return (
    <Link
      className={locationItemLinkClass}
      to={AppRoute.Main}
      onClick={onLocationItemClickHandler}
    >
      <span>{ locationsItemName }</span>
    </Link>
  );
}

export default LocationsItemLink;
