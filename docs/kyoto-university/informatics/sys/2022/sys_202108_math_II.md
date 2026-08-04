---
sidebar_label: 2021年8月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Limit
  - Mathematics.Vector-Calculus.Tangent-Plane
  - Mathematics.Calculus.Constrained-Optimization
---
# 京都大学 情報学研究科 システム科学専攻 2021年8月実施 数学【II】

## **Author**
[AKIRA](https://www.xiaohongshu.com/explore/68804b1d00000000220332c4?xsec_token=ABD2nmTyzV9BsHCYcB91Nc8sv7PkkHrxsq6neCoP3jUIM=)

## **Description**
### 問1

$\mathbb{R}$ を実数全体からなる集合とし、$e$ をネイピア数（自然対数の底）とする。実数 $M > 0$ に対して $xy$-平面上の領域 $D(M)$ を

$$
D(M) = \{ (x,y) \in \mathbb{R}^2 : y > 0, \; Mx > y^2 \}
$$

とし、以下の積分を考える。ただし $\alpha, \beta$ は実数とする。

$$
I_{\alpha,\beta}(M) = \iint_{D(M)} \left(1 + \frac{y^2}{x} \right)^{-\alpha} \left( 1 + \frac{x}{y^2} \right)^{-1/2} e^{-\beta(x+y^2) - \sqrt{x+y^2} + y} \, dxdy
$$

この積分を求めるために、以下の写像によって変数 $(x,y)$ を $(z,w)$ に変換することを考える。

$$
z = x + y^2, \quad w = \frac{y^2}{x + y^2}
$$

以下の設問に答えよ。なお、以降では自然数 $n \geq 1$ について次式が成り立つことを用いて良い。

$$
\int_0^{\infty} t^{n-1}e^{-t}dt = (n-1)!
$$

(i) 上記の写像による領域 $D(M)$ の $zw$-平面上の像 $E(M)$ を求めよ。

(ii) 以下の空欄に入る式を $z, w, \alpha, \beta$ を用いて表せ。

$$
I_{\alpha,\beta}(M) = \iint_{E(M)} \; \boxed{\quad \quad} \; dzdw
$$

(iii) $I_{0,0}(1/3) = \frac{1}{2} \int_0^{1/4} \int_{0}^{\infty} e^{-(1-\sqrt{w})\sqrt{z}} \sqrt{z} \, dzdw$ の値を求めよ。

(iv) 任意の $\beta > 0$ に対して

$$
\lim_{M \to \infty} \frac{\log I_{-1,\beta}(M)}{\log \log M} = 1
$$

が成立つことを示せ。

### 問2

$x,y,z$ を直交座標系とする3次元ユークリッド空間における2つの楕円体

$$
E : \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 1,
$$

$$
E' : \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} = 3
$$

を考える。ただし、$a,b,c$ は正の定数とする。以下の設問に答えよ。

(i) $E$ 上の点 $P(p,q,r)$ における $E$ の接平面の方程式を求めよ。

(ii) $E$ の外部の $1$ 点 $Q(l,m,n)$ を考える。$Q$ を通る $E$ の接平面すべてを考え、それらの接点の集合を $W$ とする。$W$ は、ある平面 $S$ に含まれる（図1）。平面 $S$ の方程式を求めよ。

設問(ii)で求めた $S$ によるの切断面は楕円となる。以下ではこの楕円を $R$ とする。

(iii) 設問(ii)の点 $Q$ が楕円体 $E'$ 上にあるとき、$R$ の中心座標 $T(x_0,y_0,z_0)$ を求めよ。

(iv) 設問(ii)の点 $Q$ が楕円体 $E'$ 上を動くとき、設問(iii)で示した $R$ の中心座標について、各成分の積

$$
J = x_0 y_0 z_0
$$

が最大となる点 $Q(l,m,n)$ とそのときの $J$ の値を求めよ。


<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_II_p1.png" width="300" alt=""/>
</figure>

### 题目描述

1. 令 $\mathbb R$ 为实数集，$e$ 为自然对数的底。对实数 $M>0$，在 $xy$ 平面上定义区域

   $$
   D(M)=\{(x,y)\in\mathbb R^2\mid y>0,\ Mx>y^2\}.
   $$

   对实数 $\alpha,\beta$，考虑积分

   $$
   I_{\alpha,\beta}(M)
   =
   \iint_{D(M)}
   \left(1+\frac{y^2}{x}\right)^{-\alpha}
   \left(1+\frac{x}{y^2}\right)^{-1/2}
   e^{-\beta(x+y^2)-\sqrt{x+y^2}+y}
   \,dx\,dy.
   $$

   为计算该积分，作变量变换

   $$
   z=x+y^2,\qquad
   w=\frac{y^2}{x+y^2}.
   $$

   以下可使用对自然数 $n\geq1$ 成立的公式

   $$
   \int_0^\infty t^{n-1}e^{-t}\,dt=(n-1)!.
   $$

   （i）求区域 $D(M)$ 在上述映射下于 $zw$ 平面中的像 $E(M)$。

   （ii）用 $z,w,\alpha,\beta$ 写出下式方框中的被积函数：

   $$
   I_{\alpha,\beta}(M)
   =
   \iint_{E(M)}
   \boxed{\qquad}\,dz\,dw.
   $$

   （iii）计算

   $$
   I_{0,0}\!\left(\frac13\right)
   =
   \frac12\int_0^{1/4}\int_0^\infty
   e^{-(1-\sqrt w)\sqrt z}\sqrt z\,dz\,dw.
   $$

   （iv）证明对任意 $\beta>0$，

   $$
   \lim_{M\to\infty}
   \frac{\log I_{-1,\beta}(M)}
        {\log\log M}
   =1.
   $$

2. 在以 $x,y,z$ 为直角坐标的三维 Euclidean 空间中，考虑两个椭球面

   $$
   E:\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=1,
   $$

   $$
   E':\frac{x^2}{a^2}+\frac{y^2}{b^2}+\frac{z^2}{c^2}=3,
   $$

   其中 $a,b,c$ 为正常数。

   （i）求椭球面 $E$ 在点 $P(p,q,r)\in E$ 处的切平面方程。

   （ii）取椭球 $E$ 外一点 $Q(l,m,n)$，考虑所有经过 $Q$ 且与 $E$ 相切的平面，并令其全部切点组成集合 $W$。如图 1 所示，$W$ 包含在某个平面 $S$ 内，求 $S$ 的方程。

   平面 $S$ 截取椭球所得截面为一个椭圆，以下记为 $R$。

   （iii）当第（ii）问的点 $Q$ 位于椭球面 $E'$ 上时，求椭圆 $R$ 的中心坐标 $T(x_0,y_0,z_0)$。

   （iv）当 $Q$ 在椭球面 $E'$ 上移动时，求使 $R$ 的中心坐标分量乘积

   $$
   J=x_0y_0z_0
   $$

   最大的点 $Q(l,m,n)$，以及该最大值。

   <figure style="text-align:center;">
     <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_II_p1.png" width="300" alt=""/>
   </figure>

## **Kai**
### 問1

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_II_p1_s_1.jpg" width="700" alt=""/>
</figure>

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_II_p1_s_2.jpg" width="700" alt=""/>
</figure>

### 問2

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/sys_202108_math_II_p2_s.jpg" width="700" alt=""/>
</figure>
