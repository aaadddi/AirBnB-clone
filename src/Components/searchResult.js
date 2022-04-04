import React from 'react'
import './SearchResult.css'
import { FavoriteBorder } from '@mui/icons-material'
import StarPurple500OutlinedIcon from '@mui/icons-material/StarPurple500Outlined';
export default function searchResult({img,location,title,description,star,price,total}) {

  return (
    <div className='searchResult'>
     <img src={img} alt="" />
     <FavoriteBorder className="searchResult_heart"/>
     <div className="searchResult_info">
         <div className="info_top">
             <p>{location}</p>
             <h3>{title}</h3>
             <p>_____</p>
             <p>{description}</p>
           
         </div>
         <div className="info_bottom">
        <div className="stars">
            <StarPurple500OutlinedIcon className="star"/>
          
            
        <strong>{star}</strong>  </div>
        <div className="searchresult_price">
            <h2>{price}</h2>
            <p>{total}</p>
        </div>
         </div>
     </div>
    </div>
  )
}
