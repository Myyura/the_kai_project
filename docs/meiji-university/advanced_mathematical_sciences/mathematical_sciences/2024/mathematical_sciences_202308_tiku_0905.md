---
sidebar_label: "2023年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Triple-Integral
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2023年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(I) 関数

$$
f(x) = \log(1+x) - \frac{1}{3}x^3 + \frac{1}{2}x^2 - x
$$

について, 極限

$$
\lim_{x \to 0} \frac{f(x)}{x^k}
$$

が 0 でない値に収束するような整数 $k$ と, そのときの極限値を求めよ.

(II) $xy$ 平面で定義された関数

$$
f(x, y) = x^3 - 12xy + 8y^3
$$

について, 次の問に答えよ.
(1) 関数 $f$ の偏導関数 $\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}$ とヘッセ行列を求めよ.
(2) 関数 $f$ の 2 つの偏導関数が共に 0 となる点をすべて求めよ. それらの点で $f$ が, 極大か極小かを判定せよ.

(III) $\Omega = \{(x, y, z) \in \mathbb{R}^3 | x \geq 0, y \geq 0, z \geq 0, x + y + z \leq 1\}$ とおく. 次の問に答えよ.
(1)

$$
\iiint_{\Omega} dx dy dz
$$

を求めよ.
(2)

$$
\iiint_{\Omega} \frac{dx dy dz}{(1 + x + y + z)^3}
$$

を求めよ.

### 题目描述

I. 对函数

$$
f(x)=\log(1+x)-\frac13x^3+\frac12x^2-x,
$$

求使极限

$$
\lim_{x\to0}\frac{f(x)}{x^k}
$$

收敛到非零值的整数 $k$，并求此时的极限值。

II. 对定义在 $xy$ 平面上的函数

$$
f(x,y)=x^3-12xy+8y^3,
$$

回答下列问题。

(1) 求 $f$ 的偏导数

$$
\frac{\partial f}{\partial x},
\qquad
\frac{\partial f}{\partial y},
$$

以及 Hessian 矩阵。

(2) 求使 $f$ 的两个偏导数同时为 $0$ 的全部点，并在这些点处判断 $f$ 取得极大、极小，还是均不成立。

III. 令

$$
\Omega=
\left\{(x,y,z)\in\mathbb{R}^3\,\middle|\,
x\geq0,\;y\geq0,\;z\geq0,\;x+y+z\leq1
\right\}.
$$

回答下列问题。

(1) 计算

$$
\iiint_{\Omega}dx\,dy\,dz.
$$

(2) 计算

$$
\iiint_{\Omega}\frac{dx\,dy\,dz}{(1+x+y+z)^3}.
$$

## **Kai**

(I)
$f(x) = \log(1+x) - \frac{1}{3}x^3 + \frac{1}{2}x^2 - x = (x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + ...) - \frac{1}{3}x^3 + \frac{1}{2}x^2 - x = -\frac{x^4}{4} + O(x^5)$ .
Therefore, if $\lim_{x \to 0} \frac{f(x)}{x^k}$ converges to a non-zero value, then $k=4$ , and the limit is $-1/4$ .

(II)
(1) $\frac{\partial f}{\partial x} = 3x^2 - 12y$ , $\frac{\partial f}{\partial y} = -12x + 24y^2$ .

$$
\frac{\partial^2 f}{\partial x^2} = 6x, \frac{\partial^2 f}{\partial x \partial y} = -12, \frac{\partial^2 f}{\partial y^2} = 48y
$$

Hesse matrix:

$$
H = \begin{pmatrix} 6x & -12 \\ -12 & 48y \end{pmatrix}
$$

(2) $\frac{\partial f}{\partial x} = 0 \implies x^2 = 4y$ , $\frac{\partial f}{\partial y} = 0 \implies x = 2y^2$ .
Thus, $(2y^2)^2 = 4y \implies 4y^4 = 4y \implies y^4 = y \implies y(y^3-1) = 0$ .
Therefore, $y=0$ or $y=1$ .
If $y=0$ , then $x = 0$ . If $y=1$ , then $x = 2$ .
So the critical points are $(0, 0)$ and $(2, 1)$ .
$H(0, 0) = \begin{pmatrix} 0 & -12 \\ -12 & 0 \end{pmatrix}$ , $\det(H(0, 0)) = -144 < 0$ , so $(0, 0)$ is a saddle point.
$H(2, 1) = \begin{pmatrix} 12 & -12 \\ -12 & 48 \end{pmatrix}$ , $\det(H(2, 1)) = 12 \cdot 48 - 144 = 576 - 144 = 432 > 0$ , and $\frac{\partial^2 f}{\partial x^2} = 12 > 0$ , so $(2, 1)$ is a local minimum.

(III)

(1)

$$
\begin{aligned}
\iiint_{\Omega} dx\,dy\,dz
&= \int_0^1 \int_0^{1-x} \int_0^{1-x-y} dz\,dy\,dx \\
&= \int_0^1 \int_0^{1-x} (1-x-y)\,dy\,dx \\
&= \int_0^1 \Bigl[(1-x)y - \frac{y^2}{2}\Bigr]_{y=0}^{y=1-x} dx \\
&= \int_0^1 (1-x)^2 - \frac{(1-x)^2}{2}\,dx \\
&= \int_0^1 \frac{(1-x)^2}{2}\,dx \\
&= \Bigl[-\frac{(1-x)^3}{6}\Bigr]_{x=0}^{x=1} \\
&= \frac{1}{6}.
\end{aligned}
$$

(2） 令 $u = 1+x+y+z$ ，则 $x+y+z = u-1$ ，所以 $1 \le u \le 2$ 。

$$
\begin{aligned}
\iiint_{\Omega} \frac{dx\,dy\,dz}{(1+x+y+z)^3}
&= \int_1^2 \int_0^{u-1} \int_0^{u-1-x} \frac{1}{u^3}\,dy\,dx\,du \\
&= \int_1^2 \frac{1}{u^3}
    \int_0^{u-1} (u-1-x)\,dx\,du \\
&= \int_1^2 \frac{1}{u^3}
    \Bigl[(u-1)x - \frac{x^2}{2}\Bigr]_{x=0}^{x=u-1} du \\
&= \int_1^2 \frac{1}{u^3} \cdot \frac{(u-1)^2}{2}\,du \\
&= \frac{1}{2} \int_1^2 \frac{u^2 - 2u + 1}{u^3}\,du \\
&= \frac{1}{2} \int_1^2 \left(\frac{1}{u} - \frac{2}{u^2} + \frac{1}{u^3}\right)\,du \\
&= \frac{1}{2} \Bigl[\ln u + \frac{2}{u} - \frac{1}{2u^2}\Bigr]_{u=1}^{u=2} \\
&= \frac{1}{2} \Bigl[\ln 2 + 1 - \frac{1}{8} - (0 + 2 - \tfrac{1}{2})\Bigr] \\
&= \frac{1}{2} \Bigl[\ln 2 - \frac{5}{8}\Bigr] \\
&= \frac{\ln 2}{2} - \frac{5}{16}.
\end{aligned}
$$
