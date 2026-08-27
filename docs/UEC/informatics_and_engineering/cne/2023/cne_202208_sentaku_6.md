---
sidebar_label: 2022年8月実施 選択問題 計算機の基本原理
tags:
  - University-of-Electro-Communications
  - Electrical-Electronic.Digital-Logic.Combinatorial-Circuit
  - Electrical-Electronic.Digital-Logic.Half-and-Full-Adders
  - Electrical-Electronic.Digital-Logic.Signed-Addition-Subtraction-and-Overflow-Detection
---
# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2022年8月実施 選択問題 計算機の基本原理

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

西暦 2019--2099 年の下 2 桁と令和の年を相互変換する論理回路を考える。2 の補数による定数加減算を示し、必要なビット数、全加算器だけによる西暦から令和への変換回路、その簡単化、および切替信号付き双方向変換回路を構成せよ。

### 题目描述

设计公历 2019--2099 年后两位与令和年份之间的双向转换电路：用二进制补码完成常数加减，确定位宽，以全加器实现并化简指定级，最后加入方向控制信号。

## **Kai**

### (1)

令和の年は西暦下 2 桁から $18$ を引けばよい。7 ビットで表すと、

$$
22-18=22+\overline{18}+1
$$

であり、

$$
\begin{array}{r}
0010110\\
+\ 1101101\\
+\ 0000001\\ \hline
1\ 0000100
\end{array}
$$

となる。最上位の桁上がりを捨てて、

$$
\boxed{0000100_2=4}
$$

を得る。

### (2)

西暦 2019 年は令和 1 年、西暦 2099 年は令和 81 年である。したがって入力可能範囲は

$$
\boxed{0000001_2\leq r\leq1010001_2}
$$

であり、必要な最小ビット数は $7$ である。

### (3)

$18=0010010_2$ の 1 の補数

$$
(k_6\cdots k_0)=1101101
$$

を定数入力とし、最下位の桁上がり入力を $c_0=1$ とする。第 $i$ 全加算器への入力を $(x_i,k_i,c_i)$、和出力を $y_i$、桁上がりを $c_{i+1}$ として 7 個を直列接続し、$c_7$ は捨てる。

~~~mermaid
flowchart LR
  C0["c0=1"] --> F0["FA0<br/>(x0, k0=1)"]
  F0 -->|"c1"| F1["FA1<br/>(x1, k1=0)"]
  F1 -->|"c2"| F2["FA2<br/>(x2, k2=1)"]
  F2 -->|"c3"| F3["FA3<br/>(x3, k3=1)"]
  F3 -->|"c4"| F4["FA4<br/>(x4, k4=0)"]
  F4 -->|"c5"| F5["FA5<br/>(x5, k5=1)"]
  F5 -->|"c6"| F6["FA6<br/>(x6, k6=1)"]
  F0 -->|"S"| Y0["y0"]
  F1 -->|"S"| Y1["y1"]
  F2 -->|"S"| Y2["y2"]
  F3 -->|"S"| Y3["y3"]
  F4 -->|"S"| Y4["y4"]
  F5 -->|"S"| Y5["y5"]
  F6 -->|"S"| Y6["y6"]
~~~

これにより $y\equiv x-18\pmod{128}$ となり、指定範囲では通常の差 $x-18$ に一致する。

### (4)

$i=0$ では入力が $(x_0,1,1)$ なので、

$$
\boxed{y_0=x_0,\qquad c_1=1}.
$$

したがって配線だけでよい。

~~~mermaid
flowchart LR
  X0["x0"] --> Y0["y0"]
  ONE["1"] --> C1["c1"]
~~~

$i=4$ では入力が $(x_4,0,c_4)$ なので、

$$
\boxed{y_4=x_4\oplus c_4,\qquad c_5=x_4c_4}.
$$

~~~mermaid
flowchart LR
  X4["x4"] --> XO["XOR"]
  C4["c4"] --> XO
  XO --> Y4["y4"]
  X4 --> AN["AND"]
  C4 --> AN
  AN --> C5["c5"]
~~~

### (5)

$m=\overline t$ とし、$18$ の第 $i$ ビットを $b_i$ とする。各全加算器の定数側入力を

$$
z_i=b_i\oplus m
=\begin{cases}
t,&i=1,4,\\
\overline t,&i=0,2,3,5,6,
\end{cases}
$$

とし、$c_0=m$ として (3) と同じ 7 段の全加算器へ入力する。

~~~mermaid
flowchart LR
  T["t"] --> N["NOT"]
  N --> M["m"]
  T --> Z1["z1,z4"]
  M --> Z0["z0,z2,z3,z5,z6"]
  X["x[6:0]"] --> R["7 段 ripple FA"]
  Z1 --> R
  Z0 --> R
  M -->|"c0"| R
  R --> Y["y[6:0]"]
~~~

- $t=0$ では $z=\overline{18}$、$c_0=1$ なので $y=x-18$。
- $t=1$ では $z=18$、$c_0=0$ なので $y=x+18$。

したがって、全加算器と $m=\overline t$ を作る 1 個の NOT ゲートだけで双方向変換を実現できる。
