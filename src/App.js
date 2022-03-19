import React, { useRef, useState } from 'react';
import { YaMaps } from './components/YaMaps';
import states from './state.json';

const App = () => {
  const map = useRef();

  const [lat, setLat] = useState(states.pickPoints[0].latitude)
  const [lng, setLng] = useState(states.pickPoints[0].longitude)
  
  const getCoords = (lat, lng) => {
    const moving = new Promise(resolve => {
      resolve(map.current.panTo([lat, lng], {duration: 1500}));
    })
    moving.then(() => {
      setLat(lat)
      setLng(lng)
    })
  }

  const street = states.pickPoints.map((state, idx) => {
    return(
      <li 
        key={idx} 
        onClick={() => getCoords(state.latitude, state.longitude)}
        className="state__item"
      >      
        <h3 className="state__address" >{state.address}</h3>
        {state.budgets.map((button, idx) => <button className="state__button" key={idx}>{button}</button>)}
      </li>
    )
  })

  return (
    <div className="state__wrapper">
      <ul className="state__list">
        {street}
      </ul>
      
      <YaMaps
        lat={lat}
        lng={lng}
        map={map}
      />      
    </div>
  );
}

export default App;
