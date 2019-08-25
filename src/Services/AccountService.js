import {getToken} from './AdalContext';
import AdalConfig from '../Configs/AdalConfig';

export const RetrieveAllAccounts = (fnc) =>{
  getToken( async(error, token) => {    
    if(error === null && token !== null){

    let url =  AdalConfig.endpoints.api + "/api/data/v9.0/accounts?$select=name,websiteurl,industrycode,description";
    
    fetch(url, { 
        method: 'get', 
        headers: new Headers({
          "Authorization": "Bearer "+ token, 
          "Accept" : "application/json",
          "Content-Type": "application/json; charset=utf-8",
          "OData-MaxVersion" : "4.0",
          "OData-Version" :"4.0",
        })})
        .then(res => res.json())
        .then(res => fnc(res));                
      }
  });     
}
