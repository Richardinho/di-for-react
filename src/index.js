import "core-js/stable";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import React, { Component } from "react";
import {
  Link,
  Route,
  Outlet,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Injector, { Inject } from "./injector";

import MyService from "./MyService";
import BarService from "./BarService";
import Bar from "./Bar";

class JobService {
  getJob() {
    return "I am unemployed";
  }
}

const Foo = (props) => <h2>This is foo</h2>;

const config2 = [
  { key: "myService", provider: MyService },
  { key: "jobService", provider: JobService },
];

const config = [{ key: "barService", provider: BarService }];

const Root = () => (
  <Injector config={config}>
    <Link to="/foo">foo</Link>
    <Link to="/bar">bar</Link>
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route
          path="bar"
          element={
            <Injector config={config2}>
              <Bar />
            </Injector>
          }
        />
        <Route path="foo" element={<Foo />} />
      </Route>
    </Routes>
  </Injector>
);

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
  },
]);

const domNode = document.getElementById("app");
const root = createRoot(domNode);

const App = () => (
  <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
);

root.render(<App />);
