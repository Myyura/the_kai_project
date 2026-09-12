---
sidebar_label: 2021年7月実施 数学【II】
tags:
  - Kyoto-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Limit
  - Mathematics.Vector-Calculus.Tangent-Plane
  - Mathematics.Calculus.Constrained-Optimization
---
# 京都大学 情報学研究科 システム科学専攻 2021年7月実施 数学【II】

## **Author**
[AKIRA](https://www.xiaohongshu.com/explore/68804b1d00000000220332c4?xsec_token=ABD2nmTyzV9BsHCYcB91Nc8sv7PkkHrxsq6neCoP3jUIM=)

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2021_sys.pdf)
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

設問(ii)で求めた $S$ による $E$ の切断面は楕円となる。以下ではこの楕円を $R$ とする。

(iii) 設問(ii)の点 $Q$ が楕円体 $E'$ 上にあるとき、$R$ の中心座標 $T(x_0,y_0,z_0)$ を求めよ。

(iv) 設問(ii)の点 $Q$ が楕円体 $E'$ 上を動くとき、設問(iii)で示した $R$ の中心座標について、各成分の積

$$
J = x_0 y_0 z_0
$$

が最大となる点 $Q(l,m,n)$ とそのときの $J$ の値を求めよ。


![楕円体 E と接点の楕円 R、中心 T](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2022/sys_202107_math_II_ellipsoid.svg)

#### 题目描述

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

   ![楕円体 E と接点の楕円 R、中心 T](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2022/sys_202107_math_II_ellipsoid.svg)

## **Kai**

### 問1
(i) $x=z(1-w),y=\sqrt{zw}$ と逆変換できる。$y>0,Mx>y^2$ より

$$
\boxed{E(M)=\{(z,w):z>0,\ 0<w<M/(1+M)\}}.
$$

(ii) ヤコビアンの絶対値は

$$
\left|\frac{\partial(x,y)}{\partial(z,w)}\right|=\frac{\sqrt z}{2\sqrt w}.
$$

従って求める被積分関数は

$$
\boxed{\frac12(1-w)^\alpha\sqrt z\,
e^{-\beta z-(1-\sqrt w)\sqrt z}}.
$$

(iii) $t=(1-\sqrt w)\sqrt z$ とおき、$\int_0^\infty t^2e^{-t}\,dt=2$ を使うと

$$
I_{0,0}(1/3)=2\int_0^{1/4}(1-\sqrt w)^{-3}\,dw
=4\int_0^{1/2}\frac u{(1-u)^3}\,du=\boxed2.
$$

(iv) $\beta>0$ を固定し

$$
J(w)=\int_0^\infty\sqrt z\,e^{-\beta z-(1-\sqrt w)\sqrt z}\,dz
$$

とおく。$0\le w\le1$ に対して $0<J(0)\le J(w)\le J(1)<\infty$。従って

$$
\frac{J(0)}2\log(1+M)\le I_{-1,\beta}(M)\le\frac{J(1)}2\log(1+M).
$$

対数をとれば $\log I_{-1,\beta}(M)=\log\log(1+M)+O(1)$ だから

$$
\boxed{\lim_{M\to\infty}\frac{\log I_{-1,\beta}(M)}{\log\log M}=1}.
$$

### 問2
(i) 定義式の勾配を法線にとり、$P\in E$ を用いると

$$
\boxed{\frac{px}{a^2}+\frac{qy}{b^2}+\frac{rz}{c^2}=1}.
$$

(ii) この接平面が $Q(l,m,n)$ を通る条件は $lp/a^2+mq/b^2+nr/c^2=1$ である。従って接点の集合を含む平面は

$$
\boxed{S:\frac{lx}{a^2}+\frac{my}{b^2}+\frac{nz}{c^2}=1}.
$$

(iii) $X=x/a,Y=y/b,Z=z/c$ によって $E$ は単位球面となる。$Q$ の像を $q=(l/a,m/b,n/c)$ とすれば、切断平面は $q\cdot(X,Y,Z)=1$、$\|q\|^2=3$。切断円の中心は $q/3$ であり、逆の線形変換は中心を保つので

$$
\boxed{T=(l/3,m/3,n/3)}.
$$

(iv) $u=l/a,v=m/b,w=n/c$ とおくと $u^2+v^2+w^2=3$。相加相乗平均より $|uvw|\le1$ だから $J=abc\,uvw/27\le abc/27$。等号は $|u|=|v|=|w|=1$ かつ $uvw>0$ のときである。従って

$$
\boxed{J_{\max}=\frac{abc}{27},\qquad
Q=(a,b,c),(a,-b,-c),(-a,b,-c),(-a,-b,c)}.
$$

