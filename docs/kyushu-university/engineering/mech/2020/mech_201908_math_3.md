---
sidebar_label: "2019年8月実施 問3（数学）"
tags:
  - Kyushu-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Vector-Calculus.Stokes-Theorem
---

# 九州大学 工学府 機械系専攻 2019年8月実施 数学 問3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$x^2+y^2\le4$ を満たす領域を $D$ とする。以下の問いに答えよ。（50点）

(1) 領域 $D$ において、$x\ge1$ を満たす領域を $D_1$ とするとき、以下を計算せよ。

$$
\iint_{D_1}x\,dx\,dy.
$$

(2) 領域 $D$ において、$x\ge0,\ y\ge0$ の領域を $D_2$ とするとき、以下を計算せよ。

$$
\iint_{D_2}(x+y)\,dx\,dy.
$$

(3) 領域 $D$ の境界を $C_1$ とするとき、以下を計算せよ。

$$
\oint_{C_1}\{(x+y^2)\,dx-(x^2-y)\,dy\}.
$$

(4) $z=4-x^2-y^2$ と $x+y+z=1$ の切断面の境界を $C_2$ とするとき、以下を計算せよ。

$$
\oint_{C_2}\Bigl\{\begin{aligned}
&(z^2-y^2)\,dx+(x^2-z^2)\,dy\\
&\qquad{}+(y^2-x^2)\,dz
\end{aligned}\Bigr\}.
$$

#### 题目描述

将满足 $x^2+y^2\le4$ 的区域记为 $D$，回答以下各问。（50分）

(1) 将区域 $D$ 中满足 $x\ge1$ 的部分记为 $D_1$，计算下列积分。

$$
\iint_{D_1}x\,dx\,dy.
$$

(2) 将区域 $D$ 中满足 $x\ge0,\ y\ge0$ 的部分记为 $D_2$，计算下列积分。

$$
\iint_{D_2}(x+y)\,dx\,dy.
$$

(3) 将区域 $D$ 的边界记为 $C_1$，计算下列积分。

$$
\oint_{C_1}\{(x+y^2)\,dx-(x^2-y)\,dy\}.
$$

(4) 将 $z=4-x^2-y^2$ 与 $x+y+z=1$ 的截面边界记为 $C_2$，计算下列积分。

$$
\oint_{C_2}\Bigl\{\begin{aligned}
&(z^2-y^2)\,dx+(x^2-z^2)\,dy\\
&\qquad{}+(y^2-x^2)\,dz
\end{aligned}\Bigr\}.
$$

## **Kai**

### (1)

$$
\begin{gathered}
\iint_{D_1}x\,dx\,dy=2\int_1^2x\sqrt{4-x^2}\,dx\\
=\left[-\frac23(4-x^2)^{3/2}\right]_1^2\\
=\boxed{2\sqrt3}.
\end{gathered}
$$

### (2)

極座標 $x=r\cos\theta,y=r\sin\theta$ より

$$
\begin{gathered}
\int_0^{\pi/2}\int_0^2r^2(\cos\theta+\sin\theta)\,dr\,d\theta
=\frac83\cdot2\\
=\boxed{\frac{16}{3}}.
\end{gathered}
$$

### (3)

反時計回りに Green の定理を適用すると

$$
\begin{gathered}
\oint_{C_1}\{(x+y^2)\,dx-(x^2-y)\,dy\}
=\iint_D(-2x-2y)\,dx\,dy\\
=\boxed0.
\end{gathered}
$$

原点対称性を用いた。逆向きでも値は $0$ である。

### (4)

法線を $\boldsymbol n=(1,1,1)/\sqrt3$ とし、それに対する右ねじの向きに $C_2$ を回るものとする。

$$
\begin{gathered}
\boldsymbol F=(z^2-y^2,x^2-z^2,y^2-x^2),\\
\nabla\times\boldsymbol F=2(y+z,z+x,x+y).
\end{gathered}
$$

平面上では $(\nabla\times\boldsymbol F)\cdot\boldsymbol n=4/\sqrt3$。切断面の $xy$ 平面への射影は

$$
(x-\tfrac12)^2+(y-\tfrac12)^2\le\frac72
$$

なので、面積は $\sqrt3(7\pi/2)$。Stokes の定理により

$$
\boxed{\oint_{C_2}\boldsymbol F\cdot d\boldsymbol r=14\pi}.
$$

原題には向きの指定がない。逆向きを採用すると $-14\pi$ となる。

## **Reference**

- [九州大学 2020年度 数学 公式問題（PDF 2ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-math.pdf)
