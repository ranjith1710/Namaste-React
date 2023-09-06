import { CDN_URL } from "../utils/constants";

const MenuItem = ({ item }) => {
  const { name, defaultPrice, price, imageId } = item;
  return (
    <div className="w-full flex flex-row justify-between items-end m-3 p-1 border-gray-300 border-b-2">
      <div className="flex flex-col">
        <h4>{name}</h4>
        <p className="text-xs">Rs.{(defaultPrice || price) / 100}</p>
      </div>
      <div className="w-12">
        {/* <div className="absolute">
          <button className="bg-black text-white text-xs rounded-sm">
            Add +
          </button>
        </div> */}
        <img className="w-full rounded-md" src={CDN_URL + imageId} alt="img" />
      </div>
    </div>
  );
};

export default MenuItem;
