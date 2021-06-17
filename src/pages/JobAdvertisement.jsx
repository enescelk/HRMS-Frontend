import React, { useState, useEffect } from 'react'
import { Card, Button } from 'semantic-ui-react'
import JobAdvertisementService from '../services/JobAdvertisementService';

export default function JobAdvertisement() {

    const [jobAdvertisement, setJobAdvertisement] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getAllJobAdvertisement().then(result => setJobAdvertisement(result.data.data));

    }, [])

    return (

        <div>
            <Card.Group>
                <Card fluid>
                    {
                        jobAdvertisement.map(jobAdvertisement => (
                            <Card.Content key={jobAdvertisement.id}>
                                <Card.Header floated='left'>{jobAdvertisement.employer.companyName}</Card.Header>
                                <Card.Meta>{jobAdvertisement.jobPositions.positionName}</Card.Meta>
                                <Card.Meta>{jobAdvertisement.city.cityName}</Card.Meta>
                                <Card.Description>
                                {jobAdvertisement.jobDescription}
                                </Card.Description>
                            </Card.Content>

                        ))
                    }
                    

                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                View
                            </Button>
                        </div>
                    </Card.Content>

                </Card>
            </Card.Group>
        </div >
    )
}