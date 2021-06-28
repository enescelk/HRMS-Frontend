import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Grid, Container, List, Header, Divider, ListIcon } from 'semantic-ui-react'

export default function Footer() {
    return (
        <Segment inverted vertical style={{ margin: '5em 0em 30vh 0em', padding: '5em 0em' }}>
            <Container textAlign='center'>
                <Grid divided inverted stackable>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Sosyal Medya' />
                        <List link inverted>
                            <List.Item as='a'><ListIcon name="instagram"></ListIcon> Instagram</List.Item>
                            <List.Item as='a'><ListIcon name="twitter"></ListIcon> Twitter</List.Item>
                            <List.Item as='a'><ListIcon name="linkedin"></ListIcon> Linkedin</List.Item>
                            <List.Item as='a'><ListIcon name="github"></ListIcon> Github</List.Item><br />
                            <a href="https://www.kodlama.io/" target="_blank"><List.Item as='a'>Kodlama.io</List.Item></a>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 2' />
                        <List link inverted>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as='h4' content='Group 3' />
                        <List link inverted>
                            <List.Item as='a'>Link One</List.Item>
                            <List.Item as='a'>Link Two</List.Item>
                            <List.Item as='a'>Link Three</List.Item>
                            <List.Item as='a'>Link Four</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header inverted as='h4' content='Insan Kaynaklari Yonetimi' />
                        <p>
                            Bu site <strong>Enes Celik</strong> tarafindan yazilmistir tum kodlari public sourcedur.
                        </p>
                    </Grid.Column>
                </Grid>

                <Divider inverted section />
                <List horizontal inverted divided link size='small'>
                    <List.Item as='a' href='#'>
                        Site Map
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Contact Us
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Terms and Conditions
                    </List.Item>
                    <List.Item as='a' href='#'>
                        Privacy Policy
                    </List.Item>
                </List>
            </Container>
        </Segment>
    )
}