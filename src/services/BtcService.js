import axios from 'axios'

const BASE_URL = 'http://localhost:8088/api/v1/btc'



class BtcService {

    GetBtc(params) {
        return axios.get(`${BASE_URL}/GetBtc`, { params });
    }
}

export default new BtcService()