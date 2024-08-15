import React from "react";
import { Route, Routes } from "react-router-dom";
import Records from "./components/records.js";
import Create from "./components/create.js";
import Edit from "./components/edit.js";
import SessionSet from "./components/session_set.js";
import SessionGet from "./components/session_get.js";
import SessionDelete from "./components/session_delete.js";
import Registration from "./components/registration.js";
import Login from './components/login.js';
import Logout from './components/logout.js';
import AccountSummary from './components/account_summary.js';
import AccountBalances from './components/account_balances.js';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Records />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/session_set" element={<SessionSet/>} />
        <Route path="/session_get" element={<SessionGet/>} />
        <Route path="/session_delete" element={<SessionDelete />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/account-summary" element={<AccountSummary />} />
        <Route path="/account-balances" element={<AccountBalances />} />

      </Routes>
    </div>
  );
}
export default App;
