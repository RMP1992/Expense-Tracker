import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id:"e1", 
    title: "Rent", 
    amount: 530, 
    date: new Date(2021, 4, 25)
  },
  {
    id:"e2", 
    title: "Council Tax", 
    amount: 85, 
    date: new Date(2021, 4, 25)
  },
  {
    id:"e3", 
    title: "PAYE Tax", 
    amount: 132, 
    date: new Date(2021, 4, 25)
  },
  {
    id:"e4", 
    title: "Future Finance", 
    amount: 132, 
    date: new Date(2021, 5, 9)
  },
]
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
