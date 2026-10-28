---
sidebar_label: "2023年8月実施 選択問題 [6]（関数解析）"
tags:
  - Tohoku-University
  - Mathematics.Functional-Analysis.Volterra-Operator-Compactness-and-Singular-Values
  - Mathematics.Functional-Analysis.Neumann-Series
---

# 東北大学 理学研究科 数学専攻 2023年8月実施 選択問題 \[6\]

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

関数空間 $X=C([0,1])=\{u:[0,1]\to\mathbb R\mid u\text{ は }[0,1]\text{ 上の連続関数}\}$ のノルムを $\|u\|_X=\max_{x\in[0,1]}|u(x)|$（$u\in X$）と定めることで与えられる実バナッハ空間 $(X,\|\cdot\|_X)$ を考える。さらに $K:[0,1]\times[0,1]\to\mathbb R$ を連続関数とする。$X$ 上の有界線形作用素 $T:X\to X$ を

$$
(Tu)(x)=\int_0^x K(x,y)u(y)\,dy\qquad(u\in X,\ x\in[0,1])
$$

によって定める。以下の問いに答えよ。

(1) 任意の正の整数 $n$ に対して、次の不等式が成り立つことを示せ。

$$
|(T^nu)(x)|\le M^n\frac{x^n}{n!}\|u\|_X\qquad(u\in X,\ x\in[0,1])
$$

ただし $M=\max\{|K(x,y)|\mid(x,y)\in[0,1]\times[0,1]\}$ とする。

(2) $X$ 上の有界線形作用素全体からなる線形空間 $\mathcal B(X)$ のノルムを

$$
\|F\|=\sup\{\|Fu\|_X\mid u\in X,\ \|u\|_X\le1\}\qquad(F\in\mathcal B(X))
$$

と定めることで与えられる実バナッハ空間 $(\mathcal B(X),\|\cdot\|)$ を考える。このとき、級数

$$
S=\sum_{n=0}^\infty T^n=\lim_{N\to\infty}\sum_{n=0}^NT^n
$$

が $\mathcal B(X)$ 上で収束することを示せ。ただし $T^0=I$ は $X$ 上の恒等作用素を表すものとする。

(3) $S$ を (2) で与えた $X$ 上の有界線形作用素とする。このとき、任意の $f\in X$ に対して、$u=Sf=\sum_{n=0}^\infty T^nf$ は、条件

$$
u-Tu=f
$$

を満たすただ一つの $X$ の元であることを示せ。

### 题目描述

在连续实函数空间

$$
X=C([0,1])=\{u:[0,1]\to\mathbb R\mid u\text{ 连续}\}
$$

上定义范数 $\|u\|_X=\max_{x\in[0,1]}|u(x)|$，得到实巴拿赫空间 $(X,\|\cdot\|_X)$。设 $K:[0,1]^2\to\mathbb R$ 连续，定义有界线性算子 $T:X\to X$：

$$
(Tu)(x)=\int_0^xK(x,y)u(y)\,dy\qquad(u\in X,\ x\in[0,1]).
$$

(1) 证明对任意正整数 $n$、$u\in X$ 和 $x\in[0,1]$，均有

$$
|(T^nu)(x)|\le M^n\frac{x^n}{n!}\|u\|_X,
\qquad M=\max_{(x,y)\in[0,1]^2}|K(x,y)|.
$$

(2) 在所有有界线性算子组成的空间 $\mathcal B(X)$ 上定义范数

$$
\|F\|=\sup\{\|Fu\|_X\mid u\in X,\ \|u\|_X\le1\}.
$$

这给出实巴拿赫空间 $(\mathcal B(X),\|\cdot\|)$。证明级数

$$
S=\sum_{n=0}^\infty T^n=\lim_{N\to\infty}\sum_{n=0}^NT^n
$$

在该空间中收敛，其中 $T^0=I$ 为恒等算子。

(3) 设 $S$ 为 (2) 得到的有界线性算子。证明对每个 $f\in X$，$u=Sf=\sum_{n=0}^\infty T^nf$ 是 $X$ 中满足 $u-Tu=f$ 的唯一元素。

## **Kai**

### (1)

$n=1$ では $|(Tu)(x)|\le\int_0^x M\|u\|_X\,dy=Mx\|u\|_X$ である。$n$ に対して主張が成り立つとすると、

$$
\begin{aligned}
|(T^{n+1}u)(x)|
&\le\int_0^x M\frac{M^n y^n}{n!}\|u\|_X\,dy\\
&=\frac{M^{n+1}x^{n+1}}{(n+1)!}\|u\|_X.
\end{aligned}
$$

よって数学的帰納法により全ての $n\ge1$ で成り立つ。

### (2)

$0\le x\le1$ だから (1) より $\|T^n\|\le M^n/n!$ となる。従って

$$
\sum_{n=0}^{\infty}\|T^n\|\le\sum_{n=0}^{\infty}\frac{M^n}{n!}=e^M<\infty.
$$

$\mathcal B(X)$ の完備性により、$S=\sum_{n=0}^\infty T^n$ は作用素ノルムで収束する。

### (3)

$S_N=\sum_{n=0}^NT^n$ とすると

$$
(I-T)S_N=S_N(I-T)=I-T^{N+1}.
$$

$\|T^{N+1}\|\to0$ なので、作用素ノルムの極限をとれば $(I-T)S=S(I-T)=I$ を得る。従って任意の $f\in X$ に対して唯一の解は

$$
u=Sf=\sum_{n=0}^{\infty}T^nf
$$

である。

## **Reference**

- [東北大学公式問題（2024年度・選択問題、PDF 5ページ）](https://www.math.tohoku.ac.jp/exam/questions/2024_R6_sentaku.pdf)
- [L^2：2024年度・関数解析の答案](https://note.com/normalmath/n/n89152917de11#b18ea6cc-8e0e-42f0-95ab-cf4ca1103f76)
