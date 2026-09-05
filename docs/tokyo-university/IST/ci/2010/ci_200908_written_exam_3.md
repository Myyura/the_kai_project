---
sidebar_label: 2009年8月実施 筆記試験 第3問
tags:
  - Tokyo-University
  - Electrical-Electronic.Digital-Logic.Half-and-Full-Adders
  - Electrical-Electronic.Digital-Logic.Combinatorial-Circuit
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2009年8月実施 筆記試験 第3問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

出典：[大学公式問題冊子の保存版](https://web.archive.org/web/20151118065627id_/http://i-web.i.u-tokyo.ac.jp/edu/course/ci/pdf/2009_8_ci_istmajor_ja.pdf)。
Design a multiplier whose inputs are two 3-bit numbers and the output is a 6-bit number according to the following steps.

(1) Show the truth-table of the full adder and the half adder shown in Figure 1. Then construct them using AND, OR and NOT gates.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_3_p1.png" width="500" alt=""/>
</figure>

(2) Design the 4-bit adder shown in Figure 2 using the adders designed in question (1) with additional AND, OR and NOT gates.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_3_p2.png" width="500" alt=""/>
</figure>

(3) Design a 3-bit by 3-bit multiplier that produces 6-bit output using adders from (1) and (2) with additional AND, OR and NOT gates. Inputs for the multiplier are two unsigned 3-bit integers and the output is an unsigned 6-bit integer as shown in Figure 3.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_3_p3.png" width="500" alt=""/>
</figure>

(4) Design a 3-bit by 3-bit multiplier that produces 6-bit output using adders from (1) and (2) with additional AND, OR and NOT gates. The inputs of the multiplier are two signed 3-bit integers and the output is a signed 6-bit integer as shown in Figure 4. Two's complement numbers are used both in inputs and the output numbers.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_200908_3_p4.png" width="500" alt=""/>
</figure>

(5) Describe the construction of an $N$-bit by $N$-bit multiplier whose computation time is $O(\log N)$.

### 题目描述

按以下步骤设计一个输入为两个 3 位数、输出为 6 位数的乘法器，所需结构图沿用原文图 1～4。

1. 写出图 1 中全加器与半加器的真值表，并仅用与门、或门、非门实现二者。
2. 使用第 1 问设计的加法器，并可增加与门、或门、非门，设计图 2 所示的 4 位加法器。
3. 使用第 1、2 问的加法器并可增加上述逻辑门，设计 3 位乘 3 位、输出 6 位的无符号乘法器；两个输入均为无符号 3 位整数，输出为无符号 6 位整数，如图 3。
4. 同样设计 3 位乘 3 位、输出 6 位的有符号乘法器；输入为有符号 3 位整数，输出为有符号 6 位整数，输入和输出均采用二进制补码表示，如图 4。
5. 说明如何构造计算时间为 $O(\log N)$ 的 $N$ 位乘 $N$ 位乘法器。



## **Kai**

以下では各ビットを0または1とし、$\oplus$ はXORを表す。XORは専用ゲートを仮定せず、

$$x\oplus y=(x\land\bar y)\lor(\bar x\land y)$$

によりAND・OR・NOTで構成する。

### (1)

半加算器の真理値表と論理式は次の通り。

| $X$ | $Y$ | $Z$ | $CO$ |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

$$\boxed{Z=X\oplus Y,\qquad CO=X\land Y}.$$

全加算器は次の通り。

| $X$ | $Y$ | $CI$ | $Z$ | $CO$ |
|---|---|---|---|---|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 |

$$
\boxed{Z=X\oplus Y\oplus CI,\qquad
CO=(X\land Y)\lor(X\land CI)\lor(Y\land CI)}.
$$

$S=X\oplus Y$ として、半加算器1で $(X,Y)$、半加算器2で $(S,CI)$ を加え、それぞれの桁上がりをORしても同じ回路になる。

### (2)

全加算器4個を下位ビットから順に接続する。$c_0=CI$ とし、$i=0,1,2,3$ について

$$(Z_i,c_{i+1})=\mathrm{FA}(X_i,Y_i,c_i),\qquad CO=c_4$$

とする。

```text
CI=c0 -> FA0 -> c1 -> FA1 -> c2 -> FA2 -> c3 -> FA3 -> c4=CO
          ↑           ↑           ↑           ↑
        X0,Y0       X1,Y1       X2,Y2       X3,Y3
          ↓           ↓           ↓           ↓
          Z0          Z1          Z2          Z3
```

各段で $X_i+Y_i+c_i=Z_i+2c_{i+1}$ だから、重み $2^i$ を掛けて足すと

$$X+Y+CI=Z+16CO$$

となる。これはリップルキャリー加算器であり、4ビットの場合は最大4段の桁上がり伝搬を要する。

### (3)

$X=X_0+2X_1+4X_2$, $Y=Y_0+2Y_1+4Y_2$ とし、9個のANDで部分積 $p_{ij}=X_i\land Y_j$ を作る。6ビットの3行を上位から順に

$$
\begin{aligned}
A&=(0,0,0,p_{20},p_{10},p_{00}),\\
B&=(0,0,p_{21},p_{11},p_{01},0),\\
C&=(0,p_{22},p_{12},p_{02},0,0)
\end{aligned}
$$

と接続する。これはそれぞれ $X Y_0$, $2X Y_1$, $4X Y_2$ である。6ビット加算器2個で

$$\boxed{Z=(A+B)+C}$$

を得る。6ビット加算器は(2)の4ビット加算器の桁上がり出力へ全加算器2個を追加すれば構成でき、最初の桁上がり入力を0にする。

```text
X[2:0],Y0 -- 3 AND, shift 0 --> A --+
                                  +--> ADD6 --+
X[2:0],Y1 -- 3 AND, shift 1 --> B --+           +--> ADD6 --> Z[5:0]
X[2:0],Y2 -- 3 AND, shift 2 --> C --------------+
```

最大積は $7\cdot7=49<64$ なので6ビットに収まる。固定ビット位置へのシフトは配線だけで実現する。

### (4)

まず入力の絶対値を3ビット**符号なし数**として求め、(3)を利用する方法を採る。$s_X=X_2$, $s_Y=Y_2$ を符号ビットとし、

$$
U=\bigl((X\oplus(s_Xs_Xs_X))+s_X\bigr)\bmod8,\qquad
V=\bigl((Y\oplus(s_Ys_Ys_Y))+s_Y\bigr)\bmod8
$$

とする。括弧内の3ビット列は同じ符号ビットを3本に配ったものを表す。XORはAND/OR/NOTで、加算は全加算器で実現できる。負なら反転して1を足し、非負なら元の値を通す。$-4$ の入力100も $U=100$、すなわち符号なしの4となるので扱える。

(3)で $W=UV$ を6ビットとして求め、$s=s_X\oplus s_Y$ として

$$\boxed{Z=\bigl((W\oplus(ssssss))+s\bigr)\bmod64}$$

を出力する。最終段は6個の条件付き反転器と、桁上がり入力 $s$ を使って0を加える6ビット加算器で構成する。積が負なら6ビットの2の補数にし、それ以外は正の値のままになる。入力範囲は $-4\le X,Y\le3$、積は $-12\le XY\le16$ なので出力範囲 $[-32,31]$ を超えない。0に対する条件付き反転加算も0となる。

### (5)

まず $N^2$ 個のANDを並列に用いて $N$ 行の部分積を作る。これらをWallace木などのキャリーセーブ加算器（3:2圧縮器）の木で2行へ圧縮する。各ビット位置の全加算器は3個の入力ビットを和ビットと1桁上の桁上がりビットへ変えるだけで、その段では横方向の桁上がりを伝搬しない。そのため1段の遅延は定数で、行数はほぼ $2/3$ 倍ずつ減り、2行になるまで $O(\log N)$ 段で済む。

最後の2行は、生成・伝搬信号の並列接頭辞回路を用いた $2N$ ビット加算器で加える。この最終加算も $O(\log N)$ なので、全体の遅延は $\boxed{O(\log N)}$ となる。最後を通常のリップルキャリー加算器にすると $O(N)$ となり、要求を満たさない。符号付き入力も、(4)の絶対値変換と最後の条件付き補数演算を並列接頭辞加算で行えば、同じ漸近遅延を実現できる。
