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

$\operatorname{erf}(x)=\frac2{\sqrt\pi}\int_0^x e^{-\xi^2}\,d\xi$ と定義される関数はガウスの誤差関数と呼ばれ、$\lim_{x\to\infty}\operatorname{erf}(x)=1$ が知られている。次の各問いに答えよ。（50点）

1. $\frac2{\sqrt\pi}\int_0^{3x}e^{-\xi^2}\,d\xi$ をガウスの誤差関数を用いてあらわせ。
2. $\frac2{\sqrt\pi}\int_0^x e^{-3\xi^2}\,d\xi$ をガウスの誤差関数を用いてあらわせ。
3. $R>0$、$D=\{(x,y)\mid x^2+y^2\le R\}$ とする。$\frac4\pi\iint_D e^{-(x^2+y^2)}\,dx\,dy$ を、誤差関数を用いずに求めよ。
4. $R>0$ とする。$\frac{32}{\sqrt\pi}\int_0^R r^2e^{-r^2}\,dr$ をガウスの誤差関数を用いてあらわせ。
5. 次の極限を求めよ。

$$
\lim_{R\to\infty}\left[\left(\frac2{\sqrt\pi}\right)^n
\int_0^R\cdots\int_0^R e^{-(\xi_1^2+\cdots+\xi_n^2)}\,d\xi_1\cdots d\xi_n\right].
$$

#### 题目描述

利用误差函数定义计算五个积分或极限。第 (3) 问的圆域为 $x^2+y^2\le R$，半径是 $\sqrt R$；第 (4) 问的整体系数为 $32/\sqrt\pi$。

## **Kai**

### (1)

定義より $\boxed{\operatorname{erf}(3x)}$。

### (2)

$u=\sqrt3\xi$ とおけば

$$
\frac2{\sqrt\pi}\int_0^xe^{-3\xi^2}d\xi
=\frac2{\sqrt{3\pi}}\int_0^{\sqrt3x}e^{-u^2}du
=\boxed{\frac1{\sqrt3}\operatorname{erf}(\sqrt3x)}.
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
