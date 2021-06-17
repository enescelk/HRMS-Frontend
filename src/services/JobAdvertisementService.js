import axios from "axios";

export default class JobAdvertisementService{
    getAllJobAdvertisement(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall");
    }

    async add(jobadvertisement) {
        return await axios({
            method: "POST",
            url: "http://localhost:8080/api/jobadvertisements/add",
            data: jobadvertisement,
            headers: { "Content-Type": "application/json;charset=UTF-8" },
        })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });
    }
}