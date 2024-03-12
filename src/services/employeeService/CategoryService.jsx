import axios from "axios";
const BASE_REST_URL="http://localhost:8089/category"


class CategoryService{
    getAllCategory(jwtToken)
    {
        const headers = {
            "Authorization" : `Bearer ${jwtToken}`
        }
        return axios.get(BASE_REST_URL + "/all",{headers})
    }
}

export default new CategoryService();