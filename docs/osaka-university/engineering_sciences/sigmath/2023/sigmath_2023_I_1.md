---
sidebar_label: "2023年度 数理科学 I [1]"
tags:
  - Osaka-University
  - Mathematics.Calculus
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2023年度 数理科学 I \[1\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

(1) $t=\sin\theta$ と変数変換することにより、不定積分 $\int d\theta/\cos\theta$ を求めよ。

(2) $D=\{(x,y)\mid0<y\le x\le1\}$ とするとき、広義積分 $\iint_D(x^2+y^2)^{-1/2}\,dx\,dy$ を求めよ。

## **Kai**

### (1)
$dt=\cos\theta\,d\theta$ より

$$
\int\frac{d\theta}{\cos\theta}=\int\frac{dt}{1-t^2}
=\frac12\log\left|\frac{1+t}{1-t}\right|+C
=\boxed{\log|\sec\theta+\tan\theta|+C}.
$$

### (2)
極座標 $x=r\cos\theta,y=r\sin\theta$ では $0<\theta\le\pi/4,0<r\le1/\cos\theta$。したがって

$$
\iint_D\frac{dx\,dy}{\sqrt{x^2+y^2}}
=\int_0^{\pi/4}\int_0^{1/\cos\theta}dr\,d\theta
=\boxed{\log(1+\sqrt2)}.
$$
