import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useHandleClickInfo(id) {
  const history = useHistory();
  const handleClickInfo = () => {
    window.location.href = `item/${id}`;
  };

  return handleClickInfo;
}
export default useHandleClickInfo;
