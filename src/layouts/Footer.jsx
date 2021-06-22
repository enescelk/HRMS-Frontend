import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Grid, Container, List, Header,Icon } from 'semantic-ui-react'

export default function Footer() {
    return (
        <>
        <div>
            <Segment style={{ position: "static", bottom: 0, marginTop: "41.5em", width: "100%" }}
            >
                <Container>

                    <Grid divided stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header><Icon name="linkify"></Icon> Linkler</Header>
                                <hr />
                                <List link >
                                    <List.Item as={Link} to="/">Ana Sayfa</List.Item>

                                    <List.Item as={Link} to="/">Giris Yap</List.Item>

                                    <List.Item as={Link} to="/">Kayit Ol</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Header> <Icon name="pencil alternate"></Icon> Referanslar</Header>
                                <hr />
                                <List link >
                                    <List.Item as="a" href="https://www.kodlama.io">Kodlama.io</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <Header> <Icon name="user"></Icon> İnsan Kaynakları Yönetimi</Header>
                                <hr />
                                <List link >
                                    <List.Item>Bu internet sitesi <strong>Enes Çelik</strong> tarafindan yazılmıstır tüm hakları saklı değildir hatta hiç bir hakkı saklı degildir</List.Item>
                                    <List.Item><p> React & ve Java Kullanılarak yazılmıstır</p></List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        </div>
        </>
    )
}
