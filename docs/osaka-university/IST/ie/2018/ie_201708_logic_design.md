---
sidebar_label: 2018年度 論理設計
tags:
  - Osaka-University
  - Electrical-Electronic.Digital-Logic
---
# 大阪大学 情報科学研究科 情報工学 2018年度 論理設計

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
3 bitの2の補数整数 $A=(a_2,a_1,a_0)$, $B=(b_2,b_1,b_0)$ から、符号なし3 bit整数 $F=|A-B|=(f_2,f_1,f_0)$ を求める。まず4 bitに符号拡張して $A',B'$ とし、$T=A'-B'=(t_3,t_2,t_1,t_0)$ を計算する。

- (1-1) $A=011,B=010$ と、$A=101,B=010$ の場合の $A',B',T,F$ を求めよ。
- (1-2) 拡張された符号ビット $a_3,b_3$ を表せ。
- (1-3) 4個の全加算器 $FA_i$（$i=0,1,2,3$）の和出力を $s_i$、桁上げ出力を $c_i$ とし、$t_i=s_i$ とする。各入力 $x_i,y_i,z_i$ を $a_i,b_i$（$i=0,1,2,3$）、$s_j,c_j$（$j=0,1,2$ かつ $j<i$）および0,1を用いた論理式で表せ。
- (1-4) $f_2,f_1,f_0$ の最簡積和形を $t_3,t_2,t_1,t_0$ で表せ。

## **Kai**
(1-1)

|$A,B$|$A'$|$B'$|$T$|$F$|
|---|---|---|---|---|
|011,010|0011|0010|0001|001|
|101,010|1101|0010|1011|101|

(1-2) $\boxed{a_3=a_2,\ b_3=b_2}$。

(1-3) $A'-B'=A'+\overline{B'}+1$ より

$$
\boxed{x_i=a_i,\quad y_i=\overline{b_i},\quad z_0=1,\quad z_i=c_{i-1}\ (i=1,2,3)}.
$$

(1-4) $-7\le T\le7$ なので $T=1000$ はドントケアとしてよい。2の補数を符号に応じて絶対値に直し、論理式を簡単化すると

$$
\boxed{\begin{aligned}
f_2&=t_2\overline{t_3}+\overline{t_2}t_3+t_2\overline{t_1}\overline{t_0},\\
f_1&=t_1\overline{t_0}+t_1\overline{t_3}+\overline{t_1}t_0t_3,\\
f_0&=t_0.
\end{aligned}}
$$
