import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        
        props.onSaveSelectedYear(event.target.value);
    }
return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter</label>
        </div>
        <select value={props.selected} onChange={dropdownChangeHandler}>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
        </select>
    </div>
)
}

export default ExpenseFilter;