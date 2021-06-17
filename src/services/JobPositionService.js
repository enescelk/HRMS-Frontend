import axios from "axios";

export default class JobPositionService{
    getAllJobPosition(){
        return axios.get("http://localhost:8080/api/jobPosition/getAll");
    }
}