import axios from "axios"

const RAISE_TICKET_URL="http://localhost:8089/tickets"

class RaiseTicketService{

  raiseTicket(jwtToken,ticketraise){
    const headers = {
        "Authorization" : `Bearer ${jwtToken}`
    }
   console.log("ticket raise",ticketraise);
    return axios.post(RAISE_TICKET_URL+'/raise',ticketraise,{headers});
  }

}
export default new RaiseTicketService();