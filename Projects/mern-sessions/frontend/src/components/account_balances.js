import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AccountBalances = () => {
  const [balances, setBalances] = useState({ savings: 0.00, checking: 0.00 });
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');
  const [accountType, setAccountType] = useState('savings');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const response = await axios.get('http://localhost:4000/record/account-balances', {
          withCredentials: true,
        });

        console.log("Fetched balances:", response.data);
        setBalances(response.data || { savings: 0.00, checking: 0.00 });
      } catch (error) {
        if (error.response && error.response.status === 401) {
          navigate('/login'); // Redirect to login if unauthorized
        } else {
          console.error('Error fetching account data:', error);
        }
      }
    };

    fetchBalances();
  }, [navigate]);

  const handleTransaction = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/record/transaction', 
        {
          type: transactionType,
          amount: parseFloat(amount),
          account: accountType,
        },
        { withCredentials: true }
      );

      console.log("Transaction response:", response.data);

      if (response.data.success) {
        setBalances({ savings: response.data.savings, checking: response.data.checking }); // Update balances with the response data
        setAmount(''); // Clear the input box
        setError(null); // Clear any previous errors
      } else {
        setError(response.data.message); // Set error message from the response
      }
    } catch (error) {
      console.error('Transaction error:', error);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError('Transaction failed');
      }
    }
  };

  return (
    <div>
      <h2>Account Balances</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Savings: ${balances.savings !== null && balances.savings !== undefined ? balances.savings.toFixed(2) : '0.00'}</p>
      <p>Checking: ${balances.checking !== null && balances.checking !== undefined ? balances.checking.toFixed(2) : '0.00'}</p>
      <form onSubmit={handleTransaction}>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          placeholder="Amount"
          min="0"
        />
        <select value={transactionType} onChange={e => setTransactionType(e.target.value)}>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
        <select value={accountType} onChange={e => setAccountType(e.target.value)}>
          <option value="savings">Savings</option>
          <option value="checking">Checking</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AccountBalances;
