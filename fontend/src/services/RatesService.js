import axios from '../axios';
import qs from 'qs';

class RatesService {
    postRates = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('Rates', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchRates = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Rates')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    deleteRates= async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('Rates', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    updateRates = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('Rates', data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}

export default new RatesService();