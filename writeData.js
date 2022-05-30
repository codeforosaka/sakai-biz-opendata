import { CSV } from "https://js.sabae.cc/CSV.js";
import { CBOR } from "https://js.sabae.cc/CBOR.js";

export const writeData = async (fn, data) => {
  await Deno.writeTextFile(fn + ".csv", CSV.stringify(data));
  await Deno.writeTextFile(fn + ".json", JSON.stringify(data, null, 2));
  await Deno.writeFile(fn + ".cbor", CBOR.encode(data));
};
