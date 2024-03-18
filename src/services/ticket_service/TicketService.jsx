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

    getTicketsByEmployeeId(employeeId, jwtToken){
        console.log("inside get tickets by employee id")
        const headers = {
            "Authorization" : `Bearer ${jwtToken}`
        }
        return axios.get(BASE_REST_API_URL+"/employee/"+employeeId, {headers})
    }

    approveRequest(ticketId, jwtToken){
        console.log("inside approve request by ticketId")
        const headers = {
            "Authorization" : `Bearer ${jwtToken}`
        }
        return axios.post(BASE_REST_API_URL+"/approve/" + ticketId, {headers})
    }
}

export default new TicketService();