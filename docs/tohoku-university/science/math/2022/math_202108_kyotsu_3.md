---
sidebar_label: "2021年8月実施 共通問題 問題3（微積分）"
tags:
  - Tohoku-University
  - Mathematics.Calculus.Power-Series
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Higher-Order-Derivative
---

# 東北大学 大学院理学研究科 数学専攻 2021年8月実施 共通問題 問題3

## **Author**

祭音Myyura (Based on [L^2's answer](https://note.com/normalmath/n/n89152917de11) refined with GPT 6 Astra)

## **Description**

以下の問いに答えよ．ただし，$\mathbb{Z}_{>0}$ は正の整数全体のなす集合を表す．

(1) $f(x)$ を開区間 $I=(a,b)$ 上で無限回微分可能な関数とする．ある実数 $A,B>0$ が存在して

$$
\sup_{x\in I}|f^{(n)}(x)|\le AB^nn!\qquad(n\in\mathbb{Z}_{>0})
$$

が成り立つとする．任意の $x_0,x\in I$ に対して，もし $|x-x_0|<1/B$ ならば，級数

$$
\sum_{k=0}^{\infty}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
$$

は絶対収束し，$f(x)$ と等しくなることを示せ．

(2) 任意の $n\in\mathbb{Z}_{>0}$ および実数 $-1<x<1$ に対して，次の等式を示せ．

$$
\frac{n!}{(1-x)^{n+1}}
=\sum_{k=n}^{\infty}\frac{k!}{(k-n)!}x^{k-n}
$$

(3) $\{a_k\}_{k=0}^{\infty}$ を実数列とし，$r>0$ を実数とする．各 $x\in(-r,r)$ に対して級数

$$
g(x)=\sum_{k=0}^{\infty}a_kx^k
$$

が収束するならば，ある実数 $A,B>0$ と原点の近傍 $J\subset(-r,r)$ が存在して

$$
\sup_{x\in J}|g^{(n)}(x)|\le AB^nn!\qquad(n\in\mathbb{Z}_{>0})
$$

が成り立つことを示せ．

### 题目描述

回答下列问题，其中 $\mathbb{Z}_{>0}$ 表示正整数集合。

(1) 设 $f$ 是开区间 $I=(a,b)$ 上无限次可微的函数。存在实数 $A,B>0$，使得

$$
\sup_{x\in I}|f^{(n)}(x)|\le AB^nn!\qquad(n\in\mathbb{Z}_{>0}).
$$

证明：对任意 $x_0,x\in I$，如果 $|x-x_0|<1/B$，则级数

$$
\sum_{k=0}^{\infty}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
$$

绝对收敛且等于 $f(x)$。

(2) 对任意 $n\in\mathbb{Z}_{>0}$ 和实数 $-1<x<1$，证明

$$
\frac{n!}{(1-x)^{n+1}}
=\sum_{k=n}^{\infty}\frac{k!}{(k-n)!}x^{k-n}.
$$

(3) 设 $\{a_k\}_{k=0}^{\infty}$ 为实数列，$r>0$。如果对每个 $x\in(-r,r)$，级数

$$
g(x)=\sum_{k=0}^{\infty}a_kx^k
$$

均收敛，证明存在实数 $A,B>0$ 和原点的邻域 $J\subset(-r,r)$，使得

$$
\sup_{x\in J}|g^{(n)}(x)|\le AB^nn!\qquad(n\in\mathbb{Z}_{>0}).
$$

## **Kai**

### (1)

$q=B|x-x_0|<1$ とおく．$k\ge1$ に対する仮定から

$$
\sum_{k=0}^{\infty}\left|\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k\right|
\le |f(x_0)|+A\sum_{k=1}^{\infty}q^k<\infty.
$$

Taylor の定理によれば，$x\ne x_0$ のとき，$x$ と $x_0$ の間のある $\xi_n$ に対し

$$
f(x)=\sum_{k=0}^{n-1}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k
 +\frac{f^{(n)}(\xi_n)}{n!}(x-x_0)^n.
$$

剰余の絶対値は $Aq^n\to0$．よって級数の和は $f(x)$ である．$x=x_0$ の場合は明らかである．

### (2)

$|x|<1$ で成立する等比級数

$$
\frac1{1-x}=\sum_{k=0}^{\infty}x^k
$$

を収束半径の内部で $n$ 回項別微分すれば

$$
\frac{n!}{(1-x)^{n+1}}
=\sum_{k=n}^{\infty}\frac{k!}{(k-n)!}x^{k-n}
$$

を得る．

### (3)

$\rho=r/2$ とおく．$\sum_{k=0}^{\infty}a_k\rho^k$ が収束するので，数列 $\{a_k\rho^k\}$ は有界である．したがって，ある $C>0$ により，すべての $k\ge0$ について

$$
|a_k|\le C\rho^{-k}
$$

とできる．$J=(-\rho/2,\rho/2)$ とおく．べき級数の項別微分および (2) を用いると，$x\in J$ に対し

$$
\begin{aligned}
|g^{(n)}(x)|
&\le C\rho^{-n}\sum_{k=n}^{\infty}
 \frac{k!}{(k-n)!}\left(\frac{|x|}{\rho}\right)^{k-n}\\
&=C\rho^{-n}\frac{n!}{(1-|x|/\rho)^{n+1}}\\
&\le 2C\left(\frac2\rho\right)^n n!.
\end{aligned}
$$

よって $A=2C$，$B=2/\rho=4/r$ とすればよい．

## **Reference**

- [東北大学公式問題の保存版（2022年度・共通問題，第3ページ）](https://raw.githubusercontent.com/Zhang-HL-1/japan-study-journal/0a188193807a8b4fa38aa5347ff01691340713da/assets/past-papers/documents/6110ccabe6011778aebd2b7b2760cae02ff6a050fb05faeed14330c67bddee6d.pdf)
- [L^2：2022年度 共通問題・微積分 1](https://note.com/normalmath/n/n89152917de11#836ff4a7-de73-42a3-bcd6-7cefe0b7cee7)
