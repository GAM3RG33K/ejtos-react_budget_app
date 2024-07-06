import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (event.target.value <= 20000) {

            if (event.target.value < totalExpenses) {
                alert("Value cannot be lower than current spendings, Please try again!");
                return;
            }

            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            });
        } else {
            alert("Value cannot exceed 20000 for budget, Please try again!");
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;