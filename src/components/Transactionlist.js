import React, {useContext} from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState'

export const Transactionlist = () => {
  const {transactions} = useContext(GlobalContext);


    return (
        <>
              <h3>History</h3>
      <ul id="list" class="list">
        {transactions.map(transactions => ( <Transaction key={transactions.id} transaction={transactions}/>))}
        
      </ul>
        </>
    )
}
