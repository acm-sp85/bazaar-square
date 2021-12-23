import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function useHandleClickCategory(category_id) {
  const history = useHistory();
  const handleClickCategory = () => {
    history.push({
      pathname: "/category",
      state: category_id,
    });
  };

  return handleClickCategory;
}
export default useHandleClickCategory;
