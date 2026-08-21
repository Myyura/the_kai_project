---
sidebar_label: "2020年8月実施 微积分"
tags:
  - Hosei-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Integration
---
# 法政大学 理工学研究科 システム理工学専攻 経営システム系 2020年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[II] $f(x,y) = x^2 + xy + y^2$ とする。 $xy$ 平面上の閉領域 $D_1, D_2, D_3$ を、それぞれ

$$
D_1 = \{(x, y) | 0 \leq x \leq 1, 0 \leq y \leq 1\},
$$

$$
D_2 = \{(x, y) | x \geq 0, y \geq 0, x + y \leq 1\},
$$

$$
D_3 = \{(x, y) | x \geq 0, y \geq 0, x^2 + y^2 \leq 1\}
$$

とする。2重積分

$$
I_1 = \iint_{D_1} f(x, y) dxdy, \quad I_2 = \iint_{D_2} f(x, y) dxdy, \quad I_3 = \iint_{D_3} f(x, y) dxdy
$$

の値をそれぞれ求めよ。

### 题目描述

【II】设

$$
f(x,y)=x^2+xy+y^2.
$$

在 $xy$ 平面上分别定义闭区域

$$
D_1=\{(x,y)\mid 0\le x\le 1,\ 0\le y\le 1\},
$$

$$
D_2=\{(x,y)\mid x\ge 0,\ y\ge 0,\ x+y\le 1\},
$$

$$
D_3=\{(x,y)\mid x\ge 0,\ y\ge 0,\ x^2+y^2\le 1\}.
$$

分别求二重积分

$$
I_1=\iint_{D_1}f(x,y)\,dx\,dy,\qquad
I_2=\iint_{D_2}f(x,y)\,dx\,dy,\qquad
I_3=\iint_{D_3}f(x,y)\,dx\,dy
$$

的值。

## **Kai**

まず、 $I_1$ を計算します。

$$
I_1 = \iint_{D_1} (x^2 + xy + y^2) dxdy = \int_0^1 \int_0^1 (x^2 + xy + y^2) dxdy
$$

$$
= \int_0^1 [\frac{x^3}{3} + \frac{x^2y}{2} + y^2x]_0^1 dy = \int_0^1 (\frac{1}{3} + \frac{y}{2} + y^2) dy
$$

$$
= [\frac{y}{3} + \frac{y^2}{4} + \frac{y^3}{3}]_0^1 = \frac{1}{3} + \frac{1}{4} + \frac{1}{3} = \frac{4 + 3 + 4}{12} = \frac{11}{12}
$$

次に、 $I_2$ を計算します。

$$
I_2 = \iint_{D_2} (x^2 + xy + y^2) dxdy = \int_0^1 \int_0^{1-x} (x^2 + xy + y^2) dy dx
$$

$$
= \int_0^1 [x^2y + \frac{xy^2}{2} + \frac{y^3}{3}]_0^{1-x} dx = \int_0^1 [x^2(1-x) + \frac{x(1-x)^2}{2} + \frac{(1-x)^3}{3}] dx
$$

$$
= \int_0^1 [x^2 - x^3 + \frac{x(1-2x+x^2)}{2} + \frac{1-3x+3x^2-x^3}{3}] dx
$$

$$
= \int_0^1 [x^2 - x^3 + \frac{x}{2} - x^2 + \frac{x^3}{2} + \frac{1}{3} - x + x^2 - \frac{x^3}{3}] dx
$$

$$
= \int_0^1 [-\frac{5}{6}x^3 + x^2 - \frac{x}{2} + \frac{1}{3}] dx
$$

$$
= [-\frac{5}{24}x^4 + \frac{x^3}{3} - \frac{x^2}{4} + \frac{x}{3}]_0^1 = -\frac{5}{24} + \frac{1}{3} - \frac{1}{4} + \frac{1}{3} = \frac{-5 + 8 - 6 + 8}{24} = \frac{5}{24}
$$

最後に、 $I_3$ を計算します。極座標変換 $x = r\cos\theta, y = r\sin\theta$ を用います。

$$
I_3 = \iint_{D_3} (x^2 + xy + y^2) dxdy = \int_0^{\frac{\pi}{2}} \int_0^1 (r^2\cos^2\theta + r^2\cos\theta\sin\theta + r^2\sin^2\theta) r dr d\theta
$$

$$
= \int_0^{\frac{\pi}{2}} \int_0^1 r^3 (1 + \cos\theta\sin\theta) dr d\theta = \int_0^{\frac{\pi}{2}} [\frac{r^4}{4} (1 + \cos\theta\sin\theta)]_0^1 d\theta
$$

$$
= \int_0^{\frac{\pi}{2}} \frac{1}{4} (1 + \cos\theta\sin\theta) d\theta = \frac{1}{4} \int_0^{\frac{\pi}{2}} (1 + \frac{1}{2}\sin(2\theta)) d\theta
$$

$$
= \frac{1}{4} [\theta - \frac{1}{4}\cos(2\theta)]_0^{\frac{\pi}{2}} = \frac{1}{4} [(\frac{\pi}{2} - \frac{1}{4}\cos(\pi)) - (0 - \frac{1}{4}\cos(0))]
$$

$$
= \frac{1}{4} [\frac{\pi}{2} + \frac{1}{4} + \frac{1}{4}] = \frac{1}{4} [\frac{\pi}{2} + \frac{1}{2}] = \frac{\pi + 1}{8}
$$
