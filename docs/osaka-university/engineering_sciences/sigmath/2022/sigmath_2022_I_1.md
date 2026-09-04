---
sidebar_label: "2022年度 数理科学 I [1]"
tags:
  - Osaka-University
  - Mathematics.Calculus
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2022年度 数理科学 I \[1\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$n$ を非負整数とする。

(1) $\int_0^{\pi/2}\cos^n x\,dx$ を求めよ。

(2) $\iint_{x^2+y^2\le2x}x^n\,dx\,dy$ を求めよ。

## **Kai**

### (1)
$J_n=\int_0^{\pi/2}\cos^n x\,dx$ とおく。部分積分より $J_n=(n-1)J_{n-2}/n$ ($n\ge2$)。$J_0=\pi/2,J_1=1$ から

$$
\boxed{J_{2k}=\frac{(2k)!}{2^{2k}(k!)^2}\frac\pi2,\qquad
J_{2k+1}=\frac{2^{2k}(k!)^2}{(2k+1)!}}\quad(k\ge0).
$$

### (2)
極座標では $-\pi/2\le\theta\le\pi/2,0\le r\le2\cos\theta$。したがって

$$
\begin{aligned}
\iint x^n\,dx\,dy
&=\int_{-\pi/2}^{\pi/2}\int_0^{2\cos\theta}r^{n+1}\cos^n\theta\,dr\,d\theta\\
&=\frac{2^{n+3}}{n+2}J_{2n+2}
=\boxed{\frac{\pi(2n+2)!}{2^n(n+2)((n+1)!)^2}}.
\end{aligned}
$$
