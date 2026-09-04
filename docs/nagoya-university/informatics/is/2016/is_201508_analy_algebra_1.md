---
sidebar_label: "2015年8月実施 解析・線形代数 [1]"
tags:
  - Nagoya-University
  - Mathematics.Calculus.Integration
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2015年8月実施 解析・線形代数 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の極座標の方程式で表される曲線について、以下の問いに答えよ。

$$
r = 1 + \cos \theta \quad (0 \leq \theta \leq 2\pi)
$$

(a) 曲線の概形を図示せよ。
(b) 曲線の長さを求めよ。

### 题目描述

极坐标曲线由

$$
r=1+\cos\theta,\qquad0\le\theta\le2\pi
$$

给出。

1. 画出该曲线的大致形状；
2. 求该曲线的长度。

## **Kai**

( a )
極方程式

$$
r=1+\cos\theta
$$

で表される曲線はカージオイド（心臓形曲線）である．

( b )
極方程式 $r=f(\theta)$ により表される曲線の弧長は，

$$
L=\int_a^b \sqrt{r^2+\left(\frac{dr}{d\theta}\right)^2}\,d\theta
$$

で与えられる．

ここでは

$$
r=1+\cos\theta,\qquad
\frac{dr}{d\theta}=-\sin\theta
$$

であるから，

$$
\begin{aligned}
L
&=\int_0^{2\pi}
\sqrt{(1+\cos\theta)^2+\sin^2\theta}\,d\theta \\
&=\int_0^{2\pi}
\sqrt{1+2\cos\theta+\cos^2\theta+\sin^2\theta}\,d\theta \\
&=\int_0^{2\pi}
\sqrt{2+2\cos\theta}\,d\theta
\end{aligned}
$$

ここで，

$$
2+2\cos\theta=4\cos^2\frac{\theta}{2}
$$

より，

$$
L=\int_0^{2\pi}2\left|\cos\frac{\theta}{2}\right|\,d\theta
=2\int_0^{2\pi}\left|\cos\frac{\theta}{2}\right|\,d\theta
$$

となる．

$\cos\frac{\theta}{2}$ は $[0,\pi]$ で正， $[\pi,2\pi]$ で負であるから，

$$
\begin{aligned}
L
&=2\left(
\int_0^{\pi}\cos\frac{\theta}{2}\,d\theta
-\int_{\pi}^{2\pi}\cos\frac{\theta}{2}\,d\theta
\right) \\
&=2\left(
2\sin\frac{\theta}{2}\Big|_0^{\pi}
-2\sin\frac{\theta}{2}\Big|_{\pi}^{2\pi}
\right) \\
&=4\left(
\sin\frac{\pi}{2}-\sin0-\sin\pi+\sin\frac{\pi}{2}
\right) \\
&=4(1+1)=8
\end{aligned}
$$

したがって，この曲線の長さは

$$
8
$$

である．
