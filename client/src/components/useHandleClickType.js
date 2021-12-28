import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useHandleClickType(type) {
  const history = useHistory();
  const handleClickType = () => {
    history.push({
      pathname: "/item-type",
      state: type,
    });
  };

  return handleClickType;
}
export default useHandleClickType;
