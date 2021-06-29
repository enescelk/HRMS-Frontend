import React from 'react'
import { Grid } from 'semantic-ui-react';
import { Route } from 'react-router';
import Citie from './Citie';
import WorkTime from './WorkTime';
import JobAdvertisementList from '../pages/JobAdvertisementList';


export default function Dasboard() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Citie></Citie>
                    <WorkTime></WorkTime>
                </Grid.Column>
                <Grid.Column width={12}>
                    <JobAdvertisementList></JobAdvertisementList>
                </Grid.Column>
            </Grid.Row>
        </Grid>

    )
}
