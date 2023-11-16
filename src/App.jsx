import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import Give from "./components/give/Give";
// import Carousel from "./components/carousel/Carousel";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" exact element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="give" element={<Give />} />
        </Route>
      </Route>
    )
  );
  // return <Carousel />;
  return <RouterProvider router={router} />;
}

export default App;
