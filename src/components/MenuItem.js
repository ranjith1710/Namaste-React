import { CDN_URL } from "../utils/constants";

const MenuItem = ({ item }) => {
  const { name, defaultPrice, price, imageId } = item;
  return (
    <div className="menu-item">
      <div className="menu-item-name">
        <h4>{name}</h4>
        <p>Rs.{(defaultPrice || price) / 100}</p>
      </div>
      <div className="menu-item-img">
        <img className="item-img" src={CDN_URL + imageId} alt="img" />
      </div>
    </div>
  );
};

export default MenuItem;
