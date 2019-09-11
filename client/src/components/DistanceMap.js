import React, { useState, useEffect } from 'react'
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    // InfoWindow
} from 'react-google-maps'
import { useSelector } from 'react-redux'
import { getLocations } from '../actions/distance.actions';

// export default props => {
    function Map(){
    const locations = useSelector(appState => appState.orderformReducer.restaurants)
    console.log(locations)
    const [selectedLocation, setSelectedLocation] = useState(null)

    useEffect((e) => {
        getLocations()
       
    }, [])
    return (
        <div>
            <GoogleMap
                defaultZoom={2}
                defaultCenter={{lat: 36.158524, lng: -115.152390 }}
            >
                {locations.map(rest => (
                    <Marker
                    key={rest.id}
                    value={selectedLocation}
                    position={{
                        lat: rest.latitude,
                        lng: rest.longitude
                    }}
                    onClick={e => setSelectedLocation(e.target.value)}
                    />
                ))}
            </GoogleMap>
        </div>
    )
}
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "90vw", height: "60vh" }}>
      <MapWrapped
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB91dCuepFAE1XVaaUDbSvPRMLdAZcqjYo&callback=initMap"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

