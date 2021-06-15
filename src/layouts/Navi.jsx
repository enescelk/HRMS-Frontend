import React from 'react'
import { Button, Menu, Input, Container } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu inverted>
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <Button primary>Sign in</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}
