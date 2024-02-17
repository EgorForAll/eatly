import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/assets/store";
import MainPage from "@/components/pages/main/main-page";
import BlogPage from "@/components/pages/blog/blog-page";
import NotFound from "@/components/pages/not-found/not-found";
import SinglePost from "@/components/pages/single-post/single-post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "blog/:id",
    element: <SinglePost />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </Provider>
  </React.StrictMode>
);
