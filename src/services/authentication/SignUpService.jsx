import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8089/auth"

class SignUpService {
    addEmployee(employee){
        console.log("Inside signup service and our employee object is : ", employee)
        return (axios.post(BASE_REST_API_URL+"/signup", employee))
    }
}

export default new SignUpService();