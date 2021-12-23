import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useHandleClickInfo(id) {
  const history = useHistory();
  const handleClickInfo = () => {
    history.push({
      pathname: "/item-info",
      state: id,
    });
  };

  return handleClickInfo;
}
export default useHandleClickInfo;
