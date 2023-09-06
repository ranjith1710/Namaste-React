import MenuItem from "./MenuItem";

const RestaurantCategory = ({
  category,
  setShowIndex,
  showItems,
  menuType
}) => {
  const { title, itemCards } = category;
  const itemList =
    menuType == null
      ? itemCards
      : itemCards.filter(
          item => item?.card?.info?.itemAttribute?.vegClassifier == menuType
        );

  const handleItemShow = () => {
    setShowIndex(showItems ? false : true);
  };
  return (
    <div className="w-6/12 h-auto mx-auto my-3 p-1 flex flex-col items-center  rounded-md shadow-slate-300 shadow-lg">
      <div
        className="w-full p-1 flex items-center justify-between cursor-pointer"
        onClick={handleItemShow}
      >
        <span className="font-bold text-lg ">
          {title} ({itemList.length})
        </span>
        {showItems ? <span>⬆️</span> : <span>⬇️</span>}
      </div>

      {showItems &&
        itemList.map(item => (
          <MenuItem key={item.card?.info?.id} item={item.card?.info} />
        ))}
    </div>
  );
};

export default RestaurantCategory;
