import { addItem } from "../Utilities/cartSlice";
import { CDN_URL } from "../Utilities/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="text-xs">{item.card.info.description}</div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 bg-black text-white rounded-lg cursor-pointer  "
                onClick={() => handleAddItems(item)}
              >
                Add +{" "}
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt=""
              className="rounded-lg w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
