---
sidebar_label: "2022年8月実施 微积分"
tags:
  - Saitama-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Integration
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2022年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

以下の問に答えよ. [Solve the following problems.]

(a) $n \geq 1$ を正の整数とする. 次の極限値を求めよ. [Let $n \geq 1$ be a positive integer. Find the following limit.]

$$
\lim_{x \to \infty} \frac{x^n}{e^x}
$$

(b) 次の関数 $f(x)$ の $x = \pi/2$ まわりでのテイラー展開を4次の項まで求めよ. [Find the Taylor expansion of the following function $f(x)$ around $x = \pi/2$ up to the 4th order term.]

$$
f(x) = \sin^2 x
$$

(c) 次の曲線と直線によって囲まれた部分の面積を求めよ. [Find the area of the region bounded by the following curve and line.]

$$
y^2 = x-1
$$

$$
y = \frac{x}{2} - 2
$$

(d) 次の2重積分の値を求めよ. [Find the following double integral.]

$$
\iint_D \frac{y}{1+x} dxdy, \quad D = \{0 \leq x \leq 1, x^2 \leq y \leq 2-x^2\}
$$

### 题目描述

回答下列问题。

(a) 设 $n\geq1$ 为正整数，求极限

$$
\lim_{x\to\infty}\frac{x^n}{e^x}.
$$

(b) 将函数

$$
f(x)=\sin^2x
$$

在 $x=\pi/2$ 附近作 Taylor 展开，写到四次项为止。

(c) 求由曲线与直线

$$
y^2=x-1,
$$

$$
y=\frac x2-2
$$

围成的区域面积。

(d) 计算二重积分

$$
\iint_D\frac{y}{1+x}\,dx\,dy,
$$

其中

$$
D=\left\{(x,y)\,\middle|\,
0\leq x\leq1,\;
x^2\leq y\leq2-x^2
\right\}.
$$

## **Kai**

(a) Let $f(x) = \frac{x^n}{e^x}$ .  Applying L'Hopital's rule repeatedly, we get

$$
\lim_{x \to \infty} \frac{x^n}{e^x} = \lim_{x \to \infty} \frac{nx^{n-1}}{e^x} = \lim_{x \to \infty} \frac{n(n-1)x^{n-2}}{e^x} = \cdots = \lim_{x \to \infty} \frac{n!}{e^x} = 0
$$

(b) $f(x) = \sin^2 x$ . Then $f'(x) = 2 \sin x \cos x = \sin 2x$ , $f''(x) = 2 \cos 2x$ , $f'''(x) = -4 \sin 2x$ , $f^{(4)}(x) = -8 \cos 2x$ .
At $x = \frac{\pi}{2}$ , we have $f(\frac{\pi}{2}) = \sin^2(\frac{\pi}{2}) = 1$ , $f'(\frac{\pi}{2}) = \sin(\pi) = 0$ , $f''(\frac{\pi}{2}) = 2 \cos(\pi) = -2$ , $f'''(\frac{\pi}{2}) = -4 \sin(\pi) = 0$ , $f^{(4)}(\frac{\pi}{2}) = -8 \cos(\pi) = 8$ .
Thus the Taylor expansion is

$$
f(x) = 1 + 0(x-\frac{\pi}{2}) + \frac{-2}{2!}(x-\frac{\pi}{2})^2 + \frac{0}{3!}(x-\frac{\pi}{2})^3 + \frac{8}{4!}(x-\frac{\pi}{2})^4 + \cdots
$$

$$
f(x) = 1 - (x-\frac{\pi}{2})^2 + \frac{1}{3}(x-\frac{\pi}{2})^4 + \cdots
$$

(c) $y^2 = x-1 \implies x = y^2+1$ and $y = \frac{x}{2} - 2 \implies x = 2y+4$ . Equating, $y^2+1 = 2y+4 \implies y^2-2y-3 = 0 \implies (y-3)(y+1)=0$ . Thus $y = 3$ and $y=-1$ . The corresponding $x$ values are $x=10$ and $x=2$ . So the intersection points are $(2, -1)$ and $(10, 3)$ .

$$
A = \int_{-1}^3 (2y+4 - (y^2+1)) dy = \int_{-1}^3 (-y^2+2y+3) dy = [-\frac{y^3}{3} + y^2 + 3y]_{-1}^3 = (-9+9+9) - (\frac{1}{3}+1-3) = 9 - (\frac{1}{3}-2) = 11 - \frac{1}{3} = \frac{32}{3}
$$

(d)

$$
\iint_D \frac{y}{1+x} dxdy = \int_0^1 \int_{x^2}^{2-x^2} \frac{y}{1+x} dy dx = \int_0^1 \frac{1}{1+x} [\frac{y^2}{2}]_{x^2}^{2-x^2} dx = \frac{1}{2} \int_0^1 \frac{(2-x^2)^2 - x^4}{1+x} dx = \frac{1}{2} \int_0^1 \frac{4 - 4x^2 + x^4 - x^4}{1+x} dx
$$

$$
= 2 \int_0^1 \frac{1-x^2}{1+x} dx = 2 \int_0^1 \frac{(1-x)(1+x)}{1+x} dx = 2 \int_0^1 (1-x) dx = 2[x - \frac{x^2}{2}]_0^1 = 2(1-\frac{1}{2}) = 2(\frac{1}{2}) = 1
$$
