import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const MenuItem = ({ item }) => {
  const { name, defaultPrice, price, imageId, description } = item;
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addItem(item));
  };
  return (
    <div className="w-full flex flex-row justify-between items-center m-3 pb-1 border-gray-300 border-b-2">
      <div className="flex flex-col w-9/12">
        <h4 className="font-bold">{name}</h4>
        <p className="text-xs italic">Rs.{(defaultPrice || price) / 100}</p>
        <p className="text-xs">{description}</p>
      </div>
      <div className="flex justify-center w-2/12">
        <div className="absolute">
          <button
            className="bg-black px-2 py-1 text-white text-xs rounded-sm"
            onClick={handleAddCart}
          >
            Add +
          </button>
        </div>
        <img
          className="w-full h-full rounded-md"
          src={CDN_URL + imageId}
          alt="img"
        />
      </div>
    </div>
  );
};

export default MenuItem;
