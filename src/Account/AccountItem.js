import React from 'react';

const AccountItem = ({account}) =>{

return (
    <div className="card border-success mb-3" >
    <div className="card-header">{account.accountName}</div>
    <div className="card-body">
        <h5 className="card-title text-success">{account.industry}</h5>
        <p className="card-text">{account.description}</p>
    </div>
    </div>
)
}

export default AccountItem;