import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';

export default function Map(){
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(14);
  const [API_KEY] = useState(process.env.REACT_APP_API_KEY);

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom
    });
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
  });

  return (
    <div className="map-wrap">
      <a href="https://www.maptiler.com" className="watermark"><img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" /></a>
      <div ref={mapContainer} className="map" />
    </div>
  );
}