import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useHandleClickUser(owner_id) {
  const history = useHistory();
  const handleClickUser = () => {
    history.push({
      pathname: "/user-profile",
      state: owner_id,
    });
  };

  return handleClickUser;
}
export default useHandleClickUser;
