import React from 'react';
import './StationList.css';

const StationList = props => {

const result = props.stations.map(place => (
<li className="list"
key = {place.id}
>
<h4>Stacja {place.username} </h4>
<p>Numer stacji: {place.id} </p>
<p>Stacja usytuowana w <strong>{place.address.city}</strong></p>
<p>Kontakt: {place.email}</p>
</li>
));

    return result;
}

export default StationList;