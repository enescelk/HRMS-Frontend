import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Menu, Input, Container, Button } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()

    function handleSignOut(params) {
        setIsAuthenticated(false);
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted>
                <Container>
                    <Menu.Item as={NavLink} to="/home"
                        name='home'
                    />
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button inverted as={NavLink} to="/jobAdvertisement/add">Ilan ekle</Button>
                        </Menu.Item>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}

                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
