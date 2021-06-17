import axios from "axios";

export default class WorkTimeService{
    getAllWorkTime(){
        return axios.get("http://localhost:8080/api/worktime/getAll");
    }
}