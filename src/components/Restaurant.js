import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Restaurant = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, sla } = resData.info;
  const { slaString } = sla;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="w-44 m-5  border border-cyan-300  hover:shadow-zinc-600 shadow-lg">
      <img
        className="border rounded-md"
        src={CDN_URL + cloudinaryImageId}
        alt="Logo"
      />
      <h3 className="py-3 pl-2 font-bold"> {name}</h3>
      <h4 className="italic pl-3"> {cuisines.join(", ")}</h4>
      <h4 className="italic pl-3">{avgRating} star</h4>
      <h4 className="italic pl-3 font-thin">{slaString}</h4>
      <h4 className="italic pl-3 font-thin">{loggedInUser}</h4>
    </div>
  );
};

export const withMoreRatings = Restaurant => {
  return props => {
    return (
      <div>
        <label className="absolute bg-black text-white mx-3 px-2 rounded-sm">
          positive
        </label>
        <Restaurant {...props} />
      </div>
    );
  };
};

//check whether both are same
// export const withMoreRatings2 = props => {
//   return (
//     <div>
//       <label>positive</label>
//       <Restaurant {...props} />
//     </div>
//   );
// };

export default Restaurant;
