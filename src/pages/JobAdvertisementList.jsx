import React, { useState, useEffect } from 'react'
import JobAdvertisementService from '../services/JobAdvertisementService';
import { Button, Card, Icon } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addToFavorite } from '../store/actions/favoriteActions';
import { toast } from 'react-toastify';

export default function JobAdvertisementList() {

    const dispatch = useDispatch()

    const handleAddToFavorite = (jobAdvertisement) => {
        dispatch(addToFavorite(jobAdvertisement))
        toast.success('Ilan Favorilere eklendi')
    }

    const [jobAdvertisements, setjobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getAllJobAdvertisement().then((result) => setjobAdvertisements(result.data.data));
    }, [])

    return (
        <div>
            <Card.Group>
                {
                    jobAdvertisements.map(jobAdvertisement => (


                        <Card fluid key={jobAdvertisement.id}>
                            <Card.Content>
                                <Card.Header>{jobAdvertisement.employer.companyName}</Card.Header>
                                <Card.Meta>{jobAdvertisement.jobPositions.positionName}</Card.Meta>
                                <Card.Meta>{jobAdvertisement.city.cityName}</Card.Meta>
                                <Card.Meta>{jobAdvertisement.maxSalary} - {jobAdvertisement.minSalary}</Card.Meta>
                                <Card.Description>{jobAdvertisement.jobDescription}</Card.Description>
                                <button onClick={() => handleAddToFavorite(jobAdvertisement)} class="ui circular red icon button" style={{ float: 'right' }}>
                                    <Icon name="heart"></Icon>
                                </button>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        <Icon name="info"></Icon>  Detay
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>


                    ))
                }
            </Card.Group>
        </div >
    )
}
