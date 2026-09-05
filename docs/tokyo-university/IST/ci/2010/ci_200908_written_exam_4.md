---
sidebar_label: '2009年8月実施 筆記試験 第4問'
tags:
  - Tokyo-University
  - Probability-Statistics.Probability-Basics.Bayes-Theorem
  - Data-Science-Artificial-Intelligence.Machine-Learning.Decision-Tree
  - Electrical-Electronic.Communications.Spread-Spectrum-Communication
  - Computer-Science.Databases.Relational-Database-Normalization
  - Computer-Science.Formal-Languages.Turing-Machine
  - Computer-Science.Computer-Architecture.Snooping-Cache-Coherence
  - Computer-Science.Programming.Unicode-Character-Encoding
  - Computer-Science.Security.User-Authentication-Methods
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2009年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065627id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2009_8_ci_istmajor_ja.pdf)。

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を4～8行程度で説明せよ。必要に応じて例や図を用いてよい。

1) ベイズの定理
2) 決定木の学習法
3) スペクトル拡散通信の原理と応用例
4) 関係データベースにおける正規化
5) チューリングマシン
6) スヌープキャッシュ
7) Unicode
8) ユーザ認証もしくは個人識別について，あわせて3種類の方法とその比較

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 4~8 lines of text.
If necessary, use examples or figures.

1) Bayes' Theorem
2) Learning method for decision trees (Decision tree learning method)
3) Spread-spectrum telecommunications and its applications
4) Normalization in relational databases
5) Turing machine
6) Snoop cache
7) Unicode
8) Three user authentication or personal identification techniques and a comparative analysis

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 4～8 行说明；必要时可使用示例或图。

1. 贝叶斯定理。
2. 决策树学习方法。
3. 扩频通信的原理及应用实例。
4. 关系数据库规范化。
5. 图灵机。
6. 监听式缓存（snooping cache）。
7. Unicode。
8. 合计介绍三种用户认证或个人识别方法，并进行比较。

## **Kai**


### (1) Bayes' theorem

ベイズの定理は、観測結果を得た後の仮説の確率を、尤度と事前確率から求める公式である。互いに排他的で全体を尽くす仮説 $H_1,\ldots,H_k$ と $P(D)>0$ の観測 $D$ に対し、

$$P(H_i\mid D)=\frac{P(D\mid H_i)P(H_i)}{\sum_jP(D\mid H_j)P(H_j)}.$$

分母は全確率の公式による正規化項であり、事後確率の和を1にする。同じ観測への尤度が大きくても、事前確率が非常に小さければ事後確率が大きいとは限らない。分類、状態推定、観測からの仮説更新などに利用される。

### (2) Decision tree learning

決定木は、内部ノードで特徴量に関する条件を判定し、葉でクラスや予測値を返すモデルである。学習では、候補となる分割についてエントロピーやGini不純度等の減少を比較し、よい分割を再帰的に選ぶ。例えば数値特徴なら $x_j<t$ を満たす標本とそれ以外に分ける。各葉の分類結果には多数クラス、回帰結果には平均値などを用いる。細かく分割しすぎると過学習するため、深さ・葉の標本数を制限したり、検証データを用いて剪定したりする。この貪欲な手続きが全ての木の中で大域的に最適な木を求めるとは限らない。

### (3) Spread-spectrum telecommunications

スペクトル拡散通信は、情報信号をそのまま送る場合より広い周波数帯域へ拡散して送信する方式である。直接拡散では、情報ビットより高速な既知の符号系列を掛け合わせ、受信側は同期した同じ系列との相関によって元の信号を取り出す。帯域の一部に集中した妨害の影響を抑えたり、異なる拡散符号による多元接続を行ったりできる。GPS信号やCDMA方式が応用例である。周波数ホッピングのように搬送周波数を系列に従って切り替える方式もある。符号同期・電力制御・相互干渉が重要であり、拡散だけで暗号学的な秘匿性が保証されるわけではない。

### (4) Normalization in relational databases

正規化は、関数従属性などに基づいて関係を分解し、データの重複や更新・挿入・削除に伴う異常を減らす設計手法である。例えば `Employee(emp_id, dept_id, dept_name)` で `emp_id -> dept_id`、`dept_id -> dept_name` が成立すると、同じ部署名が多数の従業員行に重複する。これを `Employee(emp_id, dept_id)` と `Department(dept_id, dept_name)` へ分ければ、部署名の変更は1か所で済む。この分解は共通属性 `dept_id` が後者のキーなので無損失結合できる。第三正規形やBCNF等の条件を検討し、分解の際には情報を失わないことと必要な従属性を検査できることを確認する。正規化の程度と実行時の結合コストとの調整も必要である。

### (5) Turing machine

チューリングマシンは、有限個の内部状態をもつ制御部、記号を記録するテープ、読書きヘッドからなる計算モデルである。遷移規則は現在状態と読んだ記号に応じて、書く記号、ヘッドの移動方向、次状態を定める。利用できるテープ領域を有限の上限で制限しないことで、任意に大きい入力や作業記憶を扱う。入力を受理・拒否して停止する場合もあれば、停止しない場合もある。通常のアルゴリズムの計算可能性を論じる基準となり、他の機械の記述を入力として模擬する万能機械も構成できる。ただし全ての問題を解けるわけではなく、一般の停止問題は決定不能である。

### (6) Snoop cache

スヌープ方式では、各キャッシュの制御器が共有バス等のトランザクションを監視し、他のプロセッサによる読出し・書込みに応じて自分のラインの状態を変える。例えば書込みの所有権を取得するとき、同じラインを持つ他のキャッシュへ無効化を通知する。変更済みのデータを保持するキャッシュが要求に応じて最新データを供給することもある。MESIなどの状態プロトコルにより、同じアドレスの複数コピーの整合性を管理する。全体へ通知する通信量が増えやすく、大規模化ではバスやブロードキャストが制約になる。キャッシュコヒーレンスは、異なるアドレス間のアクセス順序まで規定するメモリ一貫性モデルとは区別される。

### (7) Unicode

Unicodeは、多言語の文字を共通の符号位置と文字属性で表現する文字符号化標準である。例えば `A` の符号位置は `U+0041` であり、表示する具体的な字形やフォントとは区別される。UTF-8、UTF-16、UTF-32はUnicodeの文字を符号単位列にする異なる符号化形式であり、Unicode全体を単に「16ビット文字コード」と呼ぶのは正確ではない。UTF-8は1〜4バイト、UTF-16は1または2個の16ビット符号単位でUnicodeスカラー値を表す。結合文字列のように、利用者が1文字と見るものが複数の符号位置からなることもある。正規化や文字境界の扱いも含め、文字列処理では符号単位・符号位置・書記素を区別する。[Unicode Consortium の技術解説](https://www.unicode.org/standard/principles.html)に符号化形式と字形の区別が説明されている。

### (8) Three authentication or identification techniques

| 方法 | 例・利点 | 制約 |
|---|---|---|
| 知識による認証 | パスワードやPIN。導入が容易で、漏えい後に変更できる | 推測・使い回し・入力先の偽装への対策が必要 |
| 所持による認証 | 秘密鍵を保持するカードやセキュリティキーでチャレンジへ応答する。記憶に依存せず、秘密鍵自体を送らずに確認できる | 紛失・盗難や再発行を管理する必要があり、単なるワンタイムコードにはフィッシングの問題が残る |
| 生体特徴による識別・照合 | 指紋や顔を登録テンプレートと比較する。専用の記憶事項を要さず、利用者に結び付けやすい | 誤受入れ・誤拒否、偽造への耐性、プライバシーを考慮する。特徴そのものは容易に変更できない |

識別は「誰か」を候補集合から求める処理、認証は主張された利用者であることを確認する処理である。異なる要素を組み合わせると、一つの要素だけが失われた場合への耐性を高められる。実際の保証は登録・復旧・通信経路も含む方式全体で決まり、生体照合の結果だけで秘密の所持が証明されるわけではない。[NISTの認証指針](https://pages.nist.gov/800-63-4/sp800-63b.html)はこれらの認証要素と認証器の扱いを区別している。
