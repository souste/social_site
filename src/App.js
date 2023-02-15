import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
const cors = require("cors");

App.use(cors());

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Posts />
    </div>
  );
}

export default App;
