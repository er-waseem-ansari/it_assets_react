import axios from "axios";

const BASE_REST_URL="http://localhost:8089/it-assets/api/asset/issue-asset"

class IssueAssetService{
    getIssuedAsset(id,jwtToken)
    {
        const headers = {
            "Authorization" : `Bearer ${jwtToken}`
        }
        return (axios.get(BASE_REST_URL+'/'+id,{headers}));
    }

    
}

export default new IssueAssetService();