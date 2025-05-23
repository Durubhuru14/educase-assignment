import { useState } from "react";

const useGlobalState = () => {
  const [state, setState] = useState({});
  return {
    state,
    setState,
  };
};
export default useGlobalState;
