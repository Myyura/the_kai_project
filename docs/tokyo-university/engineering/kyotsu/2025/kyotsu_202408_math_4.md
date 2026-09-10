---
sidebar_label: '2024年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Vector-Calculus.Parametric-Surface
  - Mathematics.Vector-Calculus.Surface-Normal
  - Mathematics.Geometry.Torus-Volume
  - Mathematics.Geometry.Arc-Length-Parameter-and-Curvature
---

# 東京大学 工学系研究科 2024年8月実施 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

三次元直交座標系の曲面 $S$ を

$$
\begin{pmatrix}x(\theta,\phi)\\y(\theta,\phi)\\z(\theta,\phi)\end{pmatrix}
=\begin{pmatrix}\cos\theta&-\sin\theta&0\\\sin\theta&\cos\theta&0\\0&0&1\end{pmatrix}
\begin{pmatrix}\cos\phi+2\\0\\\sin\phi\end{pmatrix},\qquad0\le\theta,\phi<2\pi
$$

で定義する。$S$ で囲まれた領域を $V$、不等式 $x^2+y^2\le4$ を満たす領域を $W$ とする。

I. $S$ 上の点 $P=(1/\sqrt2,1/\sqrt2,0)^T$ における、$V$ の内側を向く単位法線ベクトルを求めよ。

II. $S$ のうち $W$ に含まれる部分の面積を求めよ。

III. $V$ と $W$ の共通部分の体積を求めよ。

IV. $\theta=\phi$ として定義される $S$ 上の空間曲線を $C$ とする。$C$ 上の点 $Q=(0,2,1)^T$ における曲率を求めよ。必要ならば

$$
\kappa(t)=\frac{|\boldsymbol c'(t)\times\boldsymbol c''(t)|}{|\boldsymbol c'(t)|^3}
$$

を用いてよい。

#### 题目描述

三维直角坐标系中的曲面 $S$ 定义为

$$
\begin{pmatrix}x(\theta,\phi)\\y(\theta,\phi)\\z(\theta,\phi)\end{pmatrix}
=\begin{pmatrix}\cos\theta&-\sin\theta&0\\\sin\theta&\cos\theta&0\\0&0&1\end{pmatrix}
\begin{pmatrix}\cos\phi+2\\0\\\sin\phi\end{pmatrix},
$$

其中 $0\le\theta,\phi<2\pi$。设 $V$ 为 $S$ 围成的区域，$W=\{(x,y,z):x^2+y^2\le4\}$。

I. 在 $S$ 上点 $P=(1/\sqrt2,1/\sqrt2,0)^T$ 处，求朝向 $V$ 内部的单位法向量。

II. 求 $S$ 中包含于 $W$ 的部分的面积。

III. 求 $V\cap W$ 的体积。

IV. 令 $\theta=\phi$，得到 $S$ 上的空间曲线 $C$。求 $C$ 上点 $Q=(0,2,1)^T$ 处的曲率。可使用

$$
\kappa(t)=\frac{|\boldsymbol c'(t)\times\boldsymbol c''(t)|}{|\boldsymbol c'(t)|^3}.
$$

## **Kai**

### I

媒介変数表示を展開すると、

$$
\boldsymbol r=((2+\cos\phi)\cos\theta,(2+\cos\phi)\sin\theta,\sin\phi).
$$

外向き単位法線ベクトルは $(\cos\phi\cos\theta,\cos\phi\sin\theta,\sin\phi)$ である。点 $P$ は $\theta=\pi/4,\phi=\pi$ に対応するので、内向き単位法線は

$$
\boxed{\boldsymbol n=\left(\frac1{\sqrt2},\frac1{\sqrt2},0\right)}.
$$

### II

$S$ 上で $x^2+y^2\le4$ は $\cos\phi\le0$、すなわち $\pi/2\le\phi\le3\pi/2$ と同値である。面積要素は

$$
dS=|\boldsymbol r_\theta\times\boldsymbol r_\phi|\,d\theta\,d\phi=(2+\cos\phi)\,d\theta\,d\phi.
$$

よって

$$
\boxed{S_W=\int_0^{2\pi}\int_{\pi/2}^{3\pi/2}(2+\cos\phi)\,d\phi\,d\theta=4\pi(\pi-1)}.
$$

### III

円柱座標 $\rho=\sqrt{x^2+y^2}$ を用いると、$V:(\rho-2)^2+z^2\le1$、$W:\rho\le2$ である。$u=\rho-2$ とおけば、

$$
\begin{aligned}
\operatorname{Vol}(V\cap W)
&=4\pi\int_{-1}^0(u+2)\sqrt{1-u^2}\,du\\
&=4\pi\left(-\frac13+\frac\pi2\right)
=\boxed{2\pi^2-\frac{4\pi}{3}}.
\end{aligned}
$$

### IV

$\theta=\phi=t$ とおくと、$Q$ は $t=\pi/2$ に対応する。微分すると、

$$
\boldsymbol c'(\pi/2)=(-2,-1,0),\qquad\boldsymbol c''(\pi/2)=(2,-2,-1).
$$

外積は $(1,-2,6)$ なので、

$$
\boxed{\kappa(Q)=\frac{\sqrt{41}}{5\sqrt5}}.
$$

