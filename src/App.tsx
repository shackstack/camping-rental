import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./pages";
import Provider from "./Provider";
import RentalListPage from "./pages/rental-list";
import RentalDetailPage from "./pages/rental-list/[id]";
import LoginPage from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider>
        <Outlet />
      </Provider>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "rental-list",
        children: [
          { index: true, element: <RentalListPage /> },
          { path: ":id", element: <RentalDetailPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
