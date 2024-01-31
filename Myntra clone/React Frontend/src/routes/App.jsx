import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import "./Bag.css";
import FetchingItems from "../components/FetchingItems";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector } from "react-redux";
function App() {
  const fetchstatus = useSelector((store) => store.fetchstatus);

  return (
    <>
      <Header></Header>
      <main>
        {fetchstatus.currentlyFetching ? <LoadingSpinner />:<Outlet /> }

        <FetchingItems />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
