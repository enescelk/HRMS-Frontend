import axios from "axios";

export default class CitiesService{
    getAllCities(){
        return axios.get("http://localhost:8080/api/citiess/getAll");
    }
}