---
sidebar_label: 2016年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Singularities-and-Poles
  - Mathematics.Complex-Analysis.Taylor-Series-and-Radius-of-Convergence
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Integration-by-Substitution
---

# 京都大学 情報学研究科 システム科学専攻 2016年8月実施 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

以下、$i$ は虚数単位、$e$ は自然対数の底とする。

### 問題1

(1) $\dfrac{e^z-e^{-z}}{e^z+3e^{-z}}$ の極と零点をすべて求めよ。

(2) べき級数 $\sum_{n=0}^{\infty}(n^2+3^n)z^n$ の収束半径を求めよ。

### 問題2

$f(z)=e^{1/z}$ とする。

(1) $z$ が正の実軸上から $0$ に近づくときの極限を求めよ。

(2) $z$ が負の実軸上から $0$ に近づくときの極限を求めよ。

(3) 実数 $\theta$ に対し $a_k=1/[i(\theta+2k\pi)]$ ($k=1,2,\ldots$) とする。$\lim_{k\to\infty}f(a_k)$ を求めよ。

(4) 任意の複素数 $w$ に対し、$0$ に収束する複素数列 $b_k$ をうまく選べば $f(b_k)\to w$ となることを示せ。

### 問題3

$a,b,c$ は正の実数で、方程式 $ax^4+bx^2+c=0$ は重解をもたないとする。次の積分を求めよ。

$$
\int_{-\infty}^{\infty}\frac{dx}{ax^4+bx^2+c}.
$$

#### 题目描述

以下 $i$ 为虚数单位，$e$ 为自然对数的底。

**问题1** （1）求 $\dfrac{e^z-e^{-z}}{e^z+3e^{-z}}$ 的所有极点和零点。（2）求幂级数 $\sum_{n=0}^{\infty}(n^2+3^n)z^n$ 的收敛半径。

**问题2** 设 $f(z)=e^{1/z}$。（1）求 $z$ 沿正实轴趋近 $0$ 时的极限。（2）求沿负实轴趋近 $0$ 时的极限。（3）对实数 $\theta$ 令 $a_k=1/[i(\theta+2k\pi)]$（$k\ge1$），求 $\lim_{k\to\infty}f(a_k)$。（4）证明任给复数 $w$，可选取趋近 $0$ 的复数列 $b_k$ 使 $f(b_k)\to w$。

**问题3** $a,b,c$ 为正实数，$ax^4+bx^2+c=0$ 没有重根。求 $\int_{-\infty}^{\infty}dx/(ax^4+bx^2+c)$。


## **Kai**

### 問題1

(1) 関数は $(e^{2z}-1)/(e^{2z}+3)$ と書けるので、

$$
\boxed{\text{零点 }z=k\pi i,\qquad
\text{極 }z=\frac{\log3}{2}+\left(k+\frac12\right)\pi i,\quad k\in\mathbb Z}.
$$

いずれも位数1である。

(2) $\lim_{n\to\infty}(n^2+3^n)^{1/n}=3$ より $\boxed{R=1/3}$。

### 問題2

(1) $\boxed{+\infty}$。

(2) $\boxed0$。

(3) 十分大きい $k$ では $f(a_k)=e^{i\theta+2k\pi i}=e^{i\theta}$ なので、極限は $\boxed{e^{i\theta}}$。

(4) $w=0$ なら $b_k=-1/k$ とする。$w\ne0$ なら $w=re^{i\phi}$ ($r>0$) と書き、十分大きい $k$ に対して

$$
b_k=\frac1{\log r+i(\phi+2k\pi)}
$$

とおく。$b_k\to0$ かつ $f(b_k)=w$ である。

### 問題3

$x=(c/a)^{1/4}t$、$B=b/\sqrt{ac}$ とおくと

$$
I=a^{-1/4}c^{-3/4}\int_{-\infty}^{\infty}\frac{dt}{t^4+Bt^2+1}.
$$

$J=\int_0^\infty dt/(t^4+Bt^2+1)$ とする。$t\mapsto1/t$ により $J=\int_0^\infty t^2dt/(t^4+Bt^2+1)$。両式を足し、$u=t-1/t$ とおけば

$$
2J=\int_0^\infty\frac{(1+t^{-2})dt}{(t-t^{-1})^2+B+2}
=\int_{-\infty}^{\infty}\frac{du}{u^2+B+2}
=\frac\pi{\sqrt{B+2}}.
$$

したがって

$$
\boxed{I=\frac\pi{\sqrt c\sqrt{b+2\sqrt{ac}}}}.
$$

