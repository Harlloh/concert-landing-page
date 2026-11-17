import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./components/Home/Home";
import Give from "./components/give/Give";
import Playlist from "./components/playlist/Playlist";
import Team from "./components/team/team";
import Gallery from "./components/gallery/Gallery";
import Volunteer from "./components/volunteer/Volunteer";
// import Carousel from "./components/carousel/Carousel";

function App() {
  return (
    // <RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="give" element={<Give />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="team" element={<Team />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="volunteer" element={<Volunteer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
