---
sidebar_label: 2025年8月実施 数学 第2問
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation-by-Variable-Substitution
  - Mathematics.Differential-Equations.Separable-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Homogeneous-First-Order-Ordinary-Differential-Equation
  - Mathematics.Differential-Equations.Integrating-Factor
  - Mathematics.Differential-Equations.Bernoulli-Equation
  - Mathematics.Differential-Equations.Riccati-Equation
---
# 東京大学 情報理工学系研究科 2025年8月実施 数学 第2問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

$x$ を実数の独立変数，$y(x)$ を実数値関数として，以下の常微分方程式を考える．
ここで，$a,b,c,d$ は実数の定数であり，$x+cy+d\ne0$ とする．

$$
\frac{dy}{dx}=\frac{ax+y+b}{x+cy+d}.\tag{2.1}
$$

以下の問いに答えよ．

(1) $a=c=0$ とする．この場合の式 (2.1) の一般解を求めよ．

(2) $ac=1$ とする．この場合の式 (2.1) を適当な変数変換により変数分離形にせよ．

(3) $ac\ne1$ とする．この場合の式 (2.1) を適当な変数変換により同次形にせよ．

次に，以下のような形式の常微分方程式を考える．
ここで，$P(x),Q(x),R(x)$ は $x$ のみに依存する実数値関数である．

$$
\frac{dy}{dx}+P(x)+Q(x)y+R(x)y^2=0.\tag{2.2}
$$

(4) $R(x)=0$ とする．この場合の式 (2.2) の一般解を求めよ．

(5) $P(x)=0$ とする．この場合の式 (2.2) は，$y$ についての適当な変数変換により問 (4) と同様の形式の常微分方程式へ変形できることを示せ．また，その常微分方程式の一般解を求めよ．

(6) 式 (2.2) の特殊解の一つを $y_1(x)$ とする．変数変換 $z=y-y_1$ により，式 (2.2) は問 (5) と同様の形式の常微分方程式へ変形できることを示せ．

(7) $P(x)=x^2+x+1$，$Q(x)=2x+1$，$R(x)=1$ とする．この場合の式 (2.2) の一般解を求めよ．

#### 题目描述

设 $x$ 是实自变量，$y(x)$ 是实值函数，$a,b,c,d$ 是实常数，且 $x+cy+d\ne0$。考虑常微分方程

$$
\frac{dy}{dx}=\frac{ax+y+b}{x+cy+d}.\tag{2.1}
$$

（1）当 $a=c=0$ 时，求式 (2.1) 的通解。

（2）当 $ac=1$ 时，通过适当的变量代换，将式 (2.1) 化为可分离变量形式。

（3）当 $ac\ne1$ 时，通过适当的变量代换，将式 (2.1) 化为齐次形式。

再考虑下列常微分方程，其中 $P(x),Q(x),R(x)$ 是仅依赖于 $x$ 的实值函数：

$$
\frac{dy}{dx}+P(x)+Q(x)y+R(x)y^2=0.\tag{2.2}
$$

（4）当 $R(x)=0$ 时，求式 (2.2) 的通解。

（5）当 $P(x)=0$ 时，证明对 $y$ 作适当的变量代换，可将式 (2.2) 化为与（4）相同形式的常微分方程，并求该方程的通解。

（6）设 $y_1(x)$ 是式 (2.2) 的一个特解。证明代换 $z=y-y_1$ 可将式 (2.2) 化为与（5）相同形式的常微分方程。

（7）当 $P(x)=x^2+x+1$、$Q(x)=2x+1$、$R(x)=1$ 时，求式 (2.2) 的通解。

## **Kai**

### (1)

$$
\frac{d}{dx}\left(\frac{y+b}{x+d}\right)
=\frac{(x+d)y'-(y+b)}{(x+d)^2}=0
$$

より，任意定数 $C$ を用いて

$$
\boxed{y=C(x+d)-b},\qquad x\ne-d.
$$

### (2)

$ac=1$ なので $c\ne0$ である．$z=x+cy+d\ne0$ とおくと，

$$
\frac{dz}{dx}
=1+c\frac{ax+y+b}{x+cy+d}
=\frac{2z+bc-d}{z}.
$$

したがって，$2z+bc-d\ne0$ では変数分離形

$$
\boxed{\frac{z}{2z+bc-d}\,dz=dx}
$$

を得る．また，$bc\ne d$ の場合には，分離の際に除いた定数解
$z=(d-bc)/2$ も存在する．

### (3)

$$
h=\frac{bc-d}{1-ac},\qquad k=\frac{ad-b}{1-ac},
\qquad X=x-h,\quad Y=y-k
$$

とおく．$ah+k+b=0$，$h+ck+d=0$ なので，

$$
\boxed{\frac{dY}{dX}=\frac{aX+Y}{X+cY}}
$$

となる．右辺は $X,Y$ の零次同次関数であり，$X\ne0$ では
$(a+Y/X)/(1+cY/X)$ と書ける．

### (4)

基準点 $x_0$ を固定し，$q(x)=\int_{x_0}^x Q(s)\,ds$ とおく．
積分因子 $e^{q(x)}$ を用いると

$$
\frac{d}{dx}\bigl(e^{q(x)}y(x)\bigr)=-e^{q(x)}P(x).
$$

よって一般解は

$$
\boxed{
y(x)=e^{-q(x)}\left(C-\int_{x_0}^x e^{q(s)}P(s)\,ds\right)}.
$$

### (5)

$y\ne0$ の区間で $u=1/y$ とおくと，

$$
u'=-\frac{y'}{y^2}=Qu+R,
\qquad \boxed{u'-Qu-R=0}.
$$

これは問 (4) と同じ一階線形方程式であり，その一般解は

$$
\boxed{
u(x)=e^{q(x)}\left(C+\int_{x_0}^x e^{-q(s)}R(s)\,ds\right)}.
$$

元の方程式の解は，$y\equiv0$ および

$$
\boxed{
y(x)=\frac{e^{-q(x)}}{C+\displaystyle\int_{x_0}^x e^{-q(s)}R(s)\,ds}}
$$

である．後者は分母が零にならない区間で考える．

### (6)

$y=z+y_1$ を代入し，$y_1'+P+Qy_1+Ry_1^2=0$ を引くと，

$$
\boxed{z'+(Q+2Ry_1)z+Rz^2=0}.
$$

定数項がないので，問 (5) と同じ形式である．

### (7)

代入により $y_1=-x$ は特殊解である．$z=y+x$ とおくと，問 (6) から

$$
z'+z+z^2=0.
$$

$z\equiv0$ から $y=-x$ を得る．$z\ne0$ では $u=1/z$ とおくと

$$
u'-u=1,\qquad u=Ce^x-1.
$$

したがって，すべての解は

$$
\boxed{y=-x\quad\text{または}\quad y=-x+\frac{1}{Ce^x-1},\qquad C\in\mathbb R}
$$

で与えられる．後者は $Ce^x\ne1$ の区間で定義され，$C=0$ のとき $y=-x-1$ となる．

## **Knowledge**

変数分離形，同次形，一階線形微分方程式，積分因子，Bernoulli 方程式，Riccati 方程式．
