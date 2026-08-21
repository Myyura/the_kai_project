---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration-by-Substitution
  - Mathematics.Calculus.Integration
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

領域(domain)Dを以下のように設定する。

$$
D = \{(x,y)| -1 \leq x + y \leq 1, -1 \leq x - y \leq 1\}
$$

次の二重積分(double integral)を求めよ。

$$
\iint_{D} \sqrt{1-(x+y)^2} dxdy
$$

### 题目描述

定义区域

$$
D=\{(x,y)\mid-1\leq x+y\leq1,\ -1\leq x-y\leq1\}.
$$

求二重积分

$$
\iint_D\sqrt{1-(x+y)^2}\,dx\,dy.
$$

## **Kai**

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
