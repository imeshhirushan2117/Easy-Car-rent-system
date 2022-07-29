import axios from "../axios";
import qs from "qs";
class CustomerService{
    postCustomer=async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post("Customer", qs.stringify(data))
                .then((res) => {
                return resolve(res);
            }).catch((err) => {
                return resolve(err);
            })
        })
        return await promise;
    }

}
export default new CustomerService();