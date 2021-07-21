import React, {useState} from 'react';
import './Expenses.css';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const saveSelectedYear = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log('in Expenses.js')
        console.log(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return (
        <div>
            
        
            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onSaveSelectedYear={saveSelectedYear} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;