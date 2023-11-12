import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () =>{
    const { budget, remaining, currency, dispatch } = useContext(AppContext);
    const totalExpenses = budget - remaining;

    const handleBudgetChange = (event) =>{
        if(event.target.value < totalExpenses){
            alert("This budget is too low for what you've already spent!");
            return;
        }
        if(event.target.value > 20000){
            alert("This budget is too high");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }
    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
}

export default Budget;
