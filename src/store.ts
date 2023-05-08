import { reactive } from "vue";
import { Coordinate } from "./types";

type storeType = {
  highlighted: Array<Coordinate>;
  addHighlight: (coordinate: Coordinate) => void;
  reset: () => void;
};

export const store = reactive<storeType>({
  highlighted: [],
  addHighlight(coordinate: Coordinate) {
    this.highlighted.push(coordinate);
  },
  reset() {
    this.highlighted = [];
  },
});
