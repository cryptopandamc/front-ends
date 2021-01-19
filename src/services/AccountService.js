import axios from 'axios'

const BASE_URL = 'http://localhost:8088/api/v1/account'

class AccountService{

    retriveOneAccount(accountId) {
        return axios.get(`${BASE_URL}/get/${accountId}`);
    }
 
    retrieveSimAccount(){
        return axios.get(`${BASE_URL}/get/1`);
    }

}

export default new AccountService()