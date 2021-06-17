import axios from "axios";

export default class CitieService{
    getAllCities(){
        return axios.get("http://localhost:8080/api/citiess/getAll");
    }
}
