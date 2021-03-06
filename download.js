import { writeData } from "./writeData.js";

const url = "https://io.sakacil.com/api/info/list";

const data = [];
const limit = 1000;
let offset = 0;
for (;;) {
  const req = { offset, limit };
  const d = await (await fetch(url + "?" + JSON.stringify(req))).json();
  console.log(d);
  for (const dd of d.data) {
    if (!dd.法人番号) {
      console.log("!!法人番号なし", dd);
      continue;
    }
    await Deno.writeTextFile("data/company/" + dd.法人番号 + ".json", JSON.stringify(dd, null, 2));
    data.push(dd);
  }
  if (d.length < limit) {
    break;
  }
  offset += d.length;
}
await writeData("data/company_all", data);
