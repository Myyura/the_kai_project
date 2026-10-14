---
sidebar_label: "2022年度 II-1（統計力学）"
tags:
  - Kyoto-University
  - Physics.Thermodynamics.Fractional-Exclusion-Statistics
---

# 京都大学 理学研究科 物理学・宇宙物理学専攻 2022年度 II-1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$G_0$ 個の異なる一粒子状態に同種粒子を配置する。

1. 自由ボース粒子で $N=2,G_0=3$ の場合の状態数 $W_b$ を求めよ。
2. 同じ条件の自由フェルミ粒子の状態数 $W_f$ を求めよ。
3. $N-1$ 個存在する系に一個加えるとき、追加粒子が占有できる状態数 $G(N)$ をボース・フェルミの各場合で求めよ。

次の形に状態数をまとめる。

$$
W(N)=\frac{[G(N)+N-1]!}{N![G(N)-1]!}.
$$

以下では $G(N)=G_0-\alpha(N-1)$、$0\le\alpha\le1$ の有理数とする。原問では $N\le G_0$、$G_0$ は十分大きいとしている。ボルツマン定数を $k$ とし、$n=N/G_0$ と書く。

4. $N,G_0$ が十分大きいとして Stirling 公式 $\ln N!\simeq N\ln(N/e)$ を使い、$S/G_0$ を求めよ。
5. 全エネルギーが $\epsilon N$（$\epsilon\ge0$）のとき、化学ポテンシャル $\mu$、温度 $T$ に対し

   $$
   \Theta=\sum_NW(N)e^{-(\epsilon-\mu)N/(kT)}=\sum_Ne^{-J/(kT)}
   $$

   とする。$J/G_0$ を $n$ の関数で表せ。
6. $\partial J/\partial n=0$ で定まる平均占有数 $\langle n\rangle$ に対し、$w=\langle n\rangle^{-1}-\alpha$、$e^{(\epsilon-\mu)/(kT)}=f(w)$ として $f$ を求めよ。
7. $\alpha=0,1/2,1$ の分布を求め、ボース分布・フェルミ分布を指摘せよ。
8. $\alpha\ne0,\epsilon<\mu$ の場合、温度を変えたときの分布の上限を求めよ。

#### 题目描述

在 $G_0$ 个不同的单粒子态中配置相同粒子。

1–2. 分别求两个玻色子、两个费米子占据三个态时的多体状态数。
3. 已有 $N-1$ 粒子时，再加入一个粒子可用的单粒子态数为多少？

推广为 $G(N)=G_0-\alpha(N-1)$、$W(N)=[G(N)+N-1]!/[N!(G(N)-1)!]$，$0\le\alpha\le1$ 为有理数，$n=N/G_0$。原题给出 $N\le G_0$ 且粒子数、状态数均大。

4. 用 Stirling 公式求 $S/G_0$。
5. 总能量 $\epsilon N$，将大配分函数写成 $\sum_Ne^{-J/(kT)}$，求 $J/G_0$。
6. 由驻值方程求分布；令 $w=\langle n\rangle^{-1}-\alpha$，写成 $e^{(\epsilon-\mu)/(kT)}=f(w)$。
7. 求 $\alpha=0,1/2,1$ 的显式分布，辨认玻色、费米分布。
8. 求 $\alpha>0,\epsilon<\mu$ 时分布随温度变化的上限。

## **Kai**

### (1)

占有数組 $(2,0,0)$ の置換が三通り、$(1,1,0)$ の置換も三通りなので $\boxed{W_b=6}$。

### (2)

二重占有は禁止され、$\boxed{W_f=\binom32=3}$。

### (3)

$$
\boxed{G_b(N)=G_0,\qquad G_f(N)=G_0-(N-1).}
$$

### (4)

$a=1+(1-\alpha)n$、$b=1-\alpha n$ とおく。$S=k\ln W$ に Stirling 公式を用いると、$G_0\ln G_0$ の項と線形項が相殺され

$$
\boxed{\frac S{G_0}=k\left[a\ln a-n\ln n-b\ln b\right].}
$$

境界では $0\ln0=0$ とする。

### (5)

$$
\boxed{\frac J{G_0}=(\epsilon-\mu)n-kT[a\ln a-n\ln n-b\ln b].}
$$

### (6)

内点の停留条件は

$$
\frac{\epsilon-\mu}{kT}=(1-\alpha)\ln a-\ln n+\alpha\ln b.
$$

$a/n=1+w,\ b/n=w$ より

$$
\boxed{f(w)=w^\alpha(1+w)^{1-\alpha},\qquad\langle n\rangle=\frac1{w+\alpha}.}
$$

以下はこの停留方程式を、状態数が非負となる自然な範囲 $0<n<1/\alpha$（$\alpha=0$ では上限なし）で解いた分布である。

### (7)

$z=e^{(\epsilon-\mu)/(kT)}$ と書くと

$$
\boxed{\begin{array}{c|c}
\alpha&\langle n\rangle\\\hline
0&1/(z-1)\quad\text{（ボース分布、}\epsilon>\mu\text{）}\\
1/2&1/\sqrt{z^2+1/4}\\
1&1/(z+1)\quad\text{（フェルミ分布）}
\end{array}}
$$

$\alpha=1/2$ では $z^2=w(w+1)=(w+1/2)^2-1/4$ を用いた。

### (8)

$0<\alpha\le1$ で $f$ は $w>0$ において単調増加し、$f(0)=0$。
$\epsilon<\mu$ のもと $T\downarrow0$ なら $z\to0$、従って $w\to0$ となり

$$
\boxed{\sup_T\langle n\rangle=\frac1\alpha.}
$$

有限温度では $\langle n\rangle<1/\alpha$。なお、原問の $N\le G_0$ を大分配関数の全項にまで厳密な上限として課す解釈では、$n\le1$ となり、上記分布が $1$ を超える領域は境界値 $n=1$ に置き換わる。(7)(8) の通常の分布を得るには、原問で指示された内点の停留方程式を自然な占有範囲へ拡張して用いる。

## **Reference**

- [京都大学公式問題（2022年度、PDF 13–14ページ）](https://www.scphys.kyoto-u.ac.jp/education/inshi/kakomon/R4.pdf)
