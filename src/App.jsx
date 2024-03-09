import { AuthPage, SignUp } from "./pages/authentication/AuthPage";
import CategoryTable from "./components/categories/catetory_table/CategoryTable";
import DateComponent from "./components/dashboard/date_component/DateComponent";
import AdminDashboard from "./pages/admin_dashboard/AdminDashboard";
import BarGraph from "./components/dashboard/bar_graph/BarGraph";
import LatestTickets from "./components/dashboard/latest_tickets/LatestTickets";
import SideBar from "./components/dashboard/side_bar/SideBar";
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import AuthContextProvider from "./context/AuthContextProvider";
import AdminHome from "./components/dashboard/admin_home/AdminHome";
import ListAvailableAssets from "./components/dashboard/list_available_assets/ListAvailableAssets";
import Listcategory from "./components/Employee/Category/Listcategory";
import RaiseTicket from "./components/Employee/EmployeeTickets/RaiseTicket";

function App() {
  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <AuthPage/>,
    },
    {
      path: '/',
      element: <AdminDashboard/>,
      children: [
        {
          path: '',
          element: <AdminHome/>
        },
        {
          path: 'categories',
          element: <CategoryTable/>
        },
        {
          path:'show/:id',
          element:<ListAvailableAssets/>
        },
        {
          path:'category',
          element:<Listcategory/>
        },
        {
          path:'raise-ticket/:id',
          element:<RaiseTicket/>
        }
        
         
        
      ]
     
    },
    
    
    
])
  

  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  );
}

export default App;
