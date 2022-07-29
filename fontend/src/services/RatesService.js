import axios from '../axios';
import qs from 'qs';

class DriverService {
    postDriver = async (data) => {
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

    fetchPosts = async (data) => {
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
    deleteStaff = async (params) => {
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
    updateStaff = async (data) => {
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

export default new DriverService();