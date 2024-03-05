import { SignUp } from "./components/authentication/SignUp";
import CategoryTable from "./components/categories/catetory_table/CategoryTable";
import DateComponent from "./components/common_components/DateComponent";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import BarGraph from "./components/dashboard/bar_graph/BarGraph";
import LatestTickets from "./components/dashboard/latest_tickets/LatestTickets";
import SideBar from "./components/dashboard/side_bar/SideBar";
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'


function App() {

  

  return (
    <div className="App">
      {/* <SignUp/> */}
      <AdminDashboard/>
      {/* this is app js */}

      {/* <LatestTickets/> */}
      {/* <DateComponent/> */}
      {/* <BarGraph/> */}

      {/* <SideBar /> */}
      {/* <CategoryTable/> */}

    </div>
  );
}

export default App;
