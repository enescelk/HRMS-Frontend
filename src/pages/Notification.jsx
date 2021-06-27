import React from 'react'
import { Button, Card,CardGroup } from 'semantic-ui-react'
export default function Notification() {
    return (
        <div>
            <CardGroup style={{marginTop:50}}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>Company Name</Card.Header>
                        <Card.Meta>Position Name</Card.Meta>
                        <Card.Meta>City Name</Card.Meta>
                        <Card.Meta>Salary</Card.Meta>
                        <Card.Description>
                           Description
                        </Card.Description>
                    </Card.Content>
                    
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Onayla
                            </Button>
                            <Button basic color='red'>
                                Reddet
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </CardGroup>
        </div>
    )
}
