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
