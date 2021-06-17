import axios from "axios";

export default class JobAdvertisementService{
    getAllJobAdvertisement(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall");
    }
}