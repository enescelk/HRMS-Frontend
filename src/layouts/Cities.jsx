import React, { useState, useEffect} from 'react'
import { Select } from 'semantic-ui-react';
import CitiesService from '../services/CitiesService'

export default function Cities() {

    const [cities, setCities] = useState([])

    useEffect(() =>{
        let citiesService = new CitiesService();
        citiesService.getCities().then(result=>setCities(result.data.data));
    })

    const options = cities.map(data=>({key:data.id,value:data.cityName,text:data.cityName}));


    return (
        <div style={{marginTop:60}}>
            <Select placeholder="Select your country" options={options}/>
        </div>
    )
}

