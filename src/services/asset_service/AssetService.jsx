import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8089/assets"

class AssetService {

    addAsset(assetObj, jwtToken){
        const headers = {
            "Authorization" : `Bearer ${jwtToken}`
        }

        // const payload = {
        //     "description" : assetObj.assetDescription,
        //     "image" : "image.jpg",
        //     "model" : assetObj.assetName,
        //     "category" : {
        //         "categoryId" : assetObj.categoryId
        //     }
        // }

        console.log("Inside asset service before axios: ", assetObj)
        return axios.post(BASE_REST_API_URL+"/add", assetObj, {headers})
    }
}

export default new AssetService();