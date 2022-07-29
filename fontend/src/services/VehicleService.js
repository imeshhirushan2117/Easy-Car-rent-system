import axios from '../axios';
import qs from 'qs';

class VehicleType{
    postVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('Vehicle', qs.stringify(data))
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }

    fetchVehicle= async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.get('Vehicle')
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    deleteVehicle = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete('Vehicle', {params:params})
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
    updateVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('Vehicle', data)
                .then((res) => {
                    return resolve(res)
                }).catch((err) => {
                return resolve(err)
            })
        });
        return await promise;
    }
}

export default new VehicleType();