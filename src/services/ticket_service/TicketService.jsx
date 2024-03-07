import axios from "axios";

const BASE_REST_API_URL = "http://localhost:8089/tickets"

class TicketService {

    getAllTickets(status, jwtToken){
        console.log("Inside getAssetRequestTickets")
        const headers = {
            "Authorization" : `Bearer ${jwtToken}`
        }
        return axios.get(BASE_REST_API_URL+"/status/"+status, {headers})
    }
}

export default new TicketService();