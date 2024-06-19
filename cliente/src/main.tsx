import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Outlet,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MyNavbar from "./components/MyNavbar.tsx";
import PostDetails from "./pages/PostDetails.tsx";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/*the following is the homepage */}
      <Route index element={<App />} />
      <Route path="/login" element={<div>Login</div>} />
      <Route path="/registration" element={<div>Register</div>} />
      <Route path="/myProfile" element={<div>Profile</div>} />
      <Route path="/:post_id" element={<PostDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);

function Root() {
  return (
    <>
      <MyNavbar />
      <Outlet />
    </>
  );
}
