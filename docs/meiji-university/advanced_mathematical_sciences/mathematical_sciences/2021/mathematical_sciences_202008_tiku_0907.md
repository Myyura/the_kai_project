---
sidebar_label: "2020年8月実施 微积分"
tags:
  - Meiji-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Integration
---
# 明治大学 先端数理科学研究科 現象数理学専攻 2020年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

(1) 次の関数を3次の項までマクローリン展開せよ。

(a) $x \cos x$

(b) $\log(1+3x)$

(2) 極限 $\lim_{x \to 0} \left(\frac{1}{\log(1+3x)} - \frac{1}{3x \cos x}\right)$ を求めよ。

(3) 次の積分を計算せよ。

$\iiint_V z dx dy dz, V = \{(x, y, z) | 0 \leq x \leq 1, 0 \leq y \leq 1-x, 0 \leq z \leq 1-x-y\}.$

### 题目描述

(1) 将下列函数作 Maclaurin 展开，写到三次项为止。

(a) $x\cos x$

(b) $\log(1+3x)$

(2) 求极限

$$
\lim_{x\to0}\left(
\frac{1}{\log(1+3x)}-\frac{1}{3x\cos x}
\right).
$$

(3) 计算三重积分

$$
\iiint_V z\,dx\,dy\,dz,
$$

其中

$$
V=\left\{(x,y,z)\,\middle|\,
0\leq x\leq1,\;
0\leq y\leq1-x,\;
0\leq z\leq1-x-y
\right\}.
$$

## **Kai**

(1)(a)
$f(x) = x\cos x$
$f'(x) = \cos x - x\sin x$
$f''(x) = -\sin x - \sin x - x\cos x = -2\sin x - x\cos x$
$f'''(x) = -2\cos x - \cos x + x\sin x = -3\cos x + x\sin x$

$f(0) = 0, f'(0) = 1, f''(0) = 0, f'''(0) = -3$

$x\cos x = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + ...$
$= x + \frac{-3}{6}x^3 + ...$
$= x - \frac{1}{2}x^3 + O(x^5)$

(b)
$\log(1+3x) = 3x - \frac{(3x)^2}{2} + \frac{(3x)^3}{3} + O(x^4)$
$= 3x - \frac{9}{2}x^2 + 9x^3 + O(x^4)$

(2)
$\lim_{x \to 0} \left(\frac{1}{\log(1+3x)} - \frac{1}{3x \cos x}\right) = \lim_{x \to 0} \frac{3x \cos x - \log(1+3x)}{3x\cos x \log(1+3x)}$
$\log(1+3x) = 3x - \frac{(3x)^2}{2} + \frac{(3x)^3}{3} + O(x^4) = 3x - \frac{9x^2}{2} + 9x^3 + O(x^4)$
$\cos x = 1 - \frac{x^2}{2} + O(x^4)$
$3x\cos x = 3x(1-\frac{x^2}{2} + O(x^4)) = 3x - \frac{3}{2}x^3 + O(x^5)$
$3x\cos x - \log(1+3x) = 3x - \frac{3}{2}x^3 - (3x - \frac{9x^2}{2} + 9x^3) + O(x^4) = \frac{9}{2}x^2 - \frac{21}{2}x^3 + O(x^4)$
$3x\cos x \log(1+3x) = (3x - \frac{3}{2}x^3)(3x - \frac{9}{2}x^2 + 9x^3) + O(x^5) = 9x^2 - \frac{27}{2}x^3 + 27x^4 - \frac{27}{2}x^4 + O(x^5) = 9x^2 - \frac{27}{2}x^3 + \frac{27}{2}x^4 + O(x^5)$
$\lim_{x \to 0} \frac{\frac{9}{2}x^2 - \frac{21}{2}x^3}{9x^2 - \frac{27}{2}x^3} = \lim_{x \to 0} \frac{\frac{9}{2} - \frac{21}{2}x}{9 - \frac{27}{2}x} = \frac{\frac{9}{2}}{9} = \frac{1}{2}$

(3)
$\iiint_V z dx dy dz = \int_0^1 \int_0^{1-x} \int_0^{1-x-y} z dz dy dx = \int_0^1 \int_0^{1-x} \frac{1}{2}(1-x-y)^2 dy dx = \int_0^1 [-\frac{1}{6}(1-x-y)^3]_0^{1-x} dx = \int_0^1 \frac{1}{6}(1-x)^3 dx = [-\frac{1}{24}(1-x)^4]_0^1 = \frac{1}{24}$
