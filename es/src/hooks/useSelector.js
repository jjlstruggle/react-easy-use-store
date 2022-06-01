import { useEffect, useState } from "react";
import { subscription } from '../createStore';

const useSelector = (...args) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    subscription.addSub(setState);
  }, []);
  return args.map(key => state[key]);
};

export default useSelector;