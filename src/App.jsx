import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";

const RootLayout = () => (
  <div className="App">
    <NavBar />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
