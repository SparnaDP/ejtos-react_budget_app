import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () =>{
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency + " Pound");


    const handleCurrencyChange = (event) =>{
        setNewCurrency(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value.charAt(0)
        });
    }

    return(
        <div className="alert dropdown" style={{backgroundColor: "#99FF99"}}>
            <a className="btn btn-lg dropdown-toggle w-100 h-100 p-0" style={{backgroundColor: "#99FF99", border: "transparent", color: "white"}} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Currency({newCurrency})
            </a>
            <div className="dropdown-menu border-success" style={{backgroundColor: "#99FF99"}} aria-labelledby="dropdownMenuLink">
                <button className="dropdown-item" value="$ Dollar" onClick={(event) => handleCurrencyChange(event)}>$ Dollar</button>
                <button className="dropdown-item" value="£ Pound" onClick={(event) => handleCurrencyChange(event)}>£ Pound</button>
                <button className="dropdown-item" value="€ Euro" onClick={(event) => handleCurrencyChange(event)}>€ Euro</button>
                <button className="dropdown-item" value="₹ Rupee" onClick={(event) => handleCurrencyChange(event)}>₹ Rupee</button>
            </div>
        </div>
    );
}
export default Currency;
