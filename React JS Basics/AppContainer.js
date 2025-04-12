import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./src/Components/HeadingComponent";
import BodyComponent from "./src/Components/BodyComponent";
import { createBrowserRouter } from "react-router-dom";
import AboutComponent from "./src/Components/AboutComponent";
import { RouterProvider } from "react-router-dom";
import ErrorComponent from "./src/Components/ErrorComponent";
import ContactComponent from "./src/Components/ContactComponent";
import { Outlet } from "react-router-dom";
import RestaurantMenuComponent from "./src/Components/RestaurantMenuComponent";
import UserContext from "./src/Utilities/UserContext";

const GroceryComponent = lazy(() =>
  import("./src/Components/GroceryComponent")
);

const RestroCardComponent = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    restaurant?.info;
  const imageId = cloudinaryImageId.replace("Image preview", "");

  return (
    <div
      className="rest-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="rest-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
        alt="logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const AppComponent = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "B.Manoj Babu",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app-conatiner">
        <HeadingComponent />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <AboutComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuComponent />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1> Loading......</h1>}>
            <GroceryComponent />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
