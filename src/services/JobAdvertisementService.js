import axios from "axios";

export default class JobAdvertisementService {
    getAllJobAdvertisement() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getall");
    }

    getAllByIsActiveTrueJobAdvertisement() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getallbyactive");
    }
    getAllByIsActiveFalseJobAdvertisement() {
        return axios.get("http://localhost:8080/api/jobadvertisements/getallbyactivefalse");
    }


    async add(jobadvertisement) {
        console.log(jobadvertisement.maxSalary);
        return await axios({
            method: "POST",
            url: "http://localhost:8080/api/jobadvertisements/add",
            data: jobadvertisement,
            headers: { "Content-Type": "application/json", "Accept": 'application/json' },
        })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });
    }

    delete(id) {
        return axios.delete('http://localhost:8080/api/jobadvertisements/delete/' + id);
    }

    active(id) {
        return axios.post("http://localhost:8080/api/jobadvertisements/jobAdvertisementAcitvete?activeteId=" + id, {
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            }
        });
    }
}