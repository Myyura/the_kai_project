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

$x^2+y^2\le4$ を満たす領域を $D$ とする。

1. $D_1=\{(x,y)\in D:x\ge1\}$ とするとき、$\iint_{D_1}x\,dx\,dy$ を計算せよ。
2. $D_2=\{(x,y)\in D:x\ge0,y\ge0\}$ とするとき、$\iint_{D_2}(x+y)\,dx\,dy$ を計算せよ。
3. $D$ の境界を $C_1$ とするとき、次を計算せよ。

   $$
   \oint_{C_1}\{(x+y^2)\,dx-(x^2-y)\,dy\}.
   $$

4. $z=4-x^2-y^2$ と $x+y+z=1$ との切断面の境界を $C_2$ とするとき、次を計算せよ。

   $$
   \oint_{C_2}\{(z^2-y^2)\,dx+(x^2-z^2)\,dy+(y^2-x^2)\,dz\}.
   $$

#### 题目描述

设 $D:x^2+y^2\le4$。① 在 $D$ 中 $x\ge1$ 的部分积分 $x$。② 在 $D$ 的第一象限部分积分 $x+y$。③ 沿 $D$ 的边界计算 $\oint[(x+y^2)dx-(x^2-y)dy]$。④ 沿抛物面 $z=4-x^2-y^2$ 与平面 $x+y+z=1$ 的交线计算 $\oint[(z^2-y^2)dx+(x^2-z^2)dy+(y^2-x^2)dz]$。原题未指定边界方向，第四问需要说明方向约定。

## **Kai**

### (1)

$$
\iint_{D_1}x\,dx\,dy=2\int_1^2x\sqrt{4-x^2}\,dx
=\left[-\frac23(4-x^2)^{3/2}\right]_1^2
=\boxed{2\sqrt3}.
$$

### (2)

極座標 $x=r\cos\theta,y=r\sin\theta$ より

$$
\int_0^{\pi/2}\int_0^2r^2(\cos\theta+\sin\theta)\,dr\,d\theta
=\frac83\cdot2=\boxed{\frac{16}{3}}.
$$

### (3)

反時計回りに Green の定理を適用すると

$$
\oint_{C_1}\{(x+y^2)\,dx-(x^2-y)\,dy\}
=\iint_D(-2x-2y)\,dx\,dy=\boxed0.
$$

原点対称性を用いた。逆向きでも値は $0$ である。

### (4)

法線を $\boldsymbol n=(1,1,1)/\sqrt3$ とし、それに対する右ねじの向きに $C_2$ を回るものとする。

$$
\boldsymbol F=(z^2-y^2,x^2-z^2,y^2-x^2),\qquad
\nabla\times\boldsymbol F=2(y+z,z+x,x+y).
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
