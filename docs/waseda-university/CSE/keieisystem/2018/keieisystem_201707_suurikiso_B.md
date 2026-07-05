---
sidebar_label: "2017年7月実施 数理基礎 B"
tags:
  - Waseda-University
  - Mathematics.Calculus.Constrained-Optimization
  - Mathematics.Calculus.Gamma-Function
---

# 早稲田大学 創造理工学研究科 経営システム工学専攻 2017年7月実施 数理基礎 B

## **Author**
祭音Myyura

## **Description**

1. $x^2+y^2=4$ のもとで $f(x,y)=x^3+y^3$ の最大値と最小値を求めよ。
2. $x>0$ に対して

   $$
   f(x)=\int_0^\infty e^{-t}t^{x-1}\,dt
   $$

   とおく。
   1. $f(x+1)=xf(x)$ を示せ。
   2. ガウス積分を用いて $f(1/2)$ を求めよ。

## **Kai**

### [小問 1]

ラグランジュ関数

$$
L=x^3+y^3-\lambda(x^2+y^2-4)
$$

を考える。停留条件は

$$
x(3x-2\lambda)=0,\qquad
y(3y-2\lambda)=0.
$$

$x,y$ がともに0でない場合は $x=y=\pm\sqrt2$ であり、値は $\pm4\sqrt2$ である。一方、どちらかが0なら候補は $(\pm2,0),(0,\pm2)$ で、値は $\pm8$ となる。制約集合はコンパクトなので、全候補を比較して

$$
\boxed{\max f=8},\qquad
\boxed{\min f=-8}.
$$

最大値は $(2,0),(0,2)$、最小値は $(-2,0),(0,-2)$ で達成される。

### [小問 2-1]

部分積分により

$$
\begin{aligned}
f(x+1)
&=\int_0^\infty e^{-t}t^x\,dt\\
&=\left[-e^{-t}t^x\right]_0^\infty
+x\int_0^\infty e^{-t}t^{x-1}\,dt\\
&=\boxed{xf(x)}.
\end{aligned}
$$

$x>0$ なので境界項は0である。

### [小問 2-2]

$t=u^2$ と置換すると

$$
\begin{aligned}
f\left(\frac12\right)
&=\int_0^\infty e^{-t}t^{-1/2}\,dt
=2\int_0^\infty e^{-u^2}\,du.
\end{aligned}
$$

ガウス積分 $\int_{-\infty}^{\infty}e^{-u^2}\,du=\sqrt\pi$ より

$$
\boxed{f(1/2)=\sqrt\pi}.
$$
