import React, { useState } from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../Reducer';

function Search() {
    const [state, dispatch] = useStateValue()

    const [input, setInput] = useState('');
    const history = useHistory()
    const search = (e) => {
        e.preventDefault();

        console.log('hit the button', input)


        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }
    return (
        <form className="search">
            <div className="search_input">
                <SearchIcon className="searchIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} placeholder="Search Google or type a URL" type="text" />
                <IconButton>
                    <MicIcon className="micIcon" />
                </IconButton>

            </div>
            <div className="search_buttons">
                <Button type="submit" onClick={search}>Google Search</Button>
                <Button>I'm Felling lucky</Button>
            </div>
        </form>
    )
}

export default Search
