---
comments: false
title: 九州大学 システム情報科学府 情報理工学専攻 2017年度 計算機アーキテクチャ
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻 2017年度 計算機アーキテクチャ


## **Author**
Zero

## **Description**
### 【問 1】
以下の真理値表で与えられた論理関数 $H(a, b, c, d)$ を図で示されるように $3$ つの関数 $G_1(a, b, c), G_2(a, b, c)$ および $F(d, g_1, g_2)$ を使って実現することを考える．図に示されるように，$g_1, g_2$ はそれぞれ関数 $G_1, G_2$ の出力に接続しているものとする．関数 $G_1$ の真理値表が以下の表で与えられる時，$F$ および $G_2$ の真理値表を示せ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2017_computer_architecture_p1.png" width="600" height="540" alt=""/>
</figure>

### 【問 2】
$5$ つのステージからなるパイプライン式データパスを有するマイクロプロセッサについて考える．実装されたパイプラインステージは，IF（命令取得），ID（命令デコード），EX（実行），MEM（メモリアクセス），ならびに，WB（ライトバック）である．加算命令とロードワード命令の実行における各ステージの処理内容は以下の表に従う．ここで，パイプラインストールの発生を除き，各パイプラインステージの実行は常に $1$ クロックサイクルで完了できると仮定する．また，WB ステージでレジスタに書き込まれた値は，同一クロックサイクルにて，後続命令の ID ステージで読み出し可能である．以下の各問いに答えよ．

| ステージ | 加算命令：add \$x, \$y, \$z | ロードワード命令：lw \$x, offset(\$y) |
|----------|--------------------------|----------------------------------|
| IF       | メモリより実行すべき命令を取得し，次命令取得のためにプログラム・カウンタを更新. | メモリより実行すべき命令を取得し，次命令取得のためにプログラム・カウンタを更新. |
| ID       | 命令の解読. レジスタファイルからレジスタ \$y ならびに \$z を読み出し. | 命令の解読. レジスタファイルからレジスタ \$y を読み出し. |
| EX       | \$y と \$z の加算を実行. | \$y と offset を加算しメモリアドレスを生成. |
| MEM      | 特に無し（加算結果を WB ステージへ転送）. | 生成したメモリアドレスに対応するワードデータをデータメモリから読み出し. |
| WB       | 加算結果をレジスタファイル内のレジスタ \$x に書き込み. | データメモリから読み出したデータをレジスタファイル内のレジスタ \$x に書き込み. |


(1) 以下に示すプログラムについて考える．各行においてシャープ記号から右はコメントである．プログラム中に存在するフロー依存関係について，どの命令が，どの命令のどのレジスタに関して依存しているかをすべて列挙せよ．

```text
 lw $2,  20($1)  # <1>
add $10, $1,$5   # <2>
add $12, $10,$2  # <3>
 lw $11, 40($1)  # <4>
add $15, $11,$2  # <5>
```

(2) 上記 (1) のフロー依存関係のうち，命令パイプライン処理で実行した際にデータハザードを生じさせるものを示せ．

(3) 上記 (2) のデータハザードを以下の方式によって対処した場合の上記 (1) のプログラムの実行に要するクロックサイクル数を求めよ．

- (A) パイプラインストールのみ
- (B) データフォワーディング＋パイプラインストール

(4) マイクロプロセッサの動作周波数は $1.0$ GHz であると仮定する．上記 (3) の (B) の方式を適用した場合，上記 (1) のプログラムの実行時間（単位はナノ秒）を答えよ．

(5) 上記 (3) に関して，(A) に対する (B) の性能向上比を答えよ．

### 【問 3】
コンピュータのメモリシステムについて，以下の各問いに答えよ．

(1) マイクロプロセッサに搭載されたフルアソシアティブ・キャッシュについて考える．ワードサイズは $4$ バイト，キャッシュ・サイズは $16$ バイト，ブロックサイズは $4$ バイト，アドレス長は $4$ ビットであり，キャッシュの初期状態は空とする．また，ブロック置換ポリシは LRU（Least Recently Used）アルゴリズムを採用する．以下に示すワードアドレス(2 進表現) に対してメモリアクセスが順次発生した場合のキャッシュ・ミス率を答えよ．

$0101 \Rightarrow 1111 \Rightarrow 1001 \Rightarrow 0101 \Rightarrow 0001 \Rightarrow 1100 \Rightarrow 1111 \Rightarrow 0101 \Rightarrow 0011 \Rightarrow 1100$

(2) あるプログラムを実行したところ，実行時間の $30$%がメモリへのアクセスに費やされることが分かった．そこで，ハードウェア設計を改善し，性能への悪影響を伴うこと無く，メモリアクセスを $3$ 倍高速にした．この改善により得られる性能向上率を求めよ．

## **Kai** 
### 【問 1】

|a b c\d|$G_1$|$G_2$|0|1|
|-|-|-|-|-|
|0 0 0|0|0|0|0|
|0 0 1|1|0|0|1|
|0 1 0|1|0|0|1|
|0 1 1|1|1|1|0|
|1 0 0|0|1|1|1|
|1 0 1|0|1|1|1|
|1 1 0|1|1|1|0|
|1 1 1|1|0|0|1|

$$
H = \overline{G_1}G_2 + G_1G_2\overline{d} + G_1\overline{G_2}d
$$

|a b c|$G_2$|
|-|-|
|0 0 0|0|
|0 0 1|0|
|0 1 0|0|
|0 1 1|1|
|1 0 0|1|
|1 0 1|1|
|1 1 0|1|
|1 1 1|0|

|d $g_1$ $g_2$|F|
|-|-|
|0 0 0|0|
|0 0 1|1|
|0 1 0|0|
|0 1 1|1|
|1 0 0|0|
|1 0 1|1|
|1 1 0|1|
|1 1 1|0|

### 【問 2】
#### (1)

<1> $\rightarrow$ <3> ($2) 

<2> $\rightarrow$ <3> ($10)

<1> $\rightarrow$ <5> ($2) 

<4> $\rightarrow$ <5> (11)$

#### (2)
TODO

#### (3)
TODO

#### (4)
TODO

#### (5)
TODO

### 【問 3】
#### (1)
TODO

#### (2)