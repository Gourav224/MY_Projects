import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

function Bag() {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const finalItem = items.filter((item) => bagItems.indexOf(item.id) >= 0);

  return (
    <>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </>
  );
}

export default Bag;
