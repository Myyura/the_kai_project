---
sidebar_label: '2023年8月実施 数学 第3問'
tags:
  - Tokyo-University
  - Mathematics.Geometry.Complex-Plane-Geometry
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Dirichlet-Integral-by-Indented-Contour
---

# 東京大学 工学系研究科 2023年8月実施 数学 第3問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$z$ は複素数、$\bar z$ はその複素共役、$\arg z$ は偏角、$i$ は虚数単位とする。

I. 不等式

$$
z\bar z+\sqrt2(z+\bar z)+3i(z-\bar z)+2\le0
$$

を満たす領域を複素平面上に図示せよ。

II. 複素数値関数

$$
f(z)=\frac{z^2-2}{(z^2+2i)z^2}
$$

について、以下の問いに答えよ。

1. すべての極と、その位数および留数を求めよ。
2. $C$ は円 $|z+1|=2$ を反時計回りに一周する積分路とする。留数定理を用いて $I_1=\oint_Cf(z)\,dz$ を求めよ。

III.

1. 複素数値関数 $g(z)$ が $0\le\arg z\le\pi$ において $\lim_{|z|\to\infty}g(z)=0$ を満たすとする。$C_R$ を上半平面内の原点中心、半径 $R$ の半円弧とする。正の実数 $a$ に対して

$$
\lim_{R\to\infty}\int_{C_R}e^{iaz}g(z)\,dz=0
$$

を示せ。
2. $I_2=\int_0^{\infty}(\sin x)/x\,dx$ を求めよ。

#### 题目描述

以下 $z$ 为复数，$\bar z$ 为其共轭，$\arg z$ 为辐角，$i$ 为虚数单位。

I. 在复平面上画出满足

$$
z\bar z+\sqrt2(z+\bar z)+3i(z-\bar z)+2\le0
$$

的区域。

II. 对

$$
f(z)=\frac{z^2-2}{(z^2+2i)z^2},
$$

完成下列各问。

1. 求全部极点的阶数及留数。
2. 设 $C$ 为圆 $|z+1|=2$ 的逆时针闭合曲线，利用留数定理求 $I_1=\oint_Cf(z)\,dz$。

III.

1. 设复值函数 $g$ 在 $0\le\arg z\le\pi$ 内满足 $\lim_{|z|\to\infty}g(z)=0$。若 $C_R$ 为以原点为中心、半径 $R$ 的上半圆弧，证明对 $a>0$ 有

$$
\lim_{R\to\infty}\int_{C_R}e^{iaz}g(z)\,dz=0.
$$

2. 求 $I_2=\int_0^{\infty}(\sin x)/x\,dx$。

## **Kai**

### I

$z=x+iy$ とおいて平方完成すると、

$$
\boxed{(x+\sqrt2)^2+(y-3)^2\le9}.
$$

これは中心 $-\sqrt2+3i$、半径 $3$ の閉円板である。

![実線の境界を含む閉円板](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2024/math3-disk.svg)

### II

極は $0$（2位）と $\pm(1-i)$（1位）である。$z^2f(z)$ は偶関数なので、

$$
\operatorname{Res}(f,0)=\left[\frac d{dz}\frac{z^2-2}{z^2+2i}\right]_{z=0}=0.
$$

$\alpha=\pm(1-i)$ に対し、

$$
\operatorname{Res}(f,\alpha)=\frac{\alpha^2-2}{2\alpha^3}=\frac{1-i}{2\alpha}.
$$

したがって

$$
\boxed{\operatorname{Res}(f,1-i)=\frac12,\qquad\operatorname{Res}(f,-1+i)=-\frac12}.
$$

円 $|z+1|=2$ の内部には $0,-1+i$ があり、$1-i$ は外部にある。よって

$$
\boxed{I_1=2\pi i\left(0-\frac12\right)=-\pi i}.
$$

### III.1

$M_R=\sup_{z\in C_R}|g(z)|$ とおくと、仮定より $M_R\to0$ である。$z=Re^{i\theta}$ とおき、$0\le\theta\le\pi/2$ で $\sin\theta\ge2\theta/\pi$ を用いると、

$$
\begin{aligned}
\left|\int_{C_R}e^{iaz}g(z)\,dz\right|
&\le RM_R\int_0^\pi e^{-aR\sin\theta}\,d\theta\\
&\le2RM_R\int_0^{\pi/2}e^{-2aR\theta/\pi}\,d\theta
\le\frac{\pi M_R}{a}\longrightarrow0.
\end{aligned}
$$

### III.2

$e^{iz}/z$ に対し、上半平面に閉じた積分路を取り、原点を半径 $\varepsilon$ の時計回りの小半円で避ける。内部に極はない。大半円上の積分は III.1 により零に収束し、小半円上では

$$
\int_{\pi}^{0}i e^{i\varepsilon e^{i\theta}}\,d\theta\longrightarrow-i\pi.
$$

したがって実軸上の二つの積分の和は $i\pi$ に収束する。虚部を取り、$\sin x/x$ の偶性を用いると、

$$
\boxed{I_2=\frac\pi2}.
$$

