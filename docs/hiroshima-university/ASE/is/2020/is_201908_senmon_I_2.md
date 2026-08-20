---
sidebar_label: "2019年8月実施 専門科目I 問題2"
tags:
  - Hiroshima-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Vector-Calculus.Polar-Coordinates
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Improper-Integral
---
# 広島大学 先進理工系科学研究科 情報科学プログラム 2019年8月実施 専門科目I 問題2


## **Author**
samparker, 祭音Myyura

## **Description**
$D(R) = \{(x,y) \in \mathbb{R}^2 : 1 \leq x^2 + y^2 \leq (R+1)^2, 0 \leq y \leq x\}$, $R \geq 0$ とする。

(1) 実数 $\alpha$ に対して，$G(R) = \iint_{D(R)} x^\alpha y \ dxdy$ を求めよ。

(2) $\alpha = -3$ とするとき，

$$
\lim_{R \to +0} \frac{G(R) - \frac{R}{2} + \frac{R^2}{4}}{R^3}
$$

を求めよ。

(3) $\lim_{R \to +\infty} G(R)$ が有限な値に収束する実数 $\alpha$ の範囲を定めよ。

--------------------------------------------------------

Let $D(R) = \{(x,y) \in \mathbb{R}^2 : 1 \leq x^2 + y^2 \leq (R+1)^2, 0 \leq y \leq x\}$, where $R \geq 0$.

(1) Calculate the integral $G(R) = \iint_{D(R)} x^\alpha y \, dxdy$ for a real number $\alpha$.

(2) Find the limit

$$
\lim_{R \to +0} \frac{G(R) - \frac{R}{2} + \frac{R^2}{4}}{R^3}
$$

when $\alpha = -3$.

(3) Determine the range of the real number $\alpha$ on which the limit $\lim_{R \to +\infty} G(R)$ converges.

### 题目描述

设 $R\ge0$，并定义

$$
D(R)=\{(x,y)\in\mathbb R^2:1\le x^2+y^2\le(R+1)^2,\ 0\le y\le x\}.
$$

1. 对任意实数 $\alpha$，计算

   $$
   G(R)=\iint_{D(R)}x^\alpha y\,dx\,dy.
   $$

2. 当 $\alpha=-3$ 时，求

   $$
   \lim_{R\to+0}
   \frac{G(R)-\frac R2+\frac{R^2}{4}}{R^3}.
   $$

3. 确定使 $\displaystyle\lim_{R\to+\infty}G(R)$ 收敛到有限值的实数 $\alpha$ 的取值范围。

## **Kai**
### (1)
Let

$$
x = r \cos \theta, y = r \sin \theta
$$

Then the region $D(R)$ becomes

$$
1 \leq r \leq R+1, 0 \leq \theta \leq \frac{\pi}{4}
$$

The integral becomes

$$
\begin{aligned}
    \int_0^{\frac{\pi}{4}} \int_{1}^{R+1} r (r \cos \theta)^{\alpha} r \sin \theta \ drd\theta &= \int_0^{\frac{\pi}{4}} \int_{1}^{R+1} r^{\alpha+2} \cos^{\alpha}\theta \sin \theta \ drd\theta
\end{aligned}
$$

$$
\int_{1}^{R+1} r^{\alpha +2} dr = \frac{r^{\alpha + 3}}{\alpha + 3} \bigg |_{1}^{R+1} = \frac{(R+1)^{\alpha+3} - 1}{\alpha+3}
$$

$$
\int_{0}^{\frac{\pi}{4}} \cos^{\alpha}\theta \sin \theta \ d\theta = \frac{-\cos^{\alpha+1} \theta}{\alpha + 1} \bigg |_{0}^{\frac{\pi}{4}} = \frac{1 - 2^{-\frac{\alpha+1}{2}}}{\alpha + 1}
$$

Hence, for $\alpha\neq-3,-1$,

$$
G(R) = \frac{((R+1)^{\alpha+3}-1)(1 - 2^{-\frac{\alpha+1}{2}})}{(\alpha + 3)(\alpha + 1)}
$$

At the two exceptional values,

$$
G(R)=
\begin{cases}
\dfrac12\ln(R+1),&\alpha=-3,\\[4pt]
\dfrac{\ln2}{4}\bigl((R+1)^2-1\bigr),&\alpha=-1.
\end{cases}
$$

### (2)
When $\alpha = -3$, we have

$$
G(R) = \int_0^{\frac{\pi}{4}} \int_{1}^{R+1} r^{-1} \cos^{-3}\theta \sin \theta \ drd\theta = \ln (R+1) \cdot C
$$

where $C = \int_0^{\frac{\pi}{4}} \cos^{-3}\theta \sin \theta \ d\theta = \frac{1}{2}$. Then

$$
\begin{aligned}
\lim_{R \to +0} \frac{G(R) - \frac{R}{2} + \frac{R^2}{4}}{R^3} &=\lim_{R \to +0} \frac{\frac{1}{2}\ln (R+1) - \frac{R}{2} + \frac{R^2}{4}}{R^3} \\
&= \lim_{R \to +0} \frac{\frac{1}{2}(R - \frac{R^2}{2} + \frac{R^3}{3} + O(R^4)) - \frac{R}{2} + \frac{R^2}{4}}{R^3} \\
&= \frac{1}{6}
\end{aligned}
$$

### (3)
The angular integral is finite and positive for every real $\alpha$, since
$\cos\theta\geq 1/\sqrt2$ on $[0,\pi/4]$. Thus the limit is finite exactly when

$$
\int_1^\infty r^{\alpha+2}\,dr
$$

converges, namely when $\alpha<-3$.
