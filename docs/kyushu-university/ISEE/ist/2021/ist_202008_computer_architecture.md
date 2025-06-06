---
sidebar_label: "2020年8月実施 計算機アーキテクチャ"
tags:
  - Kyushu-University
---
# 九州大学 システム情報科学府 情報理工学専攻 2020年8月実施 計算機アーキテクチャ


## **Author**
[Yu](https://blog.loveyou.moe/KU/%E4%B9%9D%E5%A4%A7%E6%83%85%E5%A0%B1%E7%90%86%E5%B7%A5%E5%AD%A6%E9%81%8E%E5%8E%BB%E5%95%8F%E3%81%AE%E8%A7%A3%E7%AD%94/)

## **Description**
### 【問 1】
与えられた真理値表で表される論理関数 $F(a, b, c, d)$ が以下の論理式を満たす時，論理関数 $G(X,Y,Z,W)$ の最簡積和形を示せ．ただし，最簡積和形とは積和形論理式のうち，積項数が最小のものを指す．積項数が等しい積和形論理式が複数ある場合にはそのなかでリテラル数が最小のものを指す．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_computer_architecture_p1.png" width="500" alt=""/>
</figure>

### 【問 2】
$5$ つのステージからなるパイプライン式データパスを有するマイクロプロセッサについて考える．実装されたパイプラインステージは，IF（命令取得），ID （命令デコード），EX（実行），MEM（メモリアクセス），ならびに，WB（ライトバック）である．以下の各問いに答えよ．

(1) IF，ID，EX，MEM，WB の遅延時間は，それぞれ，240 ps，400 ps，200 ps，250 ps，180 ps である．このデータパスの最大動作周波数を答えよ（単位は GHz）．

(2) IF，ID，EX，MEM，WB のいずれか $1$ つを $2$ つのステージに分割し，パイプラインステージ数を $5$ から $6$ へと増加することを考える．
ここで，分割された各パイプラインステージの遅延時間は，分割前のパイプラインステージの遅延時間の半分になると仮定する．
パイプラインの動作周波数を最大にするために分割すべきパイプラインステージを選択せよ．また，この設計最適化により達成できる最大動作周波数を答えよ（単位は GHz）．

(3) あるプログラムの実行において，上記 (2) のパイプラインステージの分割により CPI（Clock cycles Per Instruction）が 10% 増加した．
ここで，パイプラインステージ分割は CPI の増加以外の悪影響は生じないと仮定する．
このパイプラインステージ分割によって得られた性能向上比を答えよ．

(4) パイプライン段数を増加することの利点と欠点を説明せよ．

### 【問 3】
キャッシュタグ・フィールド，キャッシュインデックス・フィールド，キャッシュブロッ
クオフセット・フィールドからなる $32$ ビットのメモリアドレスを入力とするダイレク
トマップ・キャッシュメモリについて考える．バイトアドレッシング方式を採用してお
り， $1$ 語は $4$ バイト，キャッシュサイズは $16$ キロバイト，キャッシュブロックサイズは
32 バイトとする．キャッシュタグ・フィールドのビット幅を答えよ．

## **Kai** 
### 【問 1】
|a|b|c|d|X|Y|Z|W|F|
|-|-|-|-|-|-|-|-|-|
|0|0|0|0|1|0|0|0|0|
|0|0|0|1|1|0|1|0|0|
|0|0|1|0|0|1|0|1|0|
|0|0|1|1|1|0|1|1|1|
|0|1|0|0|0|0|1|1|0|
|0|1|0|1|0|0|1|0|1|
|0|1|1|0|0|1|0|1|0|
|0|1|1|1|0|1|0|1|0|
|1|0|0|0|0|1|0|0|1|
|1|0|0|1|1|1|1|0|1|
|1|0|1|0|0|0|0|0|1|
|1|0|1|1|1|1|1|1|0|
|1|1|0|0|1|1|0|0|1|
|1|1|0|1|0|0|1|1|0|
|1|1|1|0|1|0|0|0|0|
|1|1|1|1|0|1|0|1|0|

|X|Y|Z|W|G|
|-|-|-|-|-|
|0|0|0|0|1|
|0|0|0|1|x|
|0|0|1|0|1|
|0|0|1|1|0|
|0|1|0|0|1|
|0|1|0|1|0|
|0|1|1|0|x|
|0|1|1|1|x|
|1|0|0|0|0|
|1|0|0|1|x|
|1|0|1|0|0|
|1|0|1|1|1|
|1|1|0|0|1|
|1|1|0|1|x|
|1|1|1|0|1|
|1|1|1|1|0|

|XY\ZW|00|01|11|10|
|-|-|-|-|-|
|00|1|X||1|
|01|1||X|X|
|11|1|X||1|
|10||X|1||

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/ist_2021_computer_architecture_p2.png" width="400" alt=""/>
</figure>

$$
G = \overline{X} \overline{W} + Y\overline{W} + X\overline{Y}W
$$

### 【問 2】
#### (1)

$$
F_1 = \frac{1}{400 \times 10^{-12}}\text{ Hz} = 2.5\text{ GHz}
$$

#### (2)

$$
F_2 = \frac{1}{250 \times 10 ^{-12}}\text{ Hz} = 4\text{ GHz}
$$

#### (3)

$$
1.45
$$

#### (4)
利点:

1. クロック周波数の向上: パイプライン段数を増やすことで、各段の論理ゲート数が減り、クロックサイクルタイムが短くなります。その結果、クロック周波数が向上し、プロセッサの性能が向上する可能性があります。

2. 並列処理の向上: 各段が独⽴して動作するため、複数の命令が同時に処理されることができます。これにより、⾼い命令実⾏レートが達成され、システム全体のスループットが向上します。

3. 効率的なリソース利⽤: パイプライン段数が増えると、各リソース（ALU、レジスタファイル、キャッシュなど）がより効率的に使⽤される可能性があります。これにより、ハードウェアの消費電⼒やエネルギー効率が向上することがあります。

⽋点:

1. パイプラインハザード: パイプライン段数が増えると、データハザード、制御ハザード、構造ハザードなどのパイプラインハザードが発⽣しやすくなります。これらのハザードは、パイプラインの効率を低下させる可能性があります。
   
2. 複雑さの増加: パイプライン段数が増えると、回路設計や制御ロジックの複雑さが増します。これにより、設計や検証のコストが増加し、バグの発⽣リスクが⾼まる可能性があります。

3. レイテンシの増加: パイプライン段数が増えると、各命令の完了にかかる時間（レイテンシ）が⻑くなる可能性があります。これは、特にレイテンシに敏感なアプリケーションで問題となることがあります。

### 【問 3】
$18$