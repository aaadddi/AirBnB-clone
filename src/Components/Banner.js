import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Search from './Search.js'
import './Banner.css'
function Banner() {
    const navigate = useNavigate();

    const [showSearch,setShowSearch] = useState(false);
  return (
    <div className="Banner">
        <div className="banner_search">
            <button onClick={()=>setShowSearch(!showSearch)}>{(!showSearch?"Search Date":"Hide")}</button>
            {showSearch && <Search/>}
        </div>
    <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
            Plan a diffrent type of getaway to uncover the hidden gems near you.

        </h5>
        <button onClick={()=>{navigate('/search')}}>Explore Nearby</button>
    </div>

    </div>
  )
}

export default Banner

