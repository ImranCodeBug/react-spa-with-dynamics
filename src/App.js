import React from 'react';
import './App.css';
import AccountList from './Account/AccountList';

function App() {

  

  return (
    <div className="App">
      <div className="container-fluid p-3">
      <div class="alert alert-secondary" role="alert">
        Accounts
      </div>
        <AccountList/>
      </div>
      
    </div>
  );
}

export default App;
