import React, { useState, useEffect} from 'react'
import { Select } from 'semantic-ui-react';
import CitieService from '../services/CitieService'

export default function Citie() {

    const [citie, setCitie] = useState([])

    useEffect(() =>{
        let citieService = new CitieService();
        citieService.getAllCities().then(result=>setCitie(result.data.data));
    },[])

    const options = citie.map(data=>({key:data.id,value:data.cityName,text:data.cityName}));


    return (
        <div style={{marginTop:60}}>
            <Select placeholder="Select your country" options={options}/>
        </div>
    )
}

