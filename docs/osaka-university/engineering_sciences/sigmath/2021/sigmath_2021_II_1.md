---
sidebar_label: "2021年度 数理科学 II [1]"
tags:
  - Osaka-University
  - Mathematics.Differential-Equations
---

# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2021年度 数理科学 II \[1\]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

(1) $P,Q\in C^1(\mathbb R^2)$ は任意の実数 $\lambda$ について $P(\lambda x,\lambda y)=\lambda^2P(x,y)$、$Q(\lambda x,\lambda y)=\lambda^2Q(x,y)$ を満たす。

$$
M(x,y)=\frac1{xP(x,y)+yQ(x,y)}
$$

とおくと $\partial_y(MP)=\partial_x(MQ)$ が成り立つことを示せ。

(2) 微分方程式 $y^2\,dx+(x^2-xy)\,dy=0$ を解け。

## **Kai**

### (1)
同次性を $\lambda$ で微分して $\lambda=1$ とおくと

$$
xP_x+yP_y=2P,\qquad xQ_x+yQ_y=2Q.
$$

$D=xP+yQ\ne0$ の範囲で

$$
\partial_y\frac PD-\partial_x\frac QD
=\frac{Q(xP_x+yP_y)-P(xQ_x+yQ_y)}{D^2}=0.
$$

### (2)
$P=y^2,Q=x^2-xy$ とすれば $D=x^2y$。$xy\ne0$ で積分因子 $1/(x^2y)$ を掛けると

$$
\frac y{x^2}\,dx+\left(\frac1y-\frac1x\right)dy
=d\left(\log|y|-\frac yx\right)=0.
$$

したがって一般積分は

$$
\boxed{\log|y|-\frac yx=C\quad(xy\ne0)}.
$$

積分因子で除外した直線 $\boxed{y=0}$ および $\boxed{x=0}$ も元の微分形式の積分曲線である。
