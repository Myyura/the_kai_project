---
sidebar_label: "2020年2月実施 微积分"
tags:
  - Saitama-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Differentiation
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2020年2月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2. 以下の問に答えよ. [Solve the following problems.]

(a) $\lim_{x \to 0} \frac{\tan^{-1}x}{x}$ の極限を求めよ. [Find the $\lim_{x \to 0} \frac{\tan^{-1}x}{x}$ ]

(b) 次の関数の導関数を求めよ. [Find the derivative of the following function.]

$$
y = \int_0^{x^2} \cos{\sqrt{t}} dt
$$

(c) $f(x)=(1-x)\log(1-x)$ のマクローリン展開を $x^4$ の項まで求めよ. [Find the Maclaurin expansion of $f(x) = (1-x)\log(1-x)$ up to the term of $x^4$ .]

(d) $0 \leq x \leq 1$ と $-x\leq y \leq x$ で定義される $xy$ 平面上の領域 $D$ と面 $z=x^2-2y+3$ でつくられる体積を求めよ. [Find the volume under the surface $z = x^2 - 2y + 3$ and over the region $D$ of $xy$ plane defined by $0\leq x \leq 1$ and $-x \leq y \leq x$ .]

### 题目描述

2. 回答下列问题。

(a) 求极限

$$
\lim_{x\to0}\frac{\tan^{-1}x}{x}.
$$

(b) 求函数

$$
y=\int_0^{x^2}\cos\sqrt{t}\,dt
$$

的导数。

(c) 将函数

$$
f(x)=(1-x)\log(1-x)
$$

作 Maclaurin 展开，写到 $x^4$ 项为止。

(d) 设 $D$ 为 $xy$ 平面上由

$$
0\leq x\leq1,\qquad -x\leq y\leq x
$$

定义的区域。求曲面

$$
z=x^2-2y+3
$$

与区域 $D$ 所围成的体积。

## **Kai**

(a)  $\lim_{x \to 0} \frac{\tan^{-1}x}{x}$ は不定形 $\frac{0}{0}$ なので、ロピタルの定理を使うことができます。

$$
\lim_{x \to 0} \frac{\tan^{-1}x}{x} = \lim_{x \to 0} \frac{\frac{1}{1+x^2}}{1} = \lim_{x \to 0} \frac{1}{1+x^2} = \frac{1}{1+0} = 1
$$

(b) $y = \int_0^{x^2} \cos{\sqrt{t}} dt$ の導関数を求めるには、微積分学の基本定理と合成関数の微分（連鎖律）を使います。

$\frac{dy}{dx} = \cos(\sqrt{x^2}) \cdot \frac{d}{dx}(x^2) = \cos(|x|) \cdot 2x = 2x\cos(x)$

ここでは $\cos$ が偶関数なので $\cos(|x|)=\cos x$ であり、この式はすべての実数 $x$ で成り立つ。

(c) $f(x)=(1-x)\log(1-x)$ のマクローリン展開を求める。
$\log(1-x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} + O(x^5)$
$f(x) = (1-x)\log(1-x) = (1-x)(-x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} + ...)$
$f(x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} + x^2 + \frac{x^3}{2} + \frac{x^4}{3} + ...$
$f(x) = -x + \frac{1}{2}x^2 + \frac{1}{6}x^3 + \frac{1}{12}x^4 + O(x^5)$

(d) 体積 $V$ は二重積分で計算できます。

$$
V = \iint_D (x^2 - 2y + 3) dA = \int_0^1 \int_{-x}^x (x^2 - 2y + 3) dy dx
$$

$$
V = \int_0^1 [x^2y - y^2 + 3y]_{-x}^x dx = \int_0^1 [(x^3 - x^2 + 3x) - (-x^3 - x^2 - 3x)] dx
$$

$$
V = \int_0^1 (2x^3 + 6x) dx = [\frac{1}{2}x^4 + 3x^2]_0^1 = \frac{1}{2} + 3 = \frac{7}{2}
$$
