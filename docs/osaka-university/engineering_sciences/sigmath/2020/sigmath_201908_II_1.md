---
sidebar_label: "2019年8月実施 数理科学 II [1]"
tags:
  - Osaka-University
  - Mathematics.Real-Analysis
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2019年8月実施 数理科学 II \[1\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

(1) $p>0$ とする。

(a) $f_p(t)=(1+t^2)^{1/2}/(1+t^p)^{1/p}$ ($t\ge0$) とおく。$0<\inf_{t\ge0}f_p(t)$ および $\sup_{t\ge0}f_p(t)<\infty$ を示せ。

(b) 正定数 $A_p,B_p$ が存在して、任意の実数 $x,y$ に対して

$$
A_p(|x|^p+|y|^p)^{1/p}\le(x^2+y^2)^{1/2}\le B_p(|x|^p+|y|^p)^{1/p}
$$

となることを示せ。

(2) $p,q>0$ とし、$D=\{(x,y)\mid0<x^2+y^2<1\}$ とする。広義積分

$$
I_{p,q}=\iint_D\frac{dx\,dy}{(|x|^p+|y|^p)^{q/p}}
$$

が収束するための必要十分条件を求めよ。

## **Kai**

### (1)
(a) $f_p$ は $[0,\infty)$ 上正値連続であり、$t\to\infty$ で $f_p(t)\to1$ である。十分大きい $T$ について $t\ge T$ では $1/2<f_p(t)<2$。コンパクト区間 $[0,T]$ での正の最小値と有限の最大値と合わせればよい。

(b) $y\ne0$ なら両ノルムの比は $f_p(|x/y|)$ である。$y=0,x\ne0$ の比は $1=f_p(0)$、原点では両辺 $0$。よって (a) の下限・上限を $A_p,B_p$ にとればよい。

### (2)
(1) より被積分関数は $r^{-q}$ と正定数倍の範囲で比較できる。極座標で

$$
\iint_Dr^{-q}\,dx\,dy=2\pi\int_0^1r^{1-q}\,dr.
$$

したがって必要十分条件は $\boxed{p>0,\quad0<q<2}$。
