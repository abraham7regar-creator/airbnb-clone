import React, { useState } from 'react'
import './css/Search.css'
import "react-date-range/dist/styles.css";//tema utama
import "react-date-range/dist/theme/default.css"//file css tema
import { DateRangePicker } from 'react-date-range'
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People'
import { useHistory } from 'react-router-dom'

function Search() {
    const history = useHistory();
    const [startDate, setStartDate]= useState(new Date());
    const [endDate, setEndDate]= useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.EndDate);
    }
    return (
        <div className='search'>
            <DateRangePicker ranges={
                [selectionRange]} 
                onChange={handleSelect}
            />
            <h2>
                Number Of Guests 
                <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => history.push('/search')} >Search Airbnb</Button>
        </div>
    )
}

export default Search
