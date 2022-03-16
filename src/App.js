import { YaMaps } from './YaMaps';
import states from './state.json';
import { useState } from 'react';

function App() {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  
  const getCoords = (lat, lng) => {
    setLat(lat)
    setLng(lng)
  }
  const street = states.pickPoints.map((state, idx) => {
    return(
      <li 
        key={idx} 
        onClick={() => getCoords(state.latitude, state.longitude)}
        className="state__item"
      >      
        <h3 className="state__address" >{state.address}</h3>
        {state.budgets.map((button, idx) => {
          return(<button className="state__button" key={idx}>{button}</button>)
        })}
      </li>
    )})

  return (
    <div className="wrapper">
      <ul className="state__list">
        {street}
      </ul>
      
      <YaMaps 
        lat={lat}
        lng={lng}
      />
      
    </div>
  );
}

export default App;
