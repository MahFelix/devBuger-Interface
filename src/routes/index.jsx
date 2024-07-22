import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from '../containers/Login';
import { Register } from "../containers/Register";
import { Home } from "../containers/Home";
import PrivateRoute from "./private-routes";

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Register />
  },
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;