import React from 'react'
import './Header.css'
import{Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src="https://www.stickpng.com/img/download/580b57fcd9996e24bc43c513/image" alt="" className="header_icon" /></Link>
        <Link to="/search">
        <div className="header_center">
            <input type="text" />
            <SearchIcon/>
        </div>
        </Link>
        <div className="header_right">
            <p>Become a host</p>
<LanguageIcon/>
<ExpandMoreIcon/>
<AccountCircleIcon/>
        </div>
    </div>
  )
}
