import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { Menu, Input, Container, Button } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import MyFavorites from './MyFavorites';

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory()
    const favoriteItems = useSelector(state => state.favorite.favoriteItems)

    console.log(favoriteItems)

    function handleSignOut(params) {
        setIsAuthenticated(false);
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as={NavLink} to="/home" icon='chess rook'

                        name='Ana Sayfa'
                    />
                    <Menu.Item>
                        <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>

                    <Menu.Item>
                        <Button inverted as={NavLink} to="/jobAdvertisement/notifications">Bildirimler</Button>
                    </Menu.Item>   

                    <Menu.Item>
                        <Button inverted as={NavLink} to="/jobAdvertisement/add">İlan ekle</Button>
                    </Menu.Item>

                    <Menu.Item>
                        {favoriteItems.length>0&&<MyFavorites/>}
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} /> : <SignedOut signIn={handleSignIn} />}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
