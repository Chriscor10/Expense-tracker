import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


//initial state:


const initialState = { transactions: [
    
        { id: 1, text: 'Payment', amount: 650 },
        { id: 2, text: 'Rent income', amount: 1300 },
        { id: 3, text: 'Car Payment', amount: -250 },
        { id: 4, text: 'Insurance', amount: -180 }
]}


//Create context:

export const GlobalContext =  createContext();  

//Provider:

export const GlobalProvider = ({ children }) => {
 const [state, dispatch] = useReducer(AppReducer, initialState);

 //Actions:

 function deleteTransactions(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
 }

 function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
 }

 return (<GlobalContext.Provider value={{
     transactions: state.transactions,
     deleteTransactions,
     addTransaction
 }}>
     {children}
 </GlobalContext.Provider>);
}