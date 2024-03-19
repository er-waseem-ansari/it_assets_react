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
import EmployeeHome from "./components/dashboard/employee_home/EmployeeHome";
import AllAssetRequestsTable from "./components/dashboard/all_asset_requests_table/AllAssetRequestsTable";
import AddAsset from "./components/dashboard/add_asset/AddAsset";
import AllActiveTickets from "./components/dashboard/all_active_tickets/AllActiveTickets";
import RaiseAllTicket from "./components/dashboard/raise_ticket/RaiseAllTicket";
import { elements } from "chart.js";
import IssuedAsset from "./components/Employee/IssueAsset/IssuedAsset";
import CreateCategory from "./components/categories/create_category/CreateCategory";

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
          path: 'admin',
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
        },
        {
          path: 'asset-requests/all',
          element: <AllAssetRequestsTable/>
        },
        {
          path: 'add-asset/:categoryId',
          element: <AddAsset/>
        },
        {
          path: 'all-active-tickets',
          element: <AllActiveTickets/>
        },
        {
          path: 'raise-ticket',
          element: <RaiseAllTicket />
        },
        {
        path:'issue-asset',
        element:<IssuedAsset />
        },
        {
          path: 'create-category',
          element: <CreateCategory />
        }
        
      ]
     
    },

    {
      path: '/',
      element: <AdminDashboard/>,
      children: [
        {
          path: 'employee',
          element: <EmployeeHome/>
        },
        {
          path: 'categories',
          element: <CategoryTable/>
        }
      ]
    }
  ])
  

  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  );
}

export default App;
