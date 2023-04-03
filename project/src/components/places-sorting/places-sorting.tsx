
import classNames from 'classnames';
import { useState } from 'react';
import { Offers } from '../../types/offer';
import { PlacesSortingTypes} from './compireFn';

type PlacesSortingProps = {
  offers: Offers;
  placesSortingType: string;
  setPlacesSortingType: (type: string) => void;
}


function PlacesSorting({offers, setPlacesSortingType, placesSortingType}: PlacesSortingProps): JSX.Element {
  const [isSortingOpened, setSortingOpened] = useState<boolean>(false);

  const placesOptionsClass = classNames('places__options places__options--custom', {
    'places__options--opened': isSortingOpened,
  });

  const sortingOpenHandler = () => setSortingOpened(!isSortingOpened);

  const setSortingTypeHandler = (type: string) => {
    setPlacesSortingType(type);
    setSortingOpened(!isSortingOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={sortingOpenHandler}>
        &nbsp;{placesSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={placesOptionsClass}>
        {
          PlacesSortingTypes.map((sortingType: string, index: number) => (
            <li
              key={sortingType}
              className="places__option"
              tabIndex={index}
              onClick={() => setSortingTypeHandler(sortingType)}
            >
              {sortingType}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default PlacesSorting;
