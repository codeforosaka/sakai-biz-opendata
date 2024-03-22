# 堺市 企業オープンデータ

- [APIで取得した、さかしるデータ (CSV)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_all.csv)
<!--  [(JSON)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_all.json)
-  [(CBOR)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_all.cbor) -->
- [APIで取得した、さかしるデータ（画像のみ） (CSV)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_images.csv)
<!--   [(JSON)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_images.json)
-   [(CBOR)](https://codeforosaka.github.io/sakai-biz-opendata/data/company_images.cbor) *CSV 店舗・事務所情報はJSON形式の文字列 -->
- [支援オープンデータ 堺市支援センター](https://io.sakacil.com/opendata/support.csv)
- [支援オープンデータ 大阪府（堺市支援センター入力）](https://io.sakacil.com/opendata/support_osaka.csv)
<!--  じばしんから削除要望あったため削除 2024/1/29　岡部 -->
- [支援オープンデータ 国（堺市支援センター入力）](https://io.sakacil.com/opendata/support_japan.csv)
<!--  じばしんから削除要望あったため削除 2024/1/29　岡部 -->

## API

### 堺市 企業オープンデータ取得API
<!--  クエリパラメーター説明を追加 2024/1/29　岡部 -->
**さかしるAPIで用意されているクエリパラメーターは3つ**  
  
① offset: オフセット 何件目以降のデータを取得するかの件数を数字で指定  
② limit: 取得件数　何件の企業情報を取得するかを数字で指定  
③ order: "moddate" を指定すると更新順 （指定しないと法人番号順)  
クエリパラメーターが不正な場合は offset:0 limit:3000 order:法人番号順　が取得される  
  
**取得URL例**  
https://io.sakacil.com/api/info/list?{"offset":0,"limit":100}  
法人番号順に100件の企業情報を取得する  
  
https://io.sakacil.com/api/info/list?{"offset":7,"limit":70,"order":"moddate"}  
更新順に、前7件を省いた70件の企業情報を取得する  
  
## ライセンス

- 本データは、CC BY、ODC-By、ODbL のいずれかに従ってご利用いただけるオープンデータです。
- 出典表示例「出典: 堺市 企業オープンデータ by [さかしる](https://sakacil.com/)」

## API使用例

- [さかしるガチャ](https://codeforosaka.github.io/sakai-biz-opendata-sample-app/)
- [大阪堺市の企業フォト巡り](https://code4fukui.github.io/bizmegly/sakai.html)
