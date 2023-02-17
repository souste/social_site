import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts/:post_id" element={<SinglePost />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
