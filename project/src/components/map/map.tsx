import { useRef, useEffect, useState } from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import classNames from 'classnames';
import useMap from '../../hooks/useMap';
import { City, Offers, Offer } from '../../types/offer';
import { MapPosition, UrlMarker } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: Offer | undefined;
  mapLocation: MapPosition;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.Current,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({ city, offers, selectedOffer, mapLocation }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const mapClass = classNames('map', {
    'cities__map': mapLocation === MapPosition.Cities,
    'property__map': mapLocation === MapPosition.Property,
  });

  const [markerLayers, ] = useState<LayerGroup>(new LayerGroup());

  useEffect(
    () => {
      if (map) {
        map.flyTo(
          {
            lat: city.location.latitude,
            lng: city.location.longitude,
          },
          city.location.zoom
        );
      }
    }, [map, city]);

  useEffect(() => {
    if (map) {
      markerLayers.clearLayers();

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && selectedOffer.id === offer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayers);
      });
      markerLayers.addTo(map);
    }
  }, [map, offers, selectedOffer, markerLayers]);

  return (
    <section
      style={{ width:'100%' }}
      ref={ mapRef }
      className={ mapClass }
    >
    </section>
  );
}

export default Map;
