import axios from '../axios';
import qs from 'qs';

class StaffService {
    postStaff = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('Stuff', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchStaff = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Stuff')
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
            axios.delete('Stuff', {params:params})
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
            axios.put('Stuff', data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}

export default new StaffService();