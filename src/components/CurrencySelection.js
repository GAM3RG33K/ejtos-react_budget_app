import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelection = () => {
    const { currency, currencies, dispatch } = useContext(AppContext);
    const selectedCurrency = currencies.find(currencyOption => currencyOption.symbol === currency);

    const handleCurrencyChange = (e) => {
        const newCurrency = currencies.find(currencyOption => currencyOption.symbol === e);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency.symbol,
        });
    };

    return (
        <div>

            <div class="btn-group">
                <button
                    class="btn dropdown-toggle"
                    type="button"
                    style={{
                        padding: '14px',
                        backgroundColor: "#D1E7DD",
                    }}
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Currency ({currency} - {selectedCurrency.name})
                </button>
                <ul class="dropdown-menu" style={{
                    backgroundColor: "#D1E7DD",
                }}>
                    {currencies.map((currencyOption, index) => (
                        <li style={{
                            backgroundColor: "#D1E7DD"
                        }}>
                            <button
                                class="dropdown-item btn btn-success"
                                type="button"
                                key={index}
                                value={currencyOption.symbol}
                                onClick={() => handleCurrencyChange(currencyOption.symbol)}
                                aria-current='true'
                            >
                                {currencyOption.symbol} - {currencyOption.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

};
export default CurrencySelection;