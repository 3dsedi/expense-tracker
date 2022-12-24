

import { Card } from './Card'

import './Expenses.css'
import { ExpensesFilter } from './ExpensesFilter'
import { useState } from 'react'
import { ExpensesList } from './ExpensesList'


export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')
  const filterChangeHandler =(selectedYear) =>{
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.item.filter(expense => {
   return expense.date.getFullYear().toString() === filteredYear
  })
  return (
    <div>
    <Card className='expenses'>
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
   
  )
}
