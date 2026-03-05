---
sidebar_label: "2022年8月実施 専門基礎A [A-1]"
tags:
  - Kyoto-University
  - Calculus
  - Linear-Algebra
---
# 京都大学 情報学研究科 通信情報システム専攻 2022年8月実施 専門基礎A \[A-1\]

## **Author**
[SUN](https://www.xiaohongshu.com/user/profile/600ab5e9000000000100797e)

## **Description**
Answer all the following questions.

### (1)
Find all the local maxima and minima, and corresponding $x$ and $y$ with respect to function $f(x,y)$. Let $x$ and $y$ be real numbers.

$$
f(x,y)=x^3-x^2y+xy^2-x
$$

### (2)
Let $D$ be a domain bounded by $y=\sqrt{x}$ and $y=x$, where $x\ge 0$. Compute the following integral $I$.

$$
I=\iint_D e^{-y}\,dx\,dy
$$

### (3)
Find the length of the curve given as follows.

$$
y=x^{3/2}\quad \left(0\le x\le \frac{4}{3}\right)
$$

### (4)
Find the eigenvectors of matrix $A$, and show the conditions on which they become orthogonal to each other. Let $x$ be a real number.

$$
A=\begin{pmatrix}
x & a\\
b & x
\end{pmatrix}
$$

## **Kai**
### (1)
To find critical points, set partial derivatives to zero:

$$
\begin{cases} 
f_x = 3x^2 - 2yx + y^2 - 1 = 0 \\ 
f_y = -x^2 + 2xy = x(2y - x) = 0 
\end{cases}
$$

From $f_y = 0$, we have $x = 0$ or $x = 2y$.
- If $x = 0$, then $y^2 - 1 = 0 \Rightarrow y = \pm 1$. Points: $(0, 1), (0, -1)$.
- If $x = 2y$, then $3(2y)^2 - 2y(2y) + y^2 - 1 = 0 \Rightarrow 9y^2 = 1 \Rightarrow y = \pm \frac{1}{3}$. Points: $(\frac{2}{3}, \frac{1}{3}), (-\frac{2}{3}, -\frac{1}{3})$.

Second-order partial derivatives:

$$
f_{xx} = 6x - 2y, \quad f_{xy} = -2x + 2y, \quad f_{yy} = 2x
$$

Hessian determinant $H = f_{xx}f_{yy} - (f_{xy})^2$:

- For $(0, 1): H = ( -2)(0) - (2)^2 = -4 < 0$ (Saddle point)
- For $(0, -1): H = (2)(0) - (-2)^2 = -4 < 0$ (Saddle point)
- For $(\frac{2}{3}, \frac{1}{3}): H = (\frac{10}{3})(\frac{4}{3}) - (-\frac{2}{3})^2 = 4 > 0$. Since $f_{xx} = \frac{10}{3} > 0$, it is a local minimum:

$$
f(\frac{2}{3}, \frac{1}{3}) = (\frac{2}{3})^3 - (\frac{2}{3})^2(\frac{1}{3}) + (\frac{2}{3})(\frac{1}{3})^2 - \frac{2}{3} = -\frac{4}{9}
$$

- For $(-\frac{2}{3}, -\frac{1}{3}): H = (-\frac{10}{3})(-\frac{4}{3}) - (\frac{2}{3})^2 = 4 > 0$. Since $f_{xx} = -\frac{10}{3} < 0$, it is a local maximum:

$$
\begin{aligned}
f(-\frac{2}{3}, -\frac{1}{3}) &= (-\frac{2}{3})^3 - (-\frac{2}{3})^2(-\frac{1}{3}) \\
&+ (-\frac{2}{3})(-\frac{1}{3})^2 - (-\frac{2}{3}) \\
&= \frac{4}{9}
\end{aligned}
$$

### (2)
The domain $D$ is bounded by $y = \sqrt{x}$ and $y = x$, which intersect at $(0, 0)$ and $(1, 1)$.
For $0 \le y \le 1$, the range of $x$ is $y^2 \le x \le y$.

$$
I = \iint_D e^{-y} dA = \int_0^1 \int_{y^2}^y e^{-y} dx dy = \int_0^1 (y - y^2) e^{-y} dy
$$

Using integration by parts:

$$
\begin{aligned}
\int (y - y^2) e^{-y} dy &= -(y - y^2)e^{-y} + \int (1 - 2y) e^{-y} dy\\
&= (y^2 - y)e^{-y} - (1 - 2y)e^{-y} + \int (-2) e^{-y} dy\\
&= (y^2 - y - 1 + 2y + 2)e^{-y} \\
&= (y^2 + y + 1)e^{-y}
\end{aligned}
$$

Evaluating from 0 to 1:

$$
I = \left[ (y^2 + y + 1)e^{-y} \right]_0^1 = 3e^{-1} - 1
$$

### (3)
The arc length $L$ for $y = x^{3/2}$ from $x=0$ to $x=4/3$:

$$
y' = \frac{3}{2}x^{1/2} \Rightarrow 1 + (y')^2 = 1 + \frac{9}{4}x
$$

$$
L = \int_0^{4/3} \sqrt{1 + \frac{9}{4}x} dx
$$

Let $u = 1 + \frac{9}{4}x$, then $du = \frac{9}{4}dx$.
When $x=0, u=1$; when $x=4/3, u=4$.

$$
\begin{aligned}
L &= \int_1^4 \sqrt{u} \cdot \frac{4}{9} du = \frac{4}{9} \left[ \frac{2}{3}u^{3/2} \right]_1^4 \\
&= \frac{8}{27}(4^{3/2} - 1^{3/2}) = \frac{8}{27}(8 - 1) \\ 
&= \frac{56}{27}
\end{aligned}
$$

### (4)
Characteristic equation $\det(A - \lambda I) = 0$:

$$
\begin{vmatrix} x - \lambda & a \\ b & x - \lambda \end{vmatrix} = (x - \lambda)^2 - ab = 0 \Rightarrow \lambda = x \pm \sqrt{ab}
$$

Eigenvectors for $\lambda_1 = x + \sqrt{ab}$:

$$
\begin{bmatrix} -\sqrt{ab} & a \\ b & -\sqrt{ab} \end{bmatrix} \begin{bmatrix} v_{11} \\ v_{12} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \Rightarrow -\sqrt{ab}v_{11} + av_{12} = 0 \Rightarrow V_1 = \begin{bmatrix} \sqrt{a} \\ \sqrt{b} \end{bmatrix}
$$

Eigenvectors for $\lambda_2 = x - \sqrt{ab}$:

$$
\begin{bmatrix} \sqrt{ab} & a \\ b & \sqrt{ab} \end{bmatrix} \begin{bmatrix} v_{21} \\ v_{22} \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix} \Rightarrow \sqrt{ab}v_{21} + av_{22} = 0 \Rightarrow V_2 = \begin{bmatrix} \sqrt{a} \\ -\sqrt{b} \end{bmatrix}
$$

For $V_1$ and $V_2$ to be orthogonal:

$$
V_1 \cdot V_2 = (\sqrt{a})(\sqrt{a}) + (\sqrt{b})(-\sqrt{b}) = a - b = 0 \Rightarrow a = b
$$
