import axios from '../axios';
import qs from 'qs';

class RentService {
    postRent  = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('Rent', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchRent = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Rent')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    deleteRent = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('Rent', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    updateRent  = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('Rent', data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}

export default new RentService();