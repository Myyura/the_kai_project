---
sidebar_label: "2021年7月実施 数理基礎 問題B"
tags:
  - Waseda-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Integration-by-Substitution
  - Mathematics.Calculus.Integration
  - Mathematics.Calculus.Double-Integral
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年7月実施 数理基礎 問題B

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

### 日本語

#### 小問B1

実数空間 (real space)で連続(continuous)である関数 (function) $f(x)$ の定積分 (definite integral) における次の式を示せ。

$$
\int_0^{\frac{\pi}{2}} f(\cos\theta) d\theta = \int_0^{\frac{\pi}{2}} f(\sin\theta) d\theta
$$

#### 小問B2

次の定積分について、

$$
\int_0^2 \frac{1}{\sqrt{x^2 + 1}} dx
$$

$x = \frac{1}{2}(y - \frac{1}{y}), (y > 0)$ と置換(substitute) して計算せよ。

#### 小問B3

領域(domain)Dを以下のように設定する。

$$
D = \{(x,y)| -1 \leq x + y \leq 1, -1 \leq x - y \leq 1\}
$$

次の二重積分(double integral)を求めよ。

$$
\iint_{D} \sqrt{1-(x+y)^2} dxdy
$$

### 题目描述

#### 小问B1

设 $f(x)$ 是实数域上的连续函数。证明定积分恒等式

$$
\int_0^{\frac{\pi}{2}}f(\cos\theta)\,d\theta
=\int_0^{\frac{\pi}{2}}f(\sin\theta)\,d\theta.
$$

#### 小问B2

对定积分

$$
\int_0^2\frac{1}{\sqrt{x^2+1}}\,dx,
$$

使用指定代换

$$
x=\frac12\left(y-\frac1y\right),\qquad y>0,
$$

完成计算。

#### 小问B3

定义区域

$$
D=\{(x,y)\mid-1\leq x+y\leq1,\ -1\leq x-y\leq1\}.
$$

求二重积分

$$
\iint_D\sqrt{1-(x+y)^2}\,dx\,dy.
$$

## **Kai**

### 小問B1

Let's prove the identity:

$$
\int_0^{\frac{\pi}{2}} f(\cos\theta) d\theta = \int_0^{\frac{\pi}{2}} f(\sin\theta) d\theta
$$

We can use the substitution $u = \frac{\pi}{2} - \theta$ , then $du = -d\theta$ .  When $\theta = 0$ , $u = \frac{\pi}{2}$ , and when $\theta = \frac{\pi}{2}$ , $u = 0$ .
Thus,

$$
\int_0^{\frac{\pi}{2}} f(\cos\theta) d\theta = \int_{\frac{\pi}{2}}^0 f(\cos(\frac{\pi}{2}-u)) (-du) = \int_0^{\frac{\pi}{2}} f(\cos(\frac{\pi}{2}-u)) du
$$

Since $\cos(\frac{\pi}{2} - u) = \sin u$ , we have

$$
\int_0^{\frac{\pi}{2}} f(\cos(\frac{\pi}{2}-u)) du = \int_0^{\frac{\pi}{2}} f(\sin u) du
$$

Replacing $u$ with $\theta$ , we get

$$
\int_0^{\frac{\pi}{2}} f(\sin u) du = \int_0^{\frac{\pi}{2}} f(\sin \theta) d\theta
$$

Therefore,

$$
\int_0^{\frac{\pi}{2}} f(\cos\theta) d\theta = \int_0^{\frac{\pi}{2}} f(\sin\theta) d\theta
$$

Thus, the identity is proved.

### 小問B2

Let $x = \frac{1}{2}(y - \frac{1}{y})$ . Then $dx = \frac{1}{2}(1 + \frac{1}{y^2}) dy = \frac{1}{2}(\frac{y^2 + 1}{y^2}) dy$ .
Also, $x^2 = \frac{1}{4}(y^2 - 2 + \frac{1}{y^2})$ .
Then, $x^2 + 1 = \frac{1}{4}(y^2 - 2 + \frac{1}{y^2}) + 1 = \frac{1}{4}(y^2 + 2 + \frac{1}{y^2}) = \frac{1}{4}(y + \frac{1}{y})^2$ .
So, $\sqrt{x^2 + 1} = \frac{1}{2}(y + \frac{1}{y})$ .
Then, $\frac{1}{\sqrt{x^2 + 1}} = \frac{2}{y + \frac{1}{y}} = \frac{2y}{y^2 + 1}$ .
So, $\frac{1}{\sqrt{x^2 + 1}} dx = \frac{2y}{y^2 + 1} \cdot \frac{1}{2} \frac{y^2 + 1}{y^2} dy = \frac{1}{y} dy$ .

Now, when $x=0$ , $\frac{1}{2}(y - \frac{1}{y}) = 0$ , which implies $y - \frac{1}{y} = 0$ , so $y^2 = 1$ . Since $y > 0$ , $y=1$ .
When $x=2$ , $\frac{1}{2}(y - \frac{1}{y}) = 2$ , which implies $y - \frac{1}{y} = 4$ , so $y^2 - 4y - 1 = 0$ . Then $y = \frac{4 \pm \sqrt{16 + 4}}{2} = \frac{4 \pm \sqrt{20}}{2} = \frac{4 \pm 2\sqrt{5}}{2} = 2 \pm \sqrt{5}$ . Since $y > 0$ , $y = 2 + \sqrt{5}$ .
Therefore, the integral becomes:

$$
\int_1^{2+\sqrt{5}} \frac{1}{y} dy = \left[ \ln y \right]_1^{2+\sqrt{5}} = \ln(2+\sqrt{5}) - \ln(1) = \ln(2+\sqrt{5})
$$

So, the answer is $\ln(2+\sqrt{5})$ .

### 小問B3

Let $u = x + y$ and $v = x - y$ . Then $x = \frac{u+v}{2}$ and $y = \frac{u-v}{2}$ .
The Jacobian is given by

$$
\frac{\partial(x, y)}{\partial(u, v)} = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix} = \begin{vmatrix} \frac{1}{2} & \frac{1}{2} \\ \frac{1}{2} & -\frac{1}{2} \end{vmatrix} = -\frac{1}{4} - \frac{1}{4} = -\frac{1}{2}
$$

Therefore, $\left| \frac{\partial(x, y)}{\partial(u, v)} \right| = \frac{1}{2}$ .
The region D is transformed into the region R such that $-1 \leq u \leq 1$ and $-1 \leq v \leq 1$ .
Then, the double integral becomes

$$
\iint_{D} \sqrt{1-(x+y)^2} dxdy = \iint_{R} \sqrt{1-u^2} \left| \frac{\partial(x, y)}{\partial(u, v)} \right| dudv = \int_{-1}^{1} \int_{-1}^{1} \sqrt{1-u^2} \cdot \frac{1}{2} dudv
$$

$$
= \frac{1}{2} \int_{-1}^{1} \sqrt{1-u^2} du \int_{-1}^{1} dv = \frac{1}{2} \cdot (2) \int_{-1}^{1} \sqrt{1-u^2} du = \int_{-1}^{1} \sqrt{1-u^2} du
$$

Let $u = \sin\theta$ . Then $du = \cos\theta d\theta$ .
When $u = -1$ , $\theta = -\frac{\pi}{2}$ . When $u = 1$ , $\theta = \frac{\pi}{2}$ .

$$
\int_{-1}^{1} \sqrt{1-u^2} du = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \sqrt{1-\sin^2\theta} \cos\theta d\theta = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos^2\theta d\theta = \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{1+\cos(2\theta)}{2} d\theta
$$

$$
= \frac{1}{2} \left[ \theta + \frac{\sin(2\theta)}{2} \right]_{-\frac{\pi}{2}}^{\frac{\pi}{2}} = \frac{1}{2} \left[ (\frac{\pi}{2} + 0) - (-\frac{\pi}{2} + 0) \right] = \frac{1}{2} (\pi) = \frac{\pi}{2}
$$

Therefore, the double integral is $\frac{\pi}{2}$ .
