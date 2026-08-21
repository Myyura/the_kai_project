---
sidebar_label: "2019年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Change-of-Variables-and-Jacobian
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2019年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) $f(x,y) = xy(x^2 + y^2 - 1)$ とする。

(a) $f$ のヤコビ行列とヘッセ行列を求めよ。

(b) $f$ の極値をすべて求めよ。

(c) $f$ のグラフ $z = f(x,y)$ の $(1,1,1)$ における接平面の方程式を求めよ。

(2) $B$ を単位球 $x^2 + y^2 + z^2 \leq 1$ とし, $g(x,y,z) = x^2y^2z^2$ とおく。

(a) $g$ の $B$ における最大値を求めよ。

(b) $\iiint_B g(x,y,z) dx dy dz$ の値を求めよ。

### 题目描述

(1) 设

$$
f(x,y)=xy(x^2+y^2-1).
$$

(a) 求 $f$ 的 Jacobian 矩阵与 Hessian 矩阵。

(b) 求 $f$ 的全部极值。

(c) 求曲面 $z=f(x,y)$ 在点 $(1,1,1)$ 处的切平面方程。

(2) 设 $B$ 为单位球体

$$
x^2+y^2+z^2\leq 1,
$$

并令

$$
g(x,y,z)=x^2y^2z^2.
$$

(a) 求 $g$ 在 $B$ 上的最大值。

(b) 计算

$$
\iiint_B g(x,y,z)\,dx\,dy\,dz.
$$

## **Kai**

(1)
(a)

$$
f(x,y) = xy(x^2+y^2-1) = x^3y + xy^3 - xy
$$

$$
\frac{\partial f}{\partial x} = 3x^2y + y^3 - y
$$

$$
\frac{\partial f}{\partial y} = x^3 + 3xy^2 - x
$$

ヤコビ行列は

$$
J_f = \begin{pmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \end{pmatrix} = \begin{pmatrix} 3x^2y + y^3 - y & x^3 + 3xy^2 - x \end{pmatrix}
$$

ヘッセ行列は

$$
\frac{\partial^2 f}{\partial x^2} = 6xy
$$

$$
\frac{\partial^2 f}{\partial x \partial y} = 3x^2 + 3y^2 - 1
$$

$$
\frac{\partial^2 f}{\partial y^2} = 6xy
$$

$$
H_f = \begin{pmatrix} \frac{\partial^2 f}{\partial x^2} & \frac{\partial^2 f}{\partial x \partial y} \\ \frac{\partial^2 f}{\partial y \partial x} & \frac{\partial^2 f}{\partial y^2} \end{pmatrix} = \begin{pmatrix} 6xy & 3x^2 + 3y^2 - 1 \\ 3x^2 + 3y^2 - 1 & 6xy \end{pmatrix}
$$

(b)
$\frac{\partial f}{\partial x} = 3x^2y + y^3 - y = y(3x^2 + y^2 - 1) = 0$
$\frac{\partial f}{\partial y} = x^3 + 3xy^2 - x = x(x^2 + 3y^2 - 1) = 0$

Case 1: $x=0$ . Then $y(y^2 - 1) = 0$ , so $y = 0, 1, -1$ . Critical points: $(0,0), (0,1), (0,-1)$ .
Case 2: $y=0$ . Then $x(x^2 - 1) = 0$ , so $x = 0, 1, -1$ . Critical points: $(0,0), (1,0), (-1,0)$ .
Case 3: $x \neq 0$ and $y \neq 0$ . Then $3x^2 + y^2 = 1$ and $x^2 + 3y^2 = 1$ . Subtracting gives $2x^2 - 2y^2 = 0$ , so $x^2 = y^2$ , and $x = \pm y$ . Substituting $x = y$ into $3x^2 + y^2 = 1$ gives $4x^2 = 1$ , so $x = \pm \frac{1}{2}$ , and $y = \pm \frac{1}{2}$ . Critical points: $(\frac{1}{2}, \frac{1}{2}), (\frac{1}{2}, -\frac{1}{2}), (-\frac{1}{2}, \frac{1}{2}), (-\frac{1}{2}, -\frac{1}{2})$ .

Critical points: $(0,0), (0,1), (0,-1), (1,0), (-1,0), (\frac{1}{2}, \frac{1}{2}), (\frac{1}{2}, -\frac{1}{2}), (-\frac{1}{2}, \frac{1}{2}), (-\frac{1}{2}, -\frac{1}{2})$ .
Evaluate $f$ at these points:
$f(0,0) = 0$ , $f(0,1) = 0$ , $f(0,-1) = 0$ , $f(1,0) = 0$ , $f(-1,0) = 0$ .
$f(\frac{1}{2}, \frac{1}{2}) = \frac{1}{4}(\frac{1}{4} + \frac{1}{4} - 1) = \frac{1}{4}(-\frac{1}{2}) = -\frac{1}{8}$ .
$f(\frac{1}{2}, -\frac{1}{2}) = -\frac{1}{4}(\frac{1}{4} + \frac{1}{4} - 1) = \frac{1}{8}$ .
$f(-\frac{1}{2}, \frac{1}{2}) = -\frac{1}{4}(\frac{1}{4} + \frac{1}{4} - 1) = \frac{1}{8}$ .
$f(-\frac{1}{2}, -\frac{1}{2}) = \frac{1}{4}(\frac{1}{4} + \frac{1}{4} - 1) = -\frac{1}{8}$ .

The Hessian classification is as follows:

$$
\begin{array}{c|c|c|c}
\text{points} & f & \det H_f & \text{classification}\\ \hline
(0,0),\ (0,\pm1),\ (\pm1,0) & 0 & -1\ \text{or}\ -4 & \text{saddle}\\
(\frac12,\frac12),\ (-\frac12,-\frac12) & -\frac18 & 2 & \text{local minimum}\\
(\frac12,-\frac12),\ (-\frac12,\frac12) & \frac18 & 2 & \text{local maximum}
\end{array}
$$

Indeed, at the two minimum points the Hessian eigenvalues are $1,2$ , while at the two maximum points they are $-1,-2$ . Thus these four points give all the extrema.

(c)
$z = f(x,y) = xy(x^2+y^2-1)$
接平面の方程式は
$z - f(1,1) = f_x(1,1)(x-1) + f_y(1,1)(y-1)$
$f(1,1) = 1(1+1-1) = 1$
$f_x(1,1) = 3(1)^2(1) + (1)^3 - 1 = 3+1-1 = 3$
$f_y(1,1) = (1)^3 + 3(1)(1)^2 - 1 = 1+3-1 = 3$
Therefore, $z - 1 = 3(x-1) + 3(y-1)$
$z - 1 = 3x - 3 + 3y - 3$
$z = 3x + 3y - 5$

(2)
(a) Using spherical coordinates $x = r \sin \theta \cos \phi$ , $y = r \sin \theta \sin \phi$ , $z = r \cos \theta$ , where $0 \le r \le 1$ , $0 \le \theta \le \pi$ , $0 \le \phi \le 2\pi$ .

$$
g(x,y,z) = x^2y^2z^2 = (r \sin \theta \cos \phi)^2(r \sin \theta \sin \phi)^2(r \cos \theta)^2 = r^6 \sin^4 \theta \cos^2 \theta \cos^2 \phi \sin^2 \phi = r^6 \sin^4 \theta \cos^2 \theta (\frac{1}{4} \sin^2 2\phi)
$$

We want to maximize this expression subject to $0 \le r \le 1$ , $0 \le \theta \le \pi$ , $0 \le \phi \le 2\pi$ .
Since $r \le 1$ , $r^6$ is maximized when $r = 1$ .
$\sin^4 \theta \cos^2 \theta$ is maximized when $\theta$ is between 0 and $\pi$ .
$\frac{d}{d\theta} (\sin^4 \theta \cos^2 \theta) = 4\sin^3 \theta \cos^3 \theta - 2\sin^5 \theta \cos \theta = 2 \sin^3 \theta \cos \theta (2 \cos^2 \theta - \sin^2 \theta) = 0$ .
So either $\sin \theta = 0$ , $\cos \theta = 0$ , or $2 \cos^2 \theta = \sin^2 \theta$ . Since $2 \cos^2 \theta = \sin^2 \theta$ , $2 \cos^2 \theta = 1 - \cos^2 \theta$ , so $3 \cos^2 \theta = 1$ , and $\cos \theta = \pm \frac{1}{\sqrt{3}}$ . Then $\sin \theta = \pm \sqrt{\frac{2}{3}}$ . Thus, the maximum occurs when $\theta = \arccos (\frac{1}{\sqrt{3}})$ and $\sin \theta = \sqrt{\frac{2}{3}}$ .
Thus, the maximum value of $\sin^4 \theta \cos^2 \theta$ is $(\frac{2}{3})^2 \frac{1}{3} = \frac{4}{27}$ .
$\frac{1}{4} \sin^2 2\phi$ is maximized when $\sin 2\phi = \pm 1$ , which means $2\phi = \frac{\pi}{2}, \frac{3\pi}{2}$ . So $\phi = \frac{\pi}{4}, \frac{3\pi}{4}$ .
The maximum value of $\frac{1}{4} \sin^2 2\phi$ is $\frac{1}{4}$ .
Therefore, the maximum value of $g(x,y,z)$ is $1^6 \cdot \frac{4}{27} \cdot \frac{1}{4} = \frac{1}{27}$ .

(b)
$\iiint_B g(x,y,z) dx dy dz = \iiint_B x^2y^2z^2 dx dy dz = \int_0^1 \int_0^{\pi} \int_0^{2\pi} (r \sin \theta \cos \phi)^2(r \sin \theta \sin \phi)^2(r \cos \theta)^2 r^2 \sin \theta d\phi d\theta dr = \int_0^1 r^8 dr \int_0^{\pi} \sin^5 \theta \cos^2 \theta d\theta \int_0^{2\pi} \cos^2 \phi \sin^2 \phi d\phi = \frac{1}{9} \int_0^{\pi} \sin^5 \theta \cos^2 \theta d\theta \int_0^{2\pi} \frac{1}{4} \sin^2 2\phi d\phi = \frac{1}{9} \int_0^{\pi} \sin^5 \theta \cos^2 \theta d\theta \frac{1}{4} \int_0^{2\pi} \frac{1 - \cos 4\phi}{2} d\phi = \frac{1}{9} \int_0^{\pi} \sin^5 \theta \cos^2 \theta d\theta \frac{1}{4} \frac{1}{2} 2\pi = \frac{\pi}{36} \int_0^{\pi} \sin^5 \theta \cos^2 \theta d\theta$
Using the beta integral,

$$
\begin{aligned}
\int_0^{\pi}\sin^5\theta\cos^2\theta\,d\theta
&=2\int_0^{\pi/2}\sin^5\theta\cos^2\theta\,d\theta\\
&=B\left(3,\frac32\right)
=\frac{\Gamma(3)\Gamma(3/2)}{\Gamma(9/2)}
=\frac{16}{105}.
\end{aligned}
$$

Therefore,

$$
\boxed{
\iiint_Bx^2y^2z^2\,dx\,dy\,dz
=\frac{\pi}{36}\frac{16}{105}
=\frac{4\pi}{945}
}.
$$
