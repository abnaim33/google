import React from 'react'
import { Link } from 'react-router-dom';
import Search from '../pages/Search';

import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch';
import './SearchPages.css';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DescriptionIcon from '@material-ui/icons/Description';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function SearchPages() {
    const [{ term = "tesla" }, dispatch] = useStateValue();

    // const data = Response
    const { data } = useGoogleSearch(term);
    // console.log(data)
    return (
        <div className="searchPages">
            <div className="searchPages_header">
                <Link to="/">
                    <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="google-icon" />
                </Link>


                <div className="searchPages_headerBody">
                    <Search />

                    <div className="searchPages_options">
                        <div className="searchPages_optionsLeft">
                            <div className="searchPages_option">
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className="searchPages_option">
                                <ImageIcon />
                                <Link to="/image">Image</Link>
                            </div>
                            <div className="searchPages_option">
                                <YouTubeIcon />
                                <Link to="/video">Video</Link>
                            </div>
                            <div className="searchPages_option">
                                <LocationOnIcon />
                                <Link to="/location">Maps</Link>
                            </div>
                            <div className="searchPages_option">
                                <DescriptionIcon />
                                <Link to="/News">News</Link>
                            </div>
                            <div className="searchPages_option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className="searchPages_optionsRight">
                            <Link to="/setting">Setting</Link>

                            <Link to="/tools">Tools</Link>
                        </div>
                    </div>
                </div>
            </div>
            {true && (
                <div className="searchPage_results">
                    <p className="search_resultCount">
                        About{data?.searchInformation.formattedTotalResults} results

({data?.searchInformation.formattedSearchTime} Seconds) for "{term}"
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_result">
                            <a href={item.Link}>

                                {item.displayLink}
                            </a>
                            <h2><a href={item.Link} className="searchPage_resultTitle">{item.title}</a></h2>

                            <p className="searchPage_resultSnippet">{item.snippet}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPages
