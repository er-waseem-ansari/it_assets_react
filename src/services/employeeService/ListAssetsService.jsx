import axios from "axios";

const BASE_REST_URL="http://localhost:8089/assets/category"

class ListAssetsService{

  getAvailableAssets(id,jwtToken){
   
    
    const headers = {
        "Authorization" : `Bearer ${jwtToken}`
    }
    return (axios.get(BASE_REST_URL+'/'+id,{headers}));
    
  }
}

export default new ListAssetsService();