import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Siderbar";
import "./App.css";
import CreatePost from "../components/CreatePost";
import PostContainer from "../components/PostContainer";
import PostListProvider from "../store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-Container">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
