import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useHandleClickLocation(city_id) {
  const history = useHistory();
  const handleClickLocation = () => {
    history.push({
      pathname: "/location",
      state: city_id,
    });
  };

  return handleClickLocation;
}
export default useHandleClickLocation;
