---
sidebar_label: "2015年8月実施 微积分"
tags:
  - Waseda-University
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Differentiation
---
# 早稲田大学 創造理工学研究科 経営システム工学専攻 2015年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

次の関数(function) $f = f(x, y)$ , $(x > 0, y > 0)$ を考える。

$$
f(x, y) = \log \sqrt{kx^2 + y^2}
$$

ただし $k > 0$ とする。
このとき

$$
\frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} = 0
$$

となる $k$ の値を求めよ。

### 题目描述

考虑函数

$$
f(x,y)=\log\sqrt{kx^2+y^2},
\qquad x>0,\ y>0,
$$

其中 $k>0$。求使

$$
\frac{\partial^2f}{\partial x^2}
+\frac{\partial^2f}{\partial y^2}=0
$$

在上述定义域内恒成立的 $k$。

## **Kai**

首先，将函数 $f(x, y)$ 简化：

$$
f(x, y) = \log \sqrt{kx^2 + y^2} = \frac{1}{2} \log(kx^2 + y^2)
$$

计算一阶偏导数：

$$
\frac{\partial f}{\partial x} = \frac{1}{2} \cdot \frac{2kx}{kx^2 + y^2} = \frac{kx}{kx^2 + y^2}
$$

$$
\frac{\partial f}{\partial y} = \frac{1}{2} \cdot \frac{2y}{kx^2 + y^2} = \frac{y}{kx^2 + y^2}
$$

计算二阶偏导数：

$$
\frac{\partial^2 f}{\partial x^2} = \frac{k(kx^2 + y^2) - kx(2kx)}{(kx^2 + y^2)^2} = \frac{k^2x^2 + ky^2 - 2k^2x^2}{(kx^2 + y^2)^2} = \frac{ky^2 - k^2x^2}{(kx^2 + y^2)^2}
$$

$$
\frac{\partial^2 f}{\partial y^2} = \frac{(kx^2 + y^2) - y(2y)}{(kx^2 + y^2)^2} = \frac{kx^2 + y^2 - 2y^2}{(kx^2 + y^2)^2} = \frac{kx^2 - y^2}{(kx^2 + y^2)^2}
$$

将二阶偏导数代入方程：

$$
\frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} = \frac{ky^2 - k^2x^2}{(kx^2 + y^2)^2} + \frac{kx^2 - y^2}{(kx^2 + y^2)^2} = \frac{ky^2 - k^2x^2 + kx^2 - y^2}{(kx^2 + y^2)^2} = 0
$$

要使该式为零，则分子必须为零：

$$
ky^2 - k^2x^2 + kx^2 - y^2 = 0
$$

$$
(k - 1)y^2 + (k - k^2)x^2 = 0
$$

$$
(k - 1)y^2 + k(1 - k)x^2 = 0
$$

$$
(k - 1)y^2 - k(k - 1)x^2 = 0
$$

$$
(k - 1)(y^2 - kx^2) = 0
$$

若 $k = 1$ , 则上式恒成立。若 $y^2 - kx^2 = 0$ , 则 $k = \frac{y^2}{x^2}$ , 但此值依赖于 $x$ 和 $y$ , 因此我们取 $k = 1$ 。
