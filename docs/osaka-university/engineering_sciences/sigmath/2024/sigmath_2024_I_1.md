---
sidebar_label: "2024年度 数理科学 [I-1]"
tags:
  - Osaka-University
  - Mathematics.Calculus.Triple-Integral
---
# 大阪大学 基礎工学研究科 数理科学 (システム創成専攻) 2024年度 数理科学 [I-1]

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

$$
\Omega=\left\{(x,y,z)\in\mathbb R^3\;\middle|\;
\left(\sqrt{x^2+y^2}-2\right)^2+z^2\le1,\ x\ge0\right\}
$$

とおく。

(1) $\Omega$ の各点は

$$
x=(2+r\cos\theta)\cos\varphi,\quad y=(2+r\cos\theta)\sin\varphi,\quad z=r\sin\theta
$$

と表せる。ただし $0\le r\le1$, $0\le\theta<2\pi$, $-\pi/2\le\varphi\le\pi/2$ とする。ヤコビアン $\partial(x,y,z)/\partial(r,\theta,\varphi)$ を求めよ。

(2) $\iiint_\Omega(x^2+y^2)\,dx\,dy\,dz$ を求めよ。

## **Kai**

### (1)

$\rho=2+r\cos\theta$ とおくと

$$
\frac{\partial(x,y,z)}{\partial(r,\theta,\varphi)}
=\det\begin{pmatrix}
\cos\theta\cos\varphi&-r\sin\theta\cos\varphi&-\rho\sin\varphi\\
\cos\theta\sin\varphi&-r\sin\theta\sin\varphi&\rho\cos\varphi\\
\sin\theta&r\cos\theta&0
\end{pmatrix}
=\boxed{-r(2+r\cos\theta)}.
$$

### (2)

$\rho\ge1$ なので体積要素は $r\rho\,dr\,d\theta\,d\varphi$。したがって

$$
\begin{aligned}
\iiint_\Omega(x^2+y^2)\,dx\,dy\,dz
&=\pi\int_0^1\int_0^{2\pi}r(2+r\cos\theta)^3\,d\theta\,dr\\
&=\pi\int_0^1r(16\pi+6\pi r^2)\,dr
=\boxed{\frac{19\pi^2}{2}}.
\end{aligned}
$$
