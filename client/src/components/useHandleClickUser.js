import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useHandleClickUser(cardInfo) {
  const history = useHistory();
  const handleClickUser = () => {
    history.push({
      pathname: "/user-profile",
      state: cardInfo.owner_id,
    });
  };

  return handleClickUser;
}
export default useHandleClickUser;
