import { test } from "vitest";
import { parseString } from "./index.js";

test.each([undefined, "x"])("%s", (input) => {
  parseString(input);
});
