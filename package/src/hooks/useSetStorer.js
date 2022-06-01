import { useContext } from "react";
import { Context } from "../util/context";

function useSetStorer() {
    return useContext(Context).setStore
}

export default useSetStorer