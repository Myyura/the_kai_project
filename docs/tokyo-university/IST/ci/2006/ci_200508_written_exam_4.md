---
sidebar_label: 2005年8月実施 筆記試験 第4問
tags:
  - Tokyo-University
  - Computer-Science.Formal-Languages.Context-Free-Grammar
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2005年8月実施 筆記試験 第4問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065613id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2005_8_ci_istmajor_all.pdf)（日本語版の設問・図を確認）。

### 日本語

以下に示す情報システムに関する8項目から<u>4項目</u>を選択し、各項目を5～10行程度で説明せよ。必要に応じて例や図を用いてよい。

1) 関係データベースにおける結合 (join) 演算 (例を挙げて説明すること)．
2) OS やプログラムにおけるプロセスとスレッドの違い．
3) 文脈自由文法 (例を挙げて説明すること)．
4) コンピュータグラフィックス (CG) におけるグロー (Gouraud) シェーディングとフォン (Phone) シェーディング．
5) Web で標準的に使用される GIF と JPEG の画像符号化法．
6) 公開鍵暗号を用いたディジタル署名法．
7) 意味ネットワークによる知識表現法とその特徴 (例を挙げて説明すること)．
8) PID 制御と，$P, I, D$ 各要素の制御における役割．

### English
Select <u>four items</u> out of the following eight items concerning information systems, and explain each item in approximately 5~10 lines of text.
If necessary, use examples or figures.

1) “Join” operation in relational databases. (Explain with an example.)
2) The difference between “process” and “thread” in operating systems or programs.
3) Context-free grammar. (Explain with an example.)
4) “Gouraud shading” and “Phone shading” in computer graphics (CG).
5) Image coding schemes “GIF” and “JPEG” universally used in the WWW.
6) Digital Signature method using the public-key encryption.
7) Knowledge representation using the “Semantic Network”, and its feature. (Explain with an example.)
8) “PID control”, and the roles of its components: “$P$”, “$I$” and “$D$”．

### 题目描述

从下列八个信息系统相关主题中任选四个，每个用约 5～10 行说明；必要时可使用示例或图。

1. 关系数据库中的连接（join）运算，须举例说明。
2. 操作系统或程序中进程与线程的区别。
3. 上下文无关文法，须举例说明。
4. 计算机图形学中的 Gouraud 着色与 Phong 着色。
5. Web 常用的 GIF 与 JPEG 图像编码方法。
6. 使用公钥密码体制的数字签名方法。
7. 使用语义网络的知识表示方法及其特点，须举例说明。
8. PID 控制，以及比例 $P$、积分 $I$、微分 $D$ 三个环节在控制中的作用。

## **Kai**

以下は全8項目の解答例である。試験ではこのうち4項目を選ぶ。

### (1) 関係データベースの結合

結合は二つの関係の行を、指定した条件を満たす組にして一つの関係を作る演算である。例えば学生表 $S=\{(1,\mathrm{Aki}),(2,\mathrm{Mio})\}$ と成績表 $G=\{(1,80),(1,90),(3,70)\}$ を学生番号で内部結合すると、$(1,\mathrm{Aki},80),(1,\mathrm{Aki},90)$ を得る。関係代数では条件付き結合を $S\bowtie_\theta G=\sigma_\theta(S\times G)$ と表せる。対応する行がない学生2は内部結合では現れない。左外部結合なら学生2も残し、対応する成績を SQL の `NULL` で表す。結合は、正規化して別々に保持した情報を問い合わせ時に組み合わせるために用いられる。[PostgreSQL の結合の説明](https://www.postgresql.org/docs/16/tutorial-join.html)

### (2) プロセスとスレッド

プロセスは実行中のプログラムと、その仮想アドレス空間や資源を管理する単位である。異なるプロセスは通常、別々のアドレス空間をもち、データ交換にはパイプや共有メモリなどを使う。スレッドはプロセス内の実行の流れであり、プログラムカウンタ、レジスタ、スタックをそれぞれもつ。同じプロセスのスレッドはコード、ヒープ、開いているファイルなどの資源を共有する。共有により通信しやすい一方、同時アクセスには mutex などの同期が必要となる。プロセス分離は障害の影響を抑えやすく、スレッドは同一プロセス内の並行処理に向いている。

### (3) 文脈自由文法

文脈自由文法は $G=(V,\Sigma,P,S)$ で表し、非終端記号集合 $V$、終端記号集合 $\Sigma$、生成規則集合 $P$、開始記号 $S$ からなる。各規則は $A\to\alpha$ の形で、左辺が一つの非終端記号に限られる。周囲の記号によらず $A$ を $\alpha$ に置き換えられるため「文脈自由」という。例えば $S\to aSb\mid\varepsilon$ は $\{a^nb^n\mid n\ge0\}$ を生成する。$S\Rightarrow aSb\Rightarrow aaSbb\Rightarrow aabb$ が導出例である。入れ子構造を表現できるため、プログラミング言語の構文定義に用いられる。

### (4) Gouraud シェーディングと Phong シェーディング

Gouraud シェーディングは多角形の各頂点で照明計算を行い、得られた色や明るさを多角形内部で補間する。頂点ごとの照明計算で済むため計算量を抑えられる。反射のハイライトが頂点間にだけ現れる場合、それを表現できないことがある。Phong シェーディングは頂点法線を内部の各画素へ補間し、正規化した法線を用いて画素ごとに照明計算を行う。より滑らかな面や小さなハイライトを表現できるが、照明計算の回数は増える。Phong シェーディングという補間方法と、Phong の反射モデルは別の概念である。題文の “Phone” は “Phong” の表記として読む。[Cornell の頂点・画素シェーディング教材](https://www.cs.cornell.edu/courses/cs4620/2018fa/slides/11pipeline.pdf)

### (5) GIF と JPEG

GIF はパレットの色番号列を LZW 法で可逆圧縮する。各フレームのパレットは最大256色であり、減色して GIF 化する場合、その減色自体は情報を失う。少数色の図や文字などに向き、透明色や複数フレームのアニメーションを表せる。一般的な JPEG は画像を色成分に分け、8×8 ブロックの DCT、量子化、係数の符号化を行う。量子化や色差の間引きにより高い圧縮率を得るが、復元画像は原画像と完全には一致しない。写真に適する一方、強い圧縮では輪郭付近の乱れやブロック状の歪みが生じる。[GIF89a 仕様](https://www.w3.org/Graphics/GIF/spec-gif89a.txt)

### (6) 公開鍵によるディジタル署名

署名者は秘密署名鍵を保持し、対応する公開検証鍵を配布する。メッセージ $m$ から署名 $\sigma=\operatorname{Sign}(sk,m)$ を生成し、受信者は $\operatorname{Verify}(pk,m,\sigma)$ で検証する。署名方式では通常ハッシュ関数を用い、メッセージ全体への改変を検出できるようにする。公開鍵が署名者に正しく結び付いていれば、真正性と完全性を検証できる。署名だけでは本文を秘匿できず、秘密保持には別途暗号化が必要である。一般の署名を単に「秘密鍵で暗号化すること」と捉えるのは不正確であり、安全性を備えた署名方式を使う。[NIST の署名標準](https://csrc.nist.gov/pubs/fips/186-5/final)

### (7) 意味ネットワーク

意味ネットワークは概念や個体を節点、それらの意味的な関係をラベル付きの辺として表現する。例えば「チロ —instance-of→ 犬」「犬 —is-a→ 哺乳類」「哺乳類 —has-part→ 肺」と表せる。継承規則を定めれば、犬の個体について上位概念の性質を利用した推論ができる。関係を図で把握しやすく、概念の追加や相互関係の表現に向いている。一方、辺の意味と推論規則を定義しなければ、図だけから一意の論理的意味は得られない。例外、多重継承、否定などを扱う際には、表現形式に応じた規則の整備が必要である。

### (8) PID 制御

目標値と出力の偏差を $e(t)$ とし、制御入力を

$$
u(t)=K_Pe(t)+K_I\int_0^t e(\tau)\,d\tau+K_D\frac{de(t)}{dt}
$$

とするのが PID 制御である。P 項は現在の偏差に比例して応答する。I 項は偏差を蓄積し、閉ループが安定で操作量が制約されない場合には一定目標や一定外乱に対する定常偏差をなくすために働く。D 項は偏差の変化速度へ応答し、適切な調整によって減衰を加え、急な変化を抑える。I 項は操作量飽和時の過大な積分、D 項は測定雑音の増幅に注意が必要である。各ゲインを大きくすれば必ず改善するわけではなく、対象の動特性に応じて安定性と応答を調整する。
