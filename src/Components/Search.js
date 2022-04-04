import React, { useState } from 'react'
import './Search.css'
import { useNavigate } from 'react-router-dom';

import HailIcon from '@mui/icons-material/Hail';
import { DateRangePicker } from 'react-date-range'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
export default function Search() {
  const navigate = useNavigate();
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  const selectionRange = {
      startDate: startDate,
      endDate : endDate,
      key: "selecion"
  };
  function handleSelect(ranges){
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
  }
  return (
    <div className='search'>
<DateRangePicker ranges = {[selectionRange]} onChange={handleSelect}/>
    <h2>No. of Guests
    <HailIcon/>

    </h2>
    <input type="number" defaultValue={2} min={0} />
    <button onClick={()=>{navigate('/search')}}>Search Airbnb</button>
    </div>
  )
}
