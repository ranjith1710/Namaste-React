import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      console.log("offline");
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      console.log("online");
      setOnlineStatus(true);
    });
  }, []);
  console.log("below useEffect in online status");

  return onlineStatus;
};

export default useOnlineStatus;
