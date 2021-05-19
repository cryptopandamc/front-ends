import axios from 'axios'

const BASE_URL = 'http://localhost:8088/api/v1/btc'



class BtcService {

    GetBtc(params) {
        return axios.get(`${BASE_URL}/GetBtc`, { params });
    }

    GetDayData(params) {
        return axios.get(`${BASE_URL}/GetDayData`, { params });
    }

    GetOneDayData(btcDataId) {
        return axios.get(`${BASE_URL}/GetOneDayData/${btcDataId}`);
    }
}

export default new BtcService()