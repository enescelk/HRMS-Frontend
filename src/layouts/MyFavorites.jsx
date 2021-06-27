import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeToFavorite } from '../store/actions/favoriteActions'
import { Dropdown,Button } from 'semantic-ui-react'

export default function MyFavorites() {

    const dispatch = useDispatch()

    const { favoriteItems } = useSelector(state => state.favorite)

    const handleRemoveToFavorite = (favoriteItem) => {
        dispatch(removeToFavorite(favoriteItem))
    }

    console.log("ADKJAGJWDGKJHWAGG");

    return (
        <div>
            <Dropdown item text='Favorileriniz'>
                <Dropdown.Menu>
                    {
                        favoriteItems.map((favoriteItem) => (
                            <Dropdown.Item key={favoriteItem.jobAdvertisement?.id}>
                                <Button onClick={() => handleRemoveToFavorite(favoriteItem)} primary>Sil</Button>
                            </Dropdown.Item>
                        ))
                    }

                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/home">Sepete git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
