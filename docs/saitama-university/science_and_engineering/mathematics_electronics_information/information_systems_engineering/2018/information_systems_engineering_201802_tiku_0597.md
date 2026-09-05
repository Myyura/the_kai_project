---
sidebar_label: "2018年2月実施 微分積分"
tags:
  - Saitama-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Integration
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2018年2月実施 微分積分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2. 以下の問に答えよ. [Solve the following problems. ]

(a) 次の極限値を求めよ. [Find the following limit. ]

$$
\lim_{x \to 0} \frac{2 \sin x - \sin 2x}{x^3}
$$

(b) 以下の関数のマクローリン展開を $x^4$ の項まで求めよ。 [Find the Maclaurin expansion of the following function up to the term of $x^4$ . ]

$$
f(x) = \sqrt{1 + x^2}
$$

(c) 以下の曲面の点 $(a, b, 0)$ における接平面の式を求めよ. [Find the equation of the tangent plane to the following surface at the point $(a, b, 0)$ .]

$$
z = \frac{x^2}{a^2} - \frac{y^2}{b^2} \quad (a \neq 0, b \neq 0)
$$

(d) 次の二重積分を求めよ. [Find the following double integral. ]

$$
\iint_D x \, dx \, dy, \quad D: x^2 + y^2 \leq 1, \quad 0 \leq y \leq x
$$

### 题目描述

2. 回答下列问题。

(a) 求极限

$$
\lim_{x\to0}\frac{2\sin x-\sin2x}{x^3}.
$$

(b) 将函数

$$
f(x)=\sqrt{1+x^2}
$$

作 Maclaurin 展开，写到 $x^4$ 项为止。

(c) 求曲面

$$
z=\frac{x^2}{a^2}-\frac{y^2}{b^2}
\qquad(a\neq0,\ b\neq0)
$$

在点 $(a,b,0)$ 处的切平面方程。

(d) 计算二重积分

$$
\iint_D x\,dx\,dy,
$$

其中

$$
D:\quad x^2+y^2\leq1,\qquad 0\leq y\leq x.
$$

## **Kai**

(a)

$$
\lim_{x \to 0} \frac{2 \sin x - \sin 2x}{x^3} = \lim_{x \to 0} \frac{2 \sin x - 2 \sin x \cos x}{x^3} = \lim_{x \to 0} \frac{2 \sin x (1 - \cos x)}{x^3} = \lim_{x \to 0} \frac{2 \sin x}{x} \cdot \frac{1 - \cos x}{x^2} = 2 \cdot 1 \cdot \frac{1}{2} = 1
$$

(Using $\lim_{x \to 0} \frac{\sin x}{x} = 1$ and $\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}$ )

(b)

$$
f(x) = \sqrt{1 + x^2} = (1 + x^2)^{1/2}
$$

Using the binomial series expansion:

$$
(1 + u)^n = 1 + nu + \frac{n(n-1)}{2!}u^2 + \frac{n(n-1)(n-2)}{3!}u^3 + ...
$$

In our case, $u = x^2$ and $n = \frac{1}{2}$ .

$$
f(x) = 1 + \frac{1}{2}x^2 + \frac{\frac{1}{2}(-\frac{1}{2})}{2!}(x^2)^2 + ... = 1 + \frac{1}{2}x^2 - \frac{1}{8}x^4 + ...
$$

So the Maclaurin expansion up to the term of $x^4$ is:

$$
f(x) \approx 1 + \frac{1}{2}x^2 - \frac{1}{8}x^4
$$

(c)

$$
z = f(x, y) = \frac{x^2}{a^2} - \frac{y^2}{b^2}
$$

$$
\frac{\partial z}{\partial x} = \frac{2x}{a^2}, \quad \frac{\partial z}{\partial y} = -\frac{2y}{b^2}
$$

At the point $(a, b, 0)$ :

$$
\frac{\partial z}{\partial x}(a, b) = \frac{2a}{a^2} = \frac{2}{a}, \quad \frac{\partial z}{\partial y}(a, b) = -\frac{2b}{b^2} = -\frac{2}{b}
$$

The equation of the tangent plane is given by:

$$
z - z_0 = \frac{\partial z}{\partial x}(x_0, y_0)(x - x_0) + \frac{\partial z}{\partial y}(x_0, y_0)(y - y_0)
$$

In our case, $(x_0, y_0, z_0) = (a, b, 0)$ .

$$
z - 0 = \frac{2}{a}(x - a) - \frac{2}{b}(y - b)
$$

$$
z = \frac{2x}{a} - 2 - \frac{2y}{b} + 2
$$

$$
z = \frac{2x}{a} - \frac{2y}{b}
$$

(d)

$$
D: x^2 + y^2 \leq 1, \quad 0 \leq y \leq x
$$

Converting to polar coordinates: $x = r \cos \theta$ , $y = r \sin \theta$ , $dx \, dy = r \, dr \, d\theta$ .

$$
x^2 + y^2 \leq 1 \Rightarrow r^2 \leq 1 \Rightarrow 0 \leq r \leq 1
$$

$$
0 \leq y \leq x \Rightarrow 0 \leq r \sin \theta \leq r \cos \theta \Rightarrow 0 \leq \sin \theta \leq \cos \theta \Rightarrow 0 \leq \theta \leq \frac{\pi}{4}
$$

$$
\iint_D x \, dx \, dy = \int_0^{\pi/4} \int_0^1 r \cos \theta \cdot r \, dr \, d\theta = \int_0^{\pi/4} \cos \theta \, d\theta \int_0^1 r^2 \, dr = [\sin \theta]_0^{\pi/4} \cdot [\frac{r^3}{3}]_0^1 = (\sin(\frac{\pi}{4}) - \sin(0)) \cdot (\frac{1}{3} - 0) = \frac{\sqrt{2}}{2} \cdot \frac{1}{3} = \frac{\sqrt{2}}{6}
$$
