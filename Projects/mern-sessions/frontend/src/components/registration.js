import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log('Register button clicked'); // Debug log
    try {
      const response = await fetch('http://localhost:4000/record/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, phoneNumber, password }),
        credentials: 'include'
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful', data); // Debug log
        navigate('/account-summary', { state: { user: data.userId } });
      } else {
        console.error('Registration failed', data.message); // Debug log
        setError(data.message);
      }
    } catch (err) {
      console.error('Registration error', err); // Debug log
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
      <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;
