import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://yt3.ggpht.com/yti/ANoDKi7GI6vUfZl2jymOuH2OvXZgBHeEy2yr1QpFG4ugTA=s108-c-k-c0x00ffffff-no-rj" />
                <Dropdown pointing="top left" text="Enes Celik">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item text="Cikis yap" icon="sign-out" onClick={signOut} />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}