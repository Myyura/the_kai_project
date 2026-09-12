---
sidebar_label: 2007年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Roots
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Laurent-Series
---

# 京都大学 情報学研究科 システム科学専攻 2007年8月実施 工業数学

## **Author**

犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

### 問題1
(1) $2\cos(\pi+i)$ を求めよ。(2) $1/(z^6+1)$ の極を求めよ。

### 問題2
$\int_{-\infty}^\infty x^2/(x^2+1)^2\,dx$ を求めよ。

### 問題3
互いに異なる複素数 $z_1,z_2,z_3$ を頂点とする三角形が正三角形となる必要十分条件を、$\tau=(z_2-z_1)/(z_3-z_1)$ の値として与え、理由を述べよ。

### 問題4
(1) $1/\{z(1-z)\}$ を原点中心、原点近傍（原点を除く）でローラン展開し、収束領域を求めよ。

(2) $z^{-2}e^{1/z}$ を原点中心、無限遠点を含む領域でローラン展開し、収束領域を求めよ。

#### 题目描述

### 问题1
(1) 求 $2\cos(\pi+i)$。(2) 求 $1/(z^6+1)$ 的极点。

### 问题2
求 $\int_{-\infty}^{\infty}x^2/(x^2+1)^2\,dx$。

### 问题3
$z_1,z_2,z_3$ 为不同复数。给出以它们为顶点的三角形为正三角形的充要条件，以 $\tau=(z_2-z_1)/(z_3-z_1)$ 的值表示，并说明理由。

### 问题4
(1) 将 $1/[z(1-z)]$ 在以原点为中心的去心邻域作洛朗展开并求收敛域。

(2) 将 $z^{-2}e^{1/z}$ 在以原点为中心、包含无穷远点的区域作洛朗展开并求收敛域。

## **Kai**

### 問題1
(1) $2\cos(\pi+i)=-(e+e^{-1})$。

(2) $z^6=-1$ より、$\boxed{z_k=e^{(2k+1)\pi i/6}\ (k=0,\ldots,5)}$。いずれも一位の極である。

### 問題2
$f(z)=z^2/\{(z-i)^2(z+i)^2\}$ を上半円で積分する。二位の極 $i$ の留数は

$$
\operatorname{Res}_{z=i}f=\left.\frac{d}{dz}\frac{z^2}{(z+i)^2}\right|_{z=i}=-\frac i4.
$$

円弧積分の絶対値は $\pi R^3/(R^2-1)^2\to0$ なので、留数定理より $\boxed{I=2\pi i(-i/4)=\pi/2}$。

### 問題3
平行移動と非零複素数による除算で、頂点は $0,\tau,1$ に移る。正三角形であることは $|\tau|=|\tau-1|=1$ と同値。したがって

$$
\boxed{\tau=\frac12\pm\frac{\sqrt3}{2}i=e^{\pm i\pi/3}}.
$$

### 問題4
(1) 等比級数より

$$
\frac1{z(1-z)}=\sum_{n=0}^\infty z^{n-1}
=\frac1z+1+z+z^2+\cdots,\qquad0<|z|<1.
$$

(2) 指数関数の展開より

$$
z^{-2}e^{1/z}=\sum_{n=0}^\infty\frac{z^{-n-2}}{n!},\qquad0<|z|<\infty.
$$

$w=1/z$ とすると $w^2e^w$ は $w=0$ でも正則であり、無限遠点も含まれる。

