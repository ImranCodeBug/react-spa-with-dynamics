import {AuthenticationContext} from 'react-adal'
import AdalConfig from '../Configs/AdalConfig'

export const authContext = new AuthenticationContext(AdalConfig);

export const acquireToken = (func) => 
    authContext.acquireToken(AdalConfig.endpoints.api, func);

export const getToken = (fnc) =>{
    if(authContext.getCachedUser() == null){
        authContext.login();
    }

    authContext.acquireToken(AdalConfig.endpoints.api, fnc);
}
