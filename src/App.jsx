import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import Give from "./components/give/Give";
import Playlist from "./components/playlist/Playlist";
// import Carousel from "./components/carousel/Carousel";

function App() {
  //  function reveal() {
  //    var reveals = document.querySelectorAll(".reveal");
  //    for (var i = 0; i < reveals.length; i++) {
  //      var windowHeight = window.innerHeight;
  //      var elementTop = reveals[i].getBoundingClientRect().top;
  //      var elementVisible = 150;
  //      if (elementTop < windowHeight - elementVisible) {
  //        reveals[i].classList.add("active");
  //      } else {
  //        reveals[i].classList.remove("active");
  //      }
  //    }
  //  }

  //  window.addEventListener("scroll", reveal);

  //  // To check the scroll position on page load
  //  reveal();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route> 
        <Route path="/" exact element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/give" element={<Give />} />
          <Route path="/playlist" element={<Playlist />} />
        </Route>
      </Route>
    )
  );
  // return <Carousel />;
  return (
    // <RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="give" element={<Give />} />
          <Route path="playlist" element={<Playlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
