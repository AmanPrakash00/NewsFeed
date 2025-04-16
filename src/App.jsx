import "./App.css";
import {Route,Routes} from "react-router-dom";
import NewsFeedPost from "./pages/NewsfeedPost";
import CreatePostPage from "./pages/CreatePostPage";
import HomePage from "./pages/Homepage";
function App() {
  return (
    <div>
      <Routes>
        <Route path= "/" element = {<HomePage/>} />
        <Route path= "/create/post" element = {<CreatePostPage/>} />
        <Route path="/posts" element = {<NewsFeedPost/>} />
      </Routes>
    </div>
  );
}

export default App;
