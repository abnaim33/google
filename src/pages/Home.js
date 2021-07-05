import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';

import Search from './Search';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="header_left">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="header_right">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <IconButton>
                        <AccountCircleIcon className="account" />
                    </IconButton>

                </div>
            </div>
            <div className="home_body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="google-icon" />
                <Search />
            </div>
            <footer>Created by <a className="portfolio_link" target="blank" href="https://www.linkedin.com/in/md-naim-hossen-567679201/">Naim Hossen</a></footer>
        </div>
    )
}

export default Home
