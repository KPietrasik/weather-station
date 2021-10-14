import React from 'react';


const StationList = props => {

const result = props.stations.map(place => (
<li 
style={{
    listStyleType: "none"
}} 
key = {place.id}
>
<h4>Stacja {place.username}. Numer stacji: {place.id}.  Stacja usytuowana w {place.address.city}.  Kontakt: {place.email}</h4>
</li>
));

    return result;
}
 
export default StationList;