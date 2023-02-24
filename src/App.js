import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import CreatePost from "./components/pages/CreatePost";
import Profile from "./components/pages/Profile";
import About from "./components/pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts/:post_id" element={<SinglePost />} />
            <Route path="/CreatePost" element={<CreatePost />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/CreatePost" element={<CreatePost />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
