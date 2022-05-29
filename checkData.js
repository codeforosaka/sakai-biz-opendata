import { CSV } from "https://js.sabae.cc/CSV.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

const fn = "data/company_all.csv";
const data = CSV.toJSON(await CSV.fetch(fn));
const cid = data.map(d => d.法人番号);
const cid2 = ArrayUtil.toUnique(cid);
console.log(cid, cid.length, cid2.length); // 23907 18778 おかしい

//console.log(data[0])
