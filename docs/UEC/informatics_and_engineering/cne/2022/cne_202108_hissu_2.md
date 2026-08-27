---
sidebar_label: 2021年8月実施 必須問題 微分積分
tags:
  - University-of-Electro-Communications
  - Mathematics.Calculus.Extrema
  - Mathematics.Calculus.Hessian-Test-for-Multivariable-Extrema
  - Mathematics.Calculus.Implicit-Differentiation
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
---

# 電気通信大学 情報理工学研究科 情報・ネットワーク工学専攻 2021年8月実施 必須問題 微分積分

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### (1)

$$
f(x,y)=3x^2-12xy+y^3+6y^2-15y-3
$$

とし、$f(x,y)=0$ が定める曲線を $C$ とする。

1. $f$ の極値をすべて求めよ。
2. $C$ 上の点 $(1,3)$ における接線を求めよ。

### (2)

次の重積分を求めよ。

$$
I_1=\iint_{D_1}\frac{dx\,dy}{5-\sqrt{x^2+y^2}},\qquad
D_1=\{(x,y)\mid1\le x^2+y^2\le16\},
$$

$$
I_2=\iint_{D_2}(x^2-y^2)^2\,dx\,dy,\qquad
D_2=\{(x,y)\mid2\le x+y\le3,\ -1\le x-y\le1\},
$$

$$
I_3=\iint_{D_3}\cos\!\left(\frac\pi2y^2\right)dx\,dy,\qquad
D_3=\{(x,y)\mid0\le x\le1,\ x\le y\le1\}.
$$

### 题目描述

求二元多项式的全部极值及其零水平曲线在指定点的切线，并分别用极坐标、线性换元和积分次序交换计算三个二重积分。

## **Kai**

### (1)

#### (i)

$$
f_x=6x-12y,\qquad
f_y=-12x+3y^2+12y-15.
$$

$f_x=f_y=0$ より停留点は $(10,5),(-2,-1)$ である。Hesse 行列は

$$
H=\begin{pmatrix}6&-12\\-12&6y+12\end{pmatrix}.
$$

$(10,5)$ では $\det H=108>0$ かつ $f_{xx}=6>0$ なので極小点であり、$f(10,5)=-103$ である。$(-2,-1)$ では $\det H=-108<0$ なので鞍点である。したがって

$$
\boxed{(10,5)\text{ で極小値 }-103}
$$

のみをもつ。

#### (ii)

$$
f_x(1,3)=-30,\qquad f_y(1,3)=36.
$$

よって接線は

$$
-30(x-1)+36(y-3)=0,
$$

すなわち

$$
\boxed{5x-6y+13=0}.
$$

### (2)

#### (i)

極座標を用いると

$$
\begin{aligned}
I_1
&=2\pi\int_1^4\frac{r}{5-r}\,dr\\
&=\boxed{2\pi(5\log4-3)}.
\end{aligned}
$$

#### (ii)

$u=x+y, v=x-y$ とおくと $x^2-y^2=uv$、$dx\,dy=\frac12du\,dv$ である。したがって

$$
\begin{aligned}
I_2
&=\frac12\int_2^3u^2\,du\int_{-1}^1v^2\,dv\\
&=\boxed{\frac{19}{9}}.
\end{aligned}
$$

#### (iii)

積分順序を交換すると $0\le y\le1, 0\le x\le y$ なので

$$
\begin{aligned}
I_3
&=\int_0^1y\cos\!\left(\frac\pi2y^2\right)dy\\
&=\boxed{\frac1\pi}.
\end{aligned}
$$
