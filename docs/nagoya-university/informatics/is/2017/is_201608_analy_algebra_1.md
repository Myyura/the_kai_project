---
sidebar_label: "2016年8月実施 解析・線形代数 [1]"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.First-Order-Ordinary-Differential-Equation
---
# 名古屋大学 情報科学研究科 情報システム学専攻 2016年8月実施 解析・線形代数 [1]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の微分方程式について考える。

$$
(1+y^2)\frac{d^2y}{dx^2} = 2y \left(\frac{dy}{dx}\right)^2 \qquad (1)
$$

(a) まず、 $p = \frac{dy}{dx}$ とおいて、式 (1) の微分方程式を解き、 $p$ を $y$ の多項式の形で表せ。
ここで、 $\frac{dp}{dx} = \frac{dp}{dy}p$ となることに留意せよ。

(b) 次に、(a)で得られた微分方程式において、 $y = \tan\theta$ とおくことで、式(1)の微分方程式の一般解を求めよ。

### 题目描述

考察微分方程

$$
(1+y^2)\frac{d^2y}{dx^2}
=2y\left(\frac{dy}{dx}\right)^2. \tag{1}
$$

1. 先令 $p=\dfrac{dy}{dx}$，求解由式 (1) 得到的关于 $p$ 的微分方程，并将 $p$ 表示为 $y$ 的多项式形式。可使用

   $$
   \frac{dp}{dx}=\frac{dp}{dy}\,p;
   $$

2. 再在第 1 问所得方程中令 $y=\tan\theta$，求式 (1) 的通解。

## **Kai**

( a )
微分方程

$$
(1+y^2)\frac{d^2y}{dx^2}=2y\left(\frac{dy}{dx}\right)^2
$$

を考える．

$p=\dfrac{dy}{dx}$ とおくと，

$$
\frac{d^2y}{dx^2}
=\frac{dp}{dx}
=\frac{dp}{dy}\frac{dy}{dx}
=p\frac{dp}{dy}
$$

となる．これを元の式に代入すると，

$$
(1+y^2)p\frac{dp}{dy}=2yp^2
$$

を得る． $p\neq0$ と仮定して両辺を $p$ で割ると，

$$
(1+y^2)\frac{dp}{dy}=2yp
$$

すなわち，

$$
\frac{dp}{p}=\frac{2y}{1+y^2}\,dy
$$

となる．

両辺を積分すると，

$$
\int\frac{dp}{p}=\int\frac{2y}{1+y^2}\,dy
$$

より，

$$
\ln|p|=\ln(1+y^2)+C
$$

を得る．ここで $C$ は積分定数である．よって，

$$
|p|=e^C(1+y^2)
$$

となり，定数 $B$ を用いて

$$
p=B(1+y^2)
$$

と書ける．

( b )
( a ) の結果より，

$$
\frac{dy}{dx}=B(1+y^2)
$$

であるから，

$$
\frac{dy}{1+y^2}=B\,dx
$$

を得る．

ここで $y=\tan\theta$ とおくと，

$$
dy=(1+y^2)\,d\theta
$$

であるから，

$$
\frac{dy}{1+y^2}=d\theta
$$

となる．したがって，

$$
d\theta=B\,dx
$$

が成り立つ．

両辺を積分すると，

$$
\theta=Bx+D
$$

を得る．ここで $D$ は積分定数である． $y=\tan\theta$ に戻すと，

$$
y=\tan(Bx+D)
$$

が一般解である．
