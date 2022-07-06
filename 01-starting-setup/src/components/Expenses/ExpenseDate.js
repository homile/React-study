import React from 'react'
import './ExpenseDate.css'

function ExpenseDate({expenses}) {
  return (
    <div className='expense-date'>
        <div className='expense-date__year'>{expenses.date.toLocaleString('ko-KR', { year: 'numeric' })}</div>
        <div className='expense-date__month'>{expenses.date.toLocaleString('ko-KR', { month: 'long' })}</div>
        <div className='expense-date__day'>{expenses.date.toLocaleString('ko-KR', { day: '2-digit' })}</div>
    </div>
  )
}

export default ExpenseDate