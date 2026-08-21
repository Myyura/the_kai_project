---
sidebar_label: "2022年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Extrema
  - Mathematics.Calculus.Differentiation
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2022年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

$x > 1$ で定義された関数 $f(x) = \log(\log x)$ について、次の問に答えよ。
(1) 導関数 $f'(x)$ を求めよ。
(2) $f'(a) = \frac{1}{a}$ を満たす $a$ の値を求めよ。

II $xy$ 平面の領域 $D$ を

$$
D = \{(x, y) \in \mathbb{R}^2 \mid x > 0, y > 0, x + y < 1\}
$$

で定める。 $D$ で定義された 2変数関数

$$
f(x, y) = x\log x + y \log y + (1 - x - y) \log(1 - x - y)
$$

について、次の問に答えよ。
(1) 偏導関数 $\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}$ をそれぞれ求めよ。
(2) 関数 $f(x, y)$ の領域 $D$ における最小値を求めよ。

[III] $xy$ 平面の領域

$$
E = \{(x, y) \in \mathbb{R}^2 \mid 0 \leq x \leq 1, \frac{1}{\sqrt{3}} \leq y \leq 1 \}
$$

における重積分

$$
\iint_E \frac{x}{(x^2 + y^2)^2} dx dy
$$

を計算せよ。

### 题目描述

I. 对定义在 $x>1$ 上的函数

$$
f(x)=\log(\log x),
$$

回答下列问题。

(1) 求导函数 $f'(x)$。

(2) 求满足

$$
f'(a)=\frac1a
$$

的 $a$。

II. 定义 $xy$ 平面上的区域

$$
D=\left\{(x,y)\in\mathbb{R}^2\,\middle|\,
x>0,\;y>0,\;x+y<1
\right\}.
$$

对于定义在 $D$ 上的二元函数

$$
f(x,y)
=x\log x+y\log y+(1-x-y)\log(1-x-y),
$$

回答下列问题。

(1) 分别求偏导数

$$
\frac{\partial f}{\partial x},
\qquad
\frac{\partial f}{\partial y}.
$$

(2) 求函数 $f(x,y)$ 在区域 $D$ 上的最小值。

III. 计算 $xy$ 平面区域

$$
E=\left\{(x,y)\in\mathbb{R}^2\,\middle|\,
0\leq x\leq1,\;
\frac1{\sqrt3}\leq y\leq1
\right\}
$$

上的二重积分

$$
\iint_E\frac{x}{(x^2+y^2)^2}\,dx\,dy.
$$

## **Kai**

問1. (1)

$$
f(x) = \log(\log x)
$$

$$
f'(x) = \frac{1}{\log x} \cdot \frac{1}{x} = \frac{1}{x \log x}
$$

(2)

$$
f'(a) = \frac{1}{a \log a} = \frac{1}{a}
$$

$$
a \log a = a
$$

$\log a = 1$
$a = e$

II (1)

$$
f(x, y) = x\log x + y \log y + (1 - x - y) \log(1 - x - y)
$$

$$
\frac{\partial f}{\partial x} = \log x + 1 - \log(1 - x - y) - 1 = \log x - \log(1 - x - y) = \log \frac{x}{1 - x - y}
$$

$$
\frac{\partial f}{\partial y} = \log y + 1 - \log(1 - x - y) - 1 = \log y - \log(1 - x - y) = \log \frac{y}{1 - x - y}
$$

(2)
$\frac{\partial f}{\partial x} = 0, \frac{\partial f}{\partial y} = 0$
$\log \frac{x}{1 - x - y} = 0, \log \frac{y}{1 - x - y} = 0$
$\frac{x}{1 - x - y} = 1, \frac{y}{1 - x - y} = 1$
$x = 1 - x - y, y = 1 - x - y$
$x = y$
$x = 1 - x - x$
$3x = 1$
$x = \frac{1}{3}, y = \frac{1}{3}$
$(\frac{1}{3}, \frac{1}{3}) \in D$
$f(\frac{1}{3}, \frac{1}{3}) = \frac{1}{3} \log \frac{1}{3} + \frac{1}{3} \log \frac{1}{3} + (1 - \frac{1}{3} - \frac{1}{3}) \log(1 - \frac{1}{3} - \frac{1}{3}) = \frac{2}{3} \log \frac{1}{3} + \frac{1}{3} \log \frac{1}{3} = \log \frac{1}{3} = -\log 3$

この停留点が $D$ 全体での最小点であることも確認する。 $p_1=x,\ p_2=y,\ p_3=1-x-y$ とおけば、 $p_i>0$ かつ $\sum_i p_i=1$ である。関数 $t\log t$ の凸性と Jensen の不等式より、

$$
\frac13\sum_{i=1}^3(3p_i)\log(3p_i)
\geq
\left(\frac13\sum_{i=1}^3 3p_i\right)
\log\left(\frac13\sum_{i=1}^3 3p_i\right)=0.
$$

従って

$$
\sum_{i=1}^3p_i\log p_i\geq-\log3,
$$

等号は $p_1=p_2=p_3=1/3$ のときに限る。よって最小値は確かに $\boxed{-\log3}$ である。

III

$$
\iint_E \frac{x}{(x^2 + y^2)^2} dx dy = \int_{\frac{1}{\sqrt{3}}}^1 \int_0^1 \frac{x}{(x^2 + y^2)^2} dx dy
$$

Let $u = x^2 + y^2$ , then $du = 2x dx$ , so $x dx = \frac{1}{2}du$
When $x = 0$ , $u = y^2$
When $x = 1$ , $u = 1 + y^2$

$$
\int_{\frac{1}{\sqrt{3}}}^1 \int_{y^2}^{1 + y^2} \frac{1}{2u^2} du dy = \int_{\frac{1}{\sqrt{3}}}^1 [-\frac{1}{2u}]_{y^2}^{1 + y^2} dy = \int_{\frac{1}{\sqrt{3}}}^1 (-\frac{1}{2(1 + y^2)} + \frac{1}{2y^2}) dy
$$

$$
= \int_{\frac{1}{\sqrt{3}}}^1 (\frac{1}{2y^2} - \frac{1}{2(1 + y^2)}) dy = [-\frac{1}{2y} - \frac{1}{2}\arctan y]_{\frac{1}{\sqrt{3}}}^1 = [-\frac{1}{2} - \frac{1}{2} \arctan 1] - [-\frac{\sqrt{3}}{2} - \frac{1}{2} \arctan \frac{1}{\sqrt{3}}] = [-\frac{1}{2} - \frac{\pi}{8}] - [-\frac{\sqrt{3}}{2} - \frac{\pi}{12}] = \frac{\sqrt{3} - 1}{2} - \frac{\pi}{24}
$$

Final Answer =  $\frac{\sqrt{3} - 1}{2} - \frac{\pi}{24}$
