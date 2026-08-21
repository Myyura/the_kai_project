---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
  - Mathematics.Calculus.Integration
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

I. 実数全体の集合 $\mathbb{R}$ で定義された連続関数 $f, g$ に対して、関数 $f * g$ を

$$
(f * g)(x) = \int_0^x f(x - y)g(y) dy \quad (x \in \mathbb{R})
$$

で定める。次の問に答えよ。

(1) 関数 $e_n(x)$ を

$$
e_0(x) = 1, \quad e_{n+1}(x) = (e_n * e_0)(x) \quad (n = 0, 1, 2, \dots)
$$

で定める。関数 $e_n(x)$ を求めよ。

(2) $\mathbb{R}$ で定義された任意の連続関数 $f, g$ に対して、 $f * g = g * f$ が成り立つことを示せ。

II. 2変数関数 $h(x, y)$ を

$$
h(x, y) = e^{-\sqrt{x^2 + y^2}}
$$

で定める。次の問に答えよ。

(1) 偏導関数

$$
\frac{\partial h}{\partial x}, \quad \frac{\partial h}{\partial y}
$$

をそれぞれ求めよ。

(2) $D$ を $xy$ 平面の

$$
x^2 + y^2 \leq 1
$$

で定まる領域とする。 $D$ 上の重積分

$$
\iint_D \frac{1}{x^2 + y^2} \left( x \frac{\partial h}{\partial x} + y \frac{\partial h}{\partial y} \right) dxdy
$$

を計算せよ。

### 题目描述

I. 对定义在全体实数集 $\mathbb{R}$ 上的连续函数 $f,g$，定义函数 $f*g$ 为

$$
(f*g)(x)=\int_0^x f(x-y)g(y)\,dy
\qquad(x\in\mathbb{R}).
$$

回答下列问题。

(1) 定义函数 $e_n(x)$ 如下：

$$
e_0(x)=1,\qquad
e_{n+1}(x)=(e_n*e_0)(x)
\quad(n=0,1,2,\dots).
$$

求 $e_n(x)$。

(2) 证明：对任意定义在 $\mathbb{R}$ 上的连续函数 $f,g$，都有

$$
f*g=g*f.
$$

II. 定义二元函数

$$
h(x,y)=e^{-\sqrt{x^2+y^2}}.
$$

回答下列问题。

(1) 分别求偏导数

$$
\frac{\partial h}{\partial x},
\qquad
\frac{\partial h}{\partial y}.
$$

(2) 设 $D$ 为 $xy$ 平面上的区域

$$
x^2+y^2\leq1.
$$

计算 $D$ 上的二重积分

$$
\iint_D\frac{1}{x^2+y^2}
\left(
x\frac{\partial h}{\partial x}
+y\frac{\partial h}{\partial y}
\right)\,dx\,dy.
$$

## **Kai**

I. (1) $e_0(x) = 1$
$e_1(x) = (e_0 * e_0)(x) = \int_0^x e_0(x - y) e_0(y) dy = \int_0^x 1 \cdot 1 dy = x$
$e_2(x) = (e_1 * e_0)(x) = \int_0^x e_1(x - y) e_0(y) dy = \int_0^x (x - y) \cdot 1 dy = \int_0^x (x - y) dy = [xy - \frac{1}{2}y^2]_0^x = x^2 - \frac{1}{2}x^2 = \frac{x^2}{2}$
$e_3(x) = (e_2 * e_0)(x) = \int_0^x e_2(x - y) e_0(y) dy = \int_0^x \frac{(x - y)^2}{2} \cdot 1 dy = \frac{1}{2} \int_0^x (x - y)^2 dy = \frac{1}{2} [-\frac{(x - y)^3}{3}]_0^x = \frac{1}{2} (0 - (-\frac{x^3}{3})) = \frac{x^3}{6}$

Mathematical Induction:
Hypothesis: Assume $e_k(x) = \frac{x^k}{k!}$ holds for some integer $k \ge 0$ .
For $n = k+1$ :
$e_{k+1}(x) = (e_k * e_0)(x) = \int_0^x e_k(x - y) e_0(y) dy$
Substitute the hypothesis:
$= \int_0^x \frac{(x - y)^k}{k!} \cdot 1 dy$
Let $u = x - y$ , then $du = -dy$ . The limits change from $0 \to x$ to $x \to 0$ :
$= \int_x^0 \frac{u^k}{k!} (-du) = \int_0^x \frac{u^k}{k!} du$
$= \frac{1}{k!} [\frac{u^{k+1}}{k+1}]_0^x = \frac{1}{k!} \cdot \frac{x^{k+1}}{k+1} = \frac{x^{k+1}}{(k+1)!}$
Conclusion: By mathematical induction, $e_n(x) = \frac{x^n}{n!}$ holds for all $n \ge 0$ .

(2) To prove: $f*g = g*f$

$$
(f * g)(x) = \int_0^x f(x - y) g(y) dy
$$

Let $u = x - y$ , then $y = x - u$ and $dy = -du$

$$
(f * g)(x) = \int_x^0 f(u) g(x - u) (-du) = \int_0^x g(x - u) f(u) du = (g * f)(x)
$$

Hence, $f * g = g * f$

II. (1)

$$
h(x, y) = e^{-\sqrt{x^2 + y^2}}
$$

$$
\frac{\partial h}{\partial x} = e^{-\sqrt{x^2 + y^2}} \cdot (-\frac{1}{2\sqrt{x^2 + y^2}}) \cdot 2x = -\frac{x}{\sqrt{x^2 + y^2}} e^{-\sqrt{x^2 + y^2}}
$$

$$
\frac{\partial h}{\partial y} = e^{-\sqrt{x^2 + y^2}} \cdot (-\frac{1}{2\sqrt{x^2 + y^2}}) \cdot 2y = -\frac{y}{\sqrt{x^2 + y^2}} e^{-\sqrt{x^2 + y^2}}
$$

These formulas hold for $(x,y)\ne(0,0)$ . At the origin the partial derivatives do not exist. Indeed,

$$
\frac{h(t,0)-h(0,0)}{t}
=\frac{e^{-|t|}-1}{t}
$$

tends to $-1$ as $t\to0^+$ and to $1$ as $t\to0^-$ ; the same argument applies to the $y$ partial derivative.

(2)

$$
\iint_D \frac{1}{x^2 + y^2} \left( x \frac{\partial h}{\partial x} + y \frac{\partial h}{\partial y} \right) dxdy
$$

The integrand is therefore understood on $D\setminus\{(0,0)\}$ as an improper integral. The singularity obtained below is locally integrable, so deleting the single origin does not change the value.

$$
\frac{1}{x^2 + y^2} \left( x \frac{\partial h}{\partial x} + y \frac{\partial h}{\partial y} \right) = \frac{1}{x^2 + y^2} \left( x (-\frac{x}{\sqrt{x^2 + y^2}} e^{-\sqrt{x^2 + y^2}}) + y (-\frac{y}{\sqrt{x^2 + y^2}} e^{-\sqrt{x^2 + y^2}}) \right)
$$

$$
= \frac{1}{x^2 + y^2} \left( -\frac{x^2 + y^2}{\sqrt{x^2 + y^2}} e^{-\sqrt{x^2 + y^2}} \right) = -\frac{e^{-\sqrt{x^2 + y^2}}}{\sqrt{x^2 + y^2}}
$$

Let $x = r \cos \theta$ and $y = r \sin \theta$ . Then $x^2 + y^2 = r^2$ and $dxdy = r dr d\theta$ .

$$
D: x^2 + y^2 \leq 1 \Rightarrow r^2 \leq 1 \Rightarrow 0 \leq r \leq 1
$$

$$
0 \leq \theta \leq 2\pi
$$

$$
\iint_D -\frac{e^{-\sqrt{x^2 + y^2}}}{\sqrt{x^2 + y^2}} dxdy = \int_0^{2\pi} \int_0^1 -\frac{e^{-r}}{r} r dr d\theta = \int_0^{2\pi} \int_0^1 -e^{-r} dr d\theta
$$

$$
= \int_0^{2\pi} [e^{-r}]_0^1 d\theta = \int_0^{2\pi} (e^{-1} - 1) d\theta = (e^{-1} - 1) [\theta]_0^{2\pi} = 2\pi (e^{-1} - 1) = 2\pi (\frac{1}{e} - 1) = 2\pi (\frac{1 - e}{e})
$$
