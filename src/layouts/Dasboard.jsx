import React from 'react'
import { Grid } from 'semantic-ui-react';

import Cities from './Cities';
import Employer from '../pages/Employer';
export default function Dasboard() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <Cities></Cities>
                </Grid.Column>
                <Grid.Column width={12}>
                    <Employer></Employer>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
    )
}
