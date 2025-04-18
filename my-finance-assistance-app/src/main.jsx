import { createRoot } from 'react-dom/client'
import Login from './Pages/login.jsx'
import Register from './Pages/register.jsx'
import UserDetails from './Pages/user_details.jsx'
import AdminLogin from './Pages/Admin/adminLogin.jsx'
import ExpertLogin from './Pages/Expert/expertLogin.jsx'
import ViewExperts from './Pages/viewExperts.jsx'
import ManageExperts from './Pages/Admin/manageExperts.jsx'
import RegisterExperts from './Pages/Admin/registerExperts.jsx'
import ViewUserDetails from './Pages/Expert/viewUserDetails.jsx'
import UserInfo from './Pages/Expert/showUserInfo.jsx'


import { Provider } from 'react-redux'
import store from '../src/Redux/store.js'
import ShowUser from './Pages/show_user.jsx'
import FinanceAi from './Pages/financeai.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (<Login/>),
  },
  {
    path: "/register",
    element:(<Register/>),

  },
  {
    path: "/userdetails",
    element:(<UserDetails/>),
  },
  {
    path: "/expert/login",
    element:(<ExpertLogin/>),
  },
  {
    path: "/admin/login",
    element:(<AdminLogin/>),
  },
  {
    path: "/user/viewexperts",
    element:(<ViewExperts/>),
  },
  {
    path: "/admin/manageexperts",
    element:(<ManageExperts/>),
  },
  {
    path: "/admin/registerexperts",
    element:(<RegisterExperts/>),
  },
  {
    path: "/expert/viewuserdetails",
    element:(<ViewUserDetails/>),
  },
  {
    path: "/showuserdetails",
    element:(<ShowUser/>),
  },
  
  {
    path: "/finance_ai",
    element:(<FinanceAi/>),
  },
  {
    path: "/expert/user/:user_id",
    element:(<UserInfo/>),
  },
  
   


  
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);







