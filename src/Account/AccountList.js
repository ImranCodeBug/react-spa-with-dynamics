import React from 'react';
import AccountItem from './AccountItem';
import {RetrieveAllAccounts} from '../Services/AccountService'


class AccountList extends React.Component{    
    constructor(props){
        super(props);
        this.state = {
            accounts : []
        }         
    }

    componentDidMount =() => {
        RetrieveAllAccounts((result) =>{
                let accs = [];
                for(var i = 0; i < result.value.length; i++){
                    let acc = {};
                    acc.accountName = result.value[i].name;
                    acc.industry = result.value[i].websiteurl;
                    acc.description = result.value[i].description;
                    accs.push(acc);
                }

                this.setState({
                    accounts : accs
                })
           }
        )
    }
    
    render = () => {
        return(
        this.state.accounts.map(account => {
            return <AccountItem account = {account}/>
        })
        )

    }
}

export default AccountList;
