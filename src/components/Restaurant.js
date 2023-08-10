import { CDN_URL } from "../utils/constants";

const Restaurant = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = resData.info;

  const { slaString } = sla;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} alt="Logo" className="res-img" />
      <h3> {name}</h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default Restaurant;
