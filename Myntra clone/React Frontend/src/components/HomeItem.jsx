import { useDispatch, useSelector } from "react-redux";
import { BagSliceActions } from "../store/BagSlice";

const HomeItem = ({ item }) => {
  const bagItems = useSelector((store) => store.bag);
  const ind = bagItems.indexOf(item.id) >= 0;
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(BagSliceActions.addItems(item.id));
  };
  const handleRemoveItem = () => {
    dispatch(BagSliceActions.removeItem(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt={item.item_name} />
      <div className="rating">
        {item.rating.stars} ⭐| {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount" />
        {item.discount_percentage}% OFF
      </div>
      {ind ? (
        <button
          type="button"
          className="btn btn-danger btn-add-bag"
          onClick={() => handleRemoveItem(item)}
        >
          remove
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={() => handleAddItem(item)}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
