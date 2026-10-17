---
sidebar_label: "2013年8月実施 問3（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Improper-Integral
---

# 九州大学 工学府 機械系専攻 2013年8月実施 数学 問3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

$\operatorname{erf}(x)=\dfrac2{\sqrt\pi}\displaystyle\int_0^x e^{-\xi^2}\,d\xi$ と定義される関数 $\operatorname{erf}(x)$ は、ガウスの誤差関数と呼ばれる関数である。$\displaystyle\lim_{x\to\infty}\operatorname{erf}(x)=1$ であることが知られている。次の各問いに答えよ。（50点）

(1) $\dfrac2{\sqrt\pi}\displaystyle\int_0^{3x}e^{-\xi^2}\,d\xi$ をガウスの誤差関数を用いてあらわせ。

(2) $\dfrac2{\sqrt\pi}\displaystyle\int_0^xe^{-3\xi^2}\,d\xi$ をガウスの誤差関数を用いてあらわせ。

(3) $R$ を正の定数とし、2次元平面における領域 $D$ を $D=\{(x,y)\mid x^2+y^2\le R\}$ とする。このとき、$\dfrac4\pi\displaystyle\iint_D e^{-(x^2+y^2)}\,dx\,dy$ を求めよ。（ここではガウスの誤差関数を用いないこと。）

(4) $R$ を正の定数とする。$\dfrac{32}{\sqrt\pi}\displaystyle\int_0^R r^2e^{-r^2}\,dr$ をガウスの誤差関数を用いてあらわせ。

(5) 次の極限を求めよ。

$$
\lim_{R\to\infty}\Biggl[
\begin{aligned}
&\left(\frac2{\sqrt\pi}\right)^n\int_0^R\!\cdots\!\int_0^R\!\int_0^R\\
&\quad e^{-(\xi_1^2+\xi_2^2+\cdots+\xi_n^2)}\,d\xi_1\,d\xi_2\cdots d\xi_n
\end{aligned}
\Biggr].
$$

#### 题目描述

由 $\operatorname{erf}(x)=\dfrac2{\sqrt\pi}\displaystyle\int_0^x e^{-\xi^2}\,d\xi$ 定义的函数称为高斯误差函数。已知 $\displaystyle\lim_{x\to\infty}\operatorname{erf}(x)=1$。回答以下各问。（50分）

(1) 用高斯误差函数表示 $\dfrac2{\sqrt\pi}\displaystyle\int_0^{3x}e^{-\xi^2}\,d\xi$。

(2) 用高斯误差函数表示 $\dfrac2{\sqrt\pi}\displaystyle\int_0^xe^{-3\xi^2}\,d\xi$。

(3) 设 $R$ 为正常数，二维平面上的区域为 $D=\{(x,y)\mid x^2+y^2\le R\}$。求 $\dfrac4\pi\displaystyle\iint_D e^{-(x^2+y^2)}\,dx\,dy$。本问不得使用高斯误差函数。

(4) 设 $R$ 为正常数，用高斯误差函数表示 $\dfrac{32}{\sqrt\pi}\displaystyle\int_0^R r^2e^{-r^2}\,dr$。

(5) 求下列极限。

$$
\lim_{R\to\infty}\Biggl[
\begin{aligned}
&\left(\frac2{\sqrt\pi}\right)^n\int_0^R\!\cdots\!\int_0^R\!\int_0^R\\
&\quad e^{-(\xi_1^2+\xi_2^2+\cdots+\xi_n^2)}\,d\xi_1\,d\xi_2\cdots d\xi_n
\end{aligned}
\Biggr].
$$

## **Kai**

### (1)

定義より $\boxed{\operatorname{erf}(3x)}$。

### (2)

$u=\sqrt3\xi$ とおけば

$$
\begin{gathered}
\frac2{\sqrt\pi}\int_0^xe^{-3\xi^2}d\xi
=\frac2{\sqrt{3\pi}}\int_0^{\sqrt3x}e^{-u^2}du\\
=\boxed{\frac1{\sqrt3}\operatorname{erf}(\sqrt3x)}.
\end{gathered}
$$

### (3)

極座標で $0\le r\le\sqrt R$、$0\le\theta\le2\pi$ なので

$$
\frac4\pi\int_0^{2\pi}\int_0^{\sqrt R}e^{-r^2}r\,dr\,d\theta
=\boxed{4(1-e^{-R})}.
$$

### (4)

部分積分より

$$
\int_0^Rr^2e^{-r^2}dr
=-\frac R2e^{-R^2}+\frac12\int_0^Re^{-r^2}dr.
$$

したがって求める量は

$$
\boxed{8\operatorname{erf}(R)-\frac{16R}{\sqrt\pi}e^{-R^2}}.
$$

### (5)

積分領域が直積で、被積分関数も変数ごとの積なので、括弧内は $\operatorname{erf}(R)^n$。よって極限は $\boxed{1}$。
