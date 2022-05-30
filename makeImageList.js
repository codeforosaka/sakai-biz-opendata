import { CSV } from "https://js.sabae.cc/CSV.js";
import { writeData } from "./writeData.js";

const fn = "data/company_all.csv";
const data = CSV.toJSON(await CSV.fetch(fn));
const imgs = [];
const sel = ["企業紹介画像①", "企業紹介画像②", "企業紹介画像③"];
data.forEach(d => {
  for (const c of sel) {
    if (d[c]?.length > 0) {
      imgs.push({ name: d["法人名"], companyId: d["法人番号"], image: d[c] });
    }
  }
});
imgs.sort((a, b) => a.companyId.localeCompare(b.companyId));
await writeData("data/company_images", imgs);
