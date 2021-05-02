import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCharacters, getSingleCharacter } from '../Network/services/characters'
import {saveCharacters} from '../Redux/actions/characterAction'

const Home = () => {
    const [state, setstate] = useState()
    const dispatch = useDispatch()
    const characters = useSelector(state => state.CharacterReducer.characters)

    const getCharacters = async () => {
        let res = await GetAllCharacters();
        console.log(">>>>>>>>>>>>>>", res);
        setstate(res)
        dispatch(saveCharacters(res.results))
    }

    useEffect(() => {
        getCharacters();
    }, [])
    return (
        <div>
            {JSON.stringify(state, null, 2)}
            <div style={{padding: '3rem'}}>
             {JSON.stringify(characters, null, 2)}
            </div>
            
        </div>
    )
}

export default Home
