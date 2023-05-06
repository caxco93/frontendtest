import { reactive } from "vue";
import { Coordinate } from "./types";

type storeType = {
  highlighted: Array<Coordinate>;
};

export const store = reactive<storeType>({
  highlighted: [],
});
