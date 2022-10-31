# 堺市 企業オープンデータ

- [APIで取得した、さかしるデータ (CSV)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_all.csv) [(JSON)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_all.json)  [(CBOR)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_all.cbor)
- [APIで取得した、さかしるデータ（画像のみ） (CSV)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_images.csv) [(JSON)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_images.json) [(CBOR)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_images.cbor) *CSV 店舗・事務所情報はJSON形式の文字列
- [支援オープンデータ](https://io.sakacil.com/opendata/support.csv)

## API

### 堺市 企業オープンデータ取得API

- https://io.sakacil.com/api/info/list?{"offset":0,"limit":100}
- offset: オフセット
- limit: 取得件数
- order: "moddate" を指定すると更新順 （指定しないと法人番号順）

## ライセンス

- 本データは、CC BY、ODC-By、ODbL のいずれかに従ってご利用いただけるオープンデータです。
- 出典表示例「出典: 堺市 企業オープンデータ by [さかしる](https://sakacil.com/)」

## API使用例

- [さかしるガチャ](https://codeforosaka.github.io/sakai-biz-opendata-sample-app/)
- [大阪堺市の企業フォト巡り](https://code4fukui.github.io/bizmegly/sakai.html)
