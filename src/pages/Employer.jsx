import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import EmployerService from '../services/EmployerService';

export default function Employer() {

    const [employer, setEmployers] = useState([])

    useEffect(()=>{
        let employerService = new EmployerService();
        employerService.getEmployer().then(result=>setEmployers(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Sirket Adi</Table.HeaderCell>
                        <Table.HeaderCell>Sehir</Table.HeaderCell>
                        <Table.HeaderCell>Son Tarih</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employer.map(employer => {
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.jobAdvertisements.city.cityName}</Table.Cell>
                                <Table.Cell>{employer.jobAdvertisements.applicationDeadline}</Table.Cell>
                                <Table.Cell>{employer.jobAdvertisements.positionName}</Table.Cell>
                            </Table.Row>
                        })
                    }


                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
