import axios from "axios";
const GET_ALL_CATEGORY="http://localhost:8089/category/getcategory"


class CategoryService{
    getAllCategory(jwtToken)
    {
        const headers = {
            "Authorization" : `Bearer ${jwtToken}`
        }
        return axios.get(GET_ALL_CATEGORY,{headers})
    }
}

export default new CategoryService();