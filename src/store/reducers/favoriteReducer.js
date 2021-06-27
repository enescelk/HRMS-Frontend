import React from 'react'
import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE } from '../actions/favoriteActions';
import { favoriteItems } from "../initialValues/favoriteItems";

const initialState ={
    favoriteItems: favoriteItems
}

export default function favoriteReducer(state=initialState,{type,payload}) {
    switch (type) {
        case ADD_TO_FAVORITE:
            let favoriteItem = state.favoriteItems.find(f=>f.jobAdvertisement?.id===payload.id)
            if(favoriteItem){
                return{
                    ...state    
                    
                }
            }else{
                return{
                    ...state,
                    favoriteItems:[...state.favoriteItems,{favoriteItem:payload}]
                }
            }
            
        case REMOVE_TO_FAVORITE:
            return{
                ...state,
                favoriteItems: state.favoriteItems.filter(f=>f.jobAdvertisement?.id!==payload.id)
            }
    
        default:
            return state;
    }
}
