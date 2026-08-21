---
sidebar_label: "2020年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2020年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) $f(x,y) = x^3 + y^3 - 9xy + 1$ とする。

(a) $f$ の勾配 $\nabla f$ とヘッセ行列を求めよ。

(b) $f$ の極値をすべて求めよ。

(c) $f$ を $(x,y) = (1,0)$ でテイラー展開して、2次の項まで求めよ。3次の剰余項は計算しなくてもよい。

(2) 球 $x^2 + y^2 + z^2 \leq 4a^2$ と円柱 $x^2 + y^2 \leq a^2$ の共通部分 $V$ の体積を求めよ $(a > 0)$ 。

### 题目描述

(1) 设

$$
f(x,y)=x^3+y^3-9xy+1.
$$

(a) 求 $f$ 的梯度 $\nabla f$ 与 Hessian 矩阵。

(b) 求 $f$ 的全部极值。

(c) 将 $f$ 在 $(x,y)=(1,0)$ 处作 Taylor 展开，写到二次项为止；无需计算三次余项。

(2) 求球体

$$
x^2+y^2+z^2\leq4a^2
$$

与圆柱体

$$
x^2+y^2\leq a^2
$$

的公共部分 $V$ 的体积，其中 $a>0$。

## **Kai**

(1)
(a)  $\nabla f = (3x^2 - 9y, 3y^2 - 9x)$

$H(f) = \begin{pmatrix} 6x & -9 \\ -9 & 6y \end{pmatrix}$

(b) 極値を求めるには、 $\nabla f = 0$ となる点を求める。
$3x^2 - 9y = 0$ より $y = \frac{x^2}{3}$ 。
$3y^2 - 9x = 0$ より $y^2 = 3x$ 。
したがって $(\frac{x^2}{3})^2 = 3x$ なので $x^4 = 27x$ 。
$x(x^3 - 27) = 0$ 。  よって $x = 0$ または $x = 3$ 。
$x = 0$ のとき $y = 0$ 。  $x = 3$ のとき $y = 3$ 。
停留点は $(0,0)$ と $(3,3)$ 。
$H(f)(0,0) = \begin{pmatrix} 0 & -9 \\ -9 & 0 \end{pmatrix}$ であり、$\det H=-81<0$ なので $(0,0)$ は鞍点。
$H(f)(3,3) = \begin{pmatrix} 18 & -9 \\ -9 & 18 \end{pmatrix}$ であり、$\det H=324-81=243>0$ かつ $18>0$ なので $(3,3)$ は極小値を取る。
$f(3,3) = 27 + 27 - 9(9) + 1 = 55 - 81 = -26$ 。
よって、fは(3,3)で極小値-26を取る。

(c) $f(1,0) = 1 + 0 - 0 + 1 = 2$ 。
$f_x = 3x^2 - 9y$ , $f_y = 3y^2 - 9x$ 。
$f_x(1,0) = 3$ , $f_y(1,0) = -9$ 。
$f_{xx} = 6x$ , $f_{xy} = -9$ , $f_{yy} = 6y$ 。
$f_{xx}(1,0) = 6$ , $f_{xy}(1,0) = -9$ , $f_{yy}(1,0) = 0$ 。
したがって、2次までのテイラー展開は
$f(x,y) \approx f(1,0) + f_x(1,0)(x-1) + f_y(1,0)(y-0) + \frac{1}{2} f_{xx}(1,0)(x-1)^2 + f_{xy}(1,0)(x-1)y + \frac{1}{2} f_{yy}(1,0)y^2$
$= 2 + 3(x-1) - 9y + 3(x-1)^2 - 9(x-1)y + 0$
$= 2 + 3x - 3 - 9y + 3(x^2 - 2x + 1) - 9xy + 9y$
$= 3x^2 - 3x - 9xy + 2$

(2) 円柱座標系 $(r, \theta, z)$ を用いる。 $x = r\cos\theta, y = r\sin\theta, z = z$ 。
$x^2 + y^2 \leq a^2$ は $r^2 \leq a^2$ となるので $r \leq a$ 。
球の式は $r^2 + z^2 \leq 4a^2$ となるので $z^2 \leq 4a^2 - r^2$ , つまり $-\sqrt{4a^2 - r^2} \leq z \leq \sqrt{4a^2 - r^2}$ 。
$V = \int_0^{2\pi} \int_0^a \int_{-\sqrt{4a^2 - r^2}}^{\sqrt{4a^2 - r^2}} r dz dr d\theta = \int_0^{2\pi} \int_0^a 2r\sqrt{4a^2 - r^2} dr d\theta$
$\int_0^a 2r\sqrt{4a^2 - r^2} dr$ で $u = 4a^2 - r^2$ とすると $du = -2r dr$ であり、
$\int_{4a^2}^{3a^2} - \sqrt{u} du = \int_{3a^2}^{4a^2} \sqrt{u} du = \frac{2}{3} u^{3/2} |_{3a^2}^{4a^2} = \frac{2}{3} (8a^3 - (3\sqrt{3})a^3) = \frac{2}{3} a^3 (8 - 3\sqrt{3})$
$V = \int_0^{2\pi} \frac{2}{3} a^3 (8 - 3\sqrt{3}) d\theta = \frac{4\pi}{3} a^3 (8 - 3\sqrt{3})$
