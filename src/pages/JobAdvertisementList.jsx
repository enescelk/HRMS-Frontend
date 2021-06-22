import React, { useState, useEffect } from 'react'
import JobAdvertisementService from '../services/JobAdvertisementService';
import { Button, Card } from 'semantic-ui-react'

export default function JobAdvertisementList() {

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
                                <Button color='red'  floated="right">Sil </Button>
                            </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button basic color='green'>
                                        Detay
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
