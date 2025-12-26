---
sidebar_label: '2006年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2006年8月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**
センサからデータを入力し，演算を行うコンピュータシステムについて，以下の問いに答えよ．

(1) このようなコンピュータシステムの例を図 $1$ に示す．このコンピュータシステムを用いて，$16$ 個のセンサからのデータ $x_i$ ($i=1, 2, \dots, 16$) を入力し，演算 $y_i = f(x_i)$ ($i=1, 2, \dots, 16$) を一度だけ行う場合，この処理を最小時間で実行するプログラムの時間ダイアグラムを示し，その動作の概略を説明せよ．また，この処理に必要となる時間 $t_a$ を求めよ．ただし，ここで用いられている回路ブロックの遅延特性 $t_{\text{MUX}}, t_{\text{SH}}, t_{\text{AD}}, t_{\text{COMP}}$ は，それぞれ，

$t_{\text{MUX}}$：アナログマルチプレクサにおける入力選択信号 $s_{\text{MUX}}$ の確定からアナログ出力 $v_{\text{MUX}}$ の確定までの遅延時間
$t_{\text{SH}}$：サンプルホールドにおけるホールド信号 $s_{\text{SH}}$ の確定からアナログ出力 $v_{\text{SH}}$ の確定までの遅延時間
$t_{\text{AD}}$：AD コンバータにおける変換開始信号 $s_{\text{AD}}$ の確定からデジタルパラレル出力 $x_i$ の確定までの遅延時間
$t_{\text{COMP}}$：コンピュータ上で，デジタルパラレル入力 $x_i$ の確定から演算 $y_i = f(x_i)$ の終了までの演算時間

を表し，これら以外の遅延はすべて無視できるものとする．また，便宜上，これらの遅延は一定で，$t_{\text{MUX}} < t_{\text{SH}} < t_{\text{AD}} < t_{\text{COMP}}$ であると仮定する．なお，図に示されている回路以外の回路は適切に処理されているものとして解答では考慮しなくてよい．

(2) $16$ 個のセンサからのデータを入力し，得られたデータ $x_i$ に対して所定の演算 $y_i = f(x_i)$ ($i=1, 2, \dots, 16$) を行う処理を繰り返し実行することを考える．ただし，図 $1$ で回路ブロックとして用いられているアナログマルチプレクサ，サンプルホールド，AD コンバータ，コンピュータはいくつでも使えるものとし，コンピュータのデジタルパラレル入力並びにデジタルパラレル出力は必要なビット数を使えるものとして，以下の問いに答えよ．なお，コンピュータシステムの概略を示す際には，これらの回路ブロックのみを用いて解答するものとし，簡単のため，$t_{\text{MUX}} = t_{\text{SH}} = 0$，コンピュータ間の通信にかかる時間は無視できるものとする．

(2-1) $t_{\text{AD}} < t_{\text{COMP}}$ の場合，この繰り返しのサイクルタイムを最小とする回路のなかで，用いる AD コンバータの数が最小となるコンピュータシステムの概略を示し，実行するプログラムの時間ダイアグラムを示せ．また，必要となる AD コンバータの数を $t_{\text{AD}}$ と $t_{\text{COMP}}$ の関係から導け．ただし，コンピュータは処理内容にかかわらず，任意の時刻で入出力命令の実行が可能であると仮定してよい．

(2-2) $t_{\text{AD}} > t_{\text{COMP}}$ の場合，この繰り返しのサイクルタイムを最小とする回路のなかで，用いるコンピュータの数が最小となるコンピュータシステムの概略を示し，実行するプログラムの時間ダイアグラムを示せ．また，必要となるコンピュータの数を $t_{\text{AD}}$ と $t_{\text{COMP}}$ の関係から導け．

(3) センサからのデータの入力を伴う並列処理システムを実際に設計する際，一般的に留意すべき事項を $300$ 字以内で述べよ．

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_2_p1.png" width="600" alt=""/>
</figure>

## **Description (English)**
Answer the following questions about computer systems which carry out some operations on sensor data.

(1) Figure 1 shows a sample configuration of such a computer system. In the case that the system inputs sensor data $x_i$ ($i = 1, 2, \dots, 16$) and computes $y_i = f(x_i)$ ($i = 1, 2, \dots, 16$) for each sensor data $x_i$ only once, show the time diagram for the program which minimizes the time for the whole operation, and describe the outline of the program. In addition, calculate the time $t_a$ needed for the whole operation. Delay times of the circuit blocks used in Figure 1 are defined as:

$t_{\text{MUX}}$: Delay time of the analog multiplexer from the settled time of the input select signal $s_{\text{MUX}}$ to the settled time of analog output $v_{\text{MUX}}$,
$t_{\text{SH}}$: Delay time of the sample-and-hold from the settled time of hold signal $s_{\text{SH}}$ to the settled time of analog output $v_{\text{SH}}$,
$t_{\text{AD}}$: Delay time of the A/D converter from the settled time of conversion start signal $s_{\text{AD}}$ to the settled time of signal parallel output $x_i$,
$t_{\text{COMP}}$: Computation time for $y_i = f(x_i)$ after the digital parallel input $x_i$ is settled.

Ignore other delays except the above defined delay times. Suppose that these delay times are constant and $t_{\text{MUX}} < t_{\text{SH}} < t_{\text{AD}} < t_{\text{COMP}}$. Since you may suppose that the circuits other than those shown in Figure 1 are designed appropriately, you may not consider those in your answer.

(2) Consider iterative operations in which sensor data $x_i$ ($i = 1, 2, \dots, 16$) are input and $y_i = f(x_i)$ ($i = 1, 2, \dots, 16$) for each sensor data $x_i$ are computed periodically. Suppose that you can use any number of analog multiplexers, sample-and-holds, A/D converters, and computers used in Figure 1, but no other circuits. Also, suppose that you can use any number of bits of the digital parallel input and the digital parallel output. Answer the following questions. To simplify the condition, suppose $t_{\text{MUX}} = t_{\text{SH}} = 0$, and assume that the time for communication between computers is zero.

(2-1) In case of $t_{\text{AD}} < t_{\text{COMP}}$, show the configuration of a computer system which minimizes the cycle time of the iterative operations with the minimum number of A/D converters. In addition, show the time diagram of the program for the computer system and describe the number of necessary A/D converters as a function of $t_{\text{AD}}$ and $t_{\text{COMP}}$. In your answer, you may suppose that a computer can carry out input/output operation at any time even if the computer runs any other programs.

(2-2) In case of $t_{\text{AD}} > t_{\text{COMP}}$, show the configuration of a computer system which minimizes the cycle time of the iterative operations with the minimum number of computers. In addition, show the time diagram of the program for the computer system and describe the number of necessary computers as a function of $t_{\text{AD}}$ and $t_{\text{COMP}}$.

(3) Describe general important points, within about 100 words, for the design of actual parallel processing systems which manipulate sensor data inputs.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200608_2_p1_en.png" width="600" alt=""/>
</figure>