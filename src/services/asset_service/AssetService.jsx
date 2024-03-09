import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8089/assets"

class AuthService {

    

    addEmployee(employee){
        console.log("Inside signup service and our employee object is : ", employee)
        return (axios.post(BASE_REST_API_URL+"/signup", employee))
    }

    employeeLogin(employee){
        console.log("Inside login service and our employee object is : ", employee)
        const payload = {
            "email": employee.email,
            "password": employee.password
        }
        return axios.post(BASE_REST_API_URL+'/login', payload)

    }
}

export default new AuthService();