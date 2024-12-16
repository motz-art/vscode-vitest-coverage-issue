import { test } from "vitest";
import { process } from "./index.js";

test.each(["error"])("%s", (input) => {
  process(input);
});
