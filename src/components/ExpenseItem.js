import React, { useContext } from 'react';
import { TiMinus, TiPlus, TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <TiPlus onClick={() => increaseAllocation(props.name)} style={{ backgroundColor: 'green', color: 'white', borderRadius: '50%', border: 'none', padding: '4px' }} size='2em'></TiPlus>
            </td>
            <td>
                <TiMinus onClick={() => decreaseAllocation(props.name)} style={{ backgroundColor: 'maroon', color: 'white', borderRadius: '50%', border: 'none', padding: '4px' }} size='2em'></TiMinus>
            </td>
            <td>
                <TiDelete onClick={() => handleDeleteExpense()} size='1.5em'></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;