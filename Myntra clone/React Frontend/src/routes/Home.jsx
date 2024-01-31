import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";

function Home() {
  const items = useSelector((store) => store.items);
  return (
    <div className="items-container">
      {items.map((item) => (
        <HomeItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Home;
