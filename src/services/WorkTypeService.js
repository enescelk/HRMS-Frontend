import axios from "axios";

export default class WorkTypeService{
    getAllWorkType(){
        return axios.get("http://localhost:8080/api/worktype/getAll");
    }
}