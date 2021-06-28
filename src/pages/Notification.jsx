import React, { useState, useEffect } from 'react'
import { Button, Card, CardGroup } from 'semantic-ui-react'
import JobAdvertisementService from '../services/JobAdvertisementService';

export default function Notification() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    const [activeId, setActiveId] = useState()

    let jobAdvertisementService = new JobAdvertisementService();

    useEffect(() => {
        jobAdvertisementService.getAllJobAdvertisement().then(result => setJobAdvertisements(result.data.data))
    }, [])


    const handleActive = (jobAdvertisementId) => {
        // jobAdvertisementService.getAllByIsActiveFalseJobAdvertisement().then((result => result.data.data));
        jobAdvertisementService.active(jobAdvertisementId).then(result => setActiveId())

    }
    return (
        <div>
            <CardGroup>
                <Card fluid>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Card.Content>
                                <Card.Header>{jobAdvertisement.employer.companyName}</Card.Header>
                                <Card.Meta>{jobAdvertisement.jobPositions.positionName}</Card.Meta>
                                <Card.Meta>{jobAdvertisement.city.cityName}</Card.Meta>
                                <Card.Meta>{jobAdvertisement.maxSalary} - {jobAdvertisement.minSalary}</Card.Meta>
                                <Card.Description>
                                    {jobAdvertisement.jobDescription}
                                </Card.Description>
                                <Card.Meta>
                                    {!jobAdvertisement.isActive && <button class="ui blue basic icon button" style={{ width: "100%" }} onClick={(e) => handleActive(jobAdvertisement.id)}>Active Et</button>}
                                    {jobAdvertisement.isActive && <button class="ui red basic icon button" style={{ width: "100%" }} >Pasif Yap</button>}
                                </Card.Meta>
                            </Card.Content>
                        ))
                    }
                </Card>
            </CardGroup>
        </div>
    )
}
