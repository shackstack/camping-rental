import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LandingPage from "./pages";
import Provider from "./Provider";
import RentalListPage from "./pages/rental-list";
import RentalDetailPage from "./pages/rental-list/[id]";
import LoginPage from "./pages/login";
import OauthRedirectPage from "./pages/login/oauth-redirect";
import NotFound404 from "./pages/NotFound404";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound404 />,
    element: (
      <Provider>
        <Outlet />
      </Provider>
    ),
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "login",
        children: [
          { index: true, element: <LoginPage /> },
          { path: "oauth-redirect", element: <OauthRedirectPage /> },
        ],
      },
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
