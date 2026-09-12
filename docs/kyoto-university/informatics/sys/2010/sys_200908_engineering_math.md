---
sidebar_label: 2009年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Residue-at-Higher-Order-Pole
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Taylor-Series-and-Radius-of-Convergence
  - Mathematics.Complex-Analysis.Mobius-Transformation
---

# 京都大学 情報学研究科 システム科学専攻 2009年8月実施 工業数学

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
(1) $\cos i$ の絶対値を求め、$1$ との大小関係を調べよ。

(2) $h(z)=1/\{(3z-1)^2(z+1)\}$ の $z=1/3$ における留数を求めよ。

### 問題2
実積分 $I=\int_0^{2\pi}\frac{\sin\theta}{5-3\cos\theta}\,d\theta$ を考える。

(1) $z=\exp(i\theta)$ を用いて $I$ を表せ。

(2) $I$ を求めよ。

### 問題3
複素数の偏角は $0\le\arg z<2\pi$ とする。

(1) 任意に与えられた正の実数 $r$ に対し、$z^2=ri$ を解け。

(2) $f(z)=z^2+(1-i)z-i$ の零点を $\tau_1,\tau_2$ とする。次の級数が収束し、正則となる範囲を求めよ。

$$
\sum_{n=1}^\infty\frac{z^n}{\tau_1^n\tau_2^n+(\tau_1+\tau_2)^n}.
$$

(3) $\arg\tau_1<\arg\tau_2$ とするとき、両零点を複素平面に図示せよ。

(4) $g(z)=(z-\tau_2)/(z-\tau_1)$ について、$|g(z)|>1$ となる範囲を求め、図示せよ。

#### 题目描述

### 问题1
(1) 求 $|\cos i|$，并与 $1$ 比较。

(2) 求 $h(z)=1/\{(3z-1)^2(z+1)\}$ 在 $z=1/3$ 处的留数。

### 问题2
设 $I=\int_0^{2\pi}\frac{\sin\theta}{5-3\cos\theta}\,d\theta$。

(1) 用 $z=e^{i\theta}$ 将 $I$ 表示为围道积分。(2) 求 $I$。

### 问题3
偏角取 $0\le\arg z<2\pi$。

(1) 对正实数 $r$ 解方程 $z^2=ri$。

(2) 设 $\tau_1,\tau_2$ 是 $z^2+(1-i)z-i$ 的零点，求级数 $\sum_{n=1}^\infty z^n/[\tau_1^n\tau_2^n+(\tau_1+\tau_2)^n]$ 收敛并定义全纯函数的区域。

(3) 设 $\arg\tau_1<\arg\tau_2$，在复平面上标出两零点。

(4) 求 $g(z)=(z-\tau_2)/(z-\tau_1)$ 满足 $|g(z)|>1$ 的区域并作图。

## **Kai**

### 問題1
(1) $\cos i=(e+e^{-1})/2$ より、$|\cos i|=\cosh1>1$。

(2) 二位の極の留数公式から

$$
\operatorname{Res}_{z=1/3}h
=\left.\frac{d}{dz}\frac{1}{9(z+1)}\right|_{z=1/3}
=-\frac1{16}.
$$

### 問題2
(1) $d\theta=dz/(iz)$ より、反時計回りの単位円 $C$ を用いて

$$
I=\oint_C\frac{z^2-1}{z(3z-1)(z-3)}\,dz.
$$

(2) $C$ 内の極は $0,1/3$、留数はそれぞれ $-1/3,1/3$。よって $I=2\pi i(-1/3+1/3)=0$。

### 問題3
(1) $z=\pm\sqrt r\,e^{i\pi/4}=\pm\sqrt{r/2}(1+i)$。

(2) $f(z)=(z-i)(z+1)$ であり、係数の分母は $(-i)^n+(i-1)^n$。$q=(-i)/(i-1)$ とおくと $|q|=1/\sqrt2<1$ なので

$$
\frac{z^n}{(-i)^n+(i-1)^n}
=\frac{(z/(i-1))^n}{1+q^n}.
$$

収束半径は $\sqrt2$。$|z|=\sqrt2$ では一般項の絶対値が $1$ に収束し、級数は発散する。したがって求める範囲は $|z|<\sqrt2$。

(3) $\tau_1=i$（偏角 $\pi/2$）、$\tau_2=-1$（偏角 $\pi$）。

(4) $z=x+iy\ne i$ とすると

$$
|g(z)|>1\iff|z+1|^2>|z-i|^2\iff x+y>0.
$$

したがって直線 $y=-x$ の上側の開半平面から極 $z=i$ を除いた領域である。


![零点と |g(z)|>1 の領域](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2010/sys_200908_engineering_math_region.svg)

