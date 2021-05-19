import axios from 'axios'

const BASE_URL = 'http://localhost:8088/api/v1/account'

class AccountService{

    retriveOneAccount(accountId) {
        return axios.get(`${BASE_URL}/Get/${accountId}`);
    }
 
    retrieveSimAccount(){
        return axios.get(`${BASE_URL}/Get/1`);
    }

    updateSimAccount(accountId, account) {
        return axios.put(`${BASE_URL}/update/${accountId}`, account)
    }
}

export default new AccountService()