---
sidebar_label: "2021年2月実施 専門基礎科目 第2問"
tags:
  - Saitama-University
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Implicit-Differentiation
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Differentiation
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2021年2月実施 専門基礎科目 第2問

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2. 以下の問に答えよ。 [Solve the following problems. ]

(a) xが左から1/3に近づくとき、次の関数の極限を求めよ. [ Find the limit of the following function as x is approaching 1/3 from the left. ]

$$
f(x) = \frac{3x-1}{|3x^3 - x^2|}
$$

(b) 曲線 $x^2y^2+xy = 6$ の接線の傾きが-1となる点を全て求めよ。[ Find all points on the curve $x^2y^2 + xy = 6$ where the slope of the tangent line is -1.]

(c) 次の積分を求めよ. [ Find the following integral.]

$$
\iint_D e^{-(x+y)} dxdy, \quad D = \{(x,y) | 0 \leq y \leq 2x, 0 \leq x\}
$$

(d) 次の定積分の近似値を小数第二位まで求めよ。[ Find the approximate value of the following definite integral to the second decimal place. ]

$$
\int_0^1 \sin(x^2)dx
$$

### 题目描述

2. 回答下列问题。

(a) 当 $x$ 从左侧趋于 $1/3$ 时，求函数

$$
f(x)=\frac{3x-1}{|3x^3-x^2|}
$$

的极限。

(b) 求曲线

$$
x^2y^2+xy=6
$$

上切线斜率为 $-1$ 的全部点。

(c) 计算二重积分

$$
\iint_D e^{-(x+y)}\,dx\,dy,
$$

其中

$$
D=\left\{(x,y)\,\middle|\,
0\leq y\leq2x,\;
0\leq x
\right\}.
$$

(d) 求定积分

$$
\int_0^1\sin(x^2)\,dx
$$

的近似值，精确到小数点后第二位。

## **Kai**

(a)  We need to find $\lim_{x \to (1/3)^-} \frac{3x-1}{|3x^3 - x^2|}$ .
Since we are approaching $1/3$ from the left, $x < 1/3$ , so $3x < 1$ and $3x - 1 < 0$ . Also, $3x^3 - x^2 = x^2(3x - 1)$ .  Then $|3x^3 - x^2| = |x^2(3x - 1)| = x^2|3x - 1| = -x^2(3x-1)$ because $3x - 1 < 0$ .
Therefore,

$$
\lim_{x \to (1/3)^-} \frac{3x-1}{|3x^3 - x^2|} = \lim_{x \to (1/3)^-} \frac{3x-1}{-x^2(3x-1)} = \lim_{x \to (1/3)^-} \frac{1}{-x^2} = \frac{1}{-(1/3)^2} = -9
$$

So, the limit is -9.

(b)  Given $x^2y^2+xy = 6$ . Differentiating implicitly with respect to x, we get:
$2x y^2 + x^2 (2y \frac{dy}{dx}) + y + x \frac{dy}{dx} = 0$
$\frac{dy}{dx} (2x^2y + x) = -2xy^2 - y$
$\frac{dy}{dx} = \frac{-2xy^2 - y}{2x^2y + x} = \frac{-y(2xy + 1)}{x(2xy + 1)} = -\frac{y}{x}$
We want the slope to be -1, so $-\frac{y}{x} = -1 \Rightarrow y = x$ .
Substituting $y = x$ into $x^2y^2 + xy = 6$ , we get $x^4 + x^2 = 6$ , or $x^4 + x^2 - 6 = 0$ .
$(x^2 + 3)(x^2 - 2) = 0$ . Since $x$ is real, $x^2 = 2$ , so $x = \pm \sqrt{2}$ .  Since $y = x$ , the points are $(\sqrt{2}, \sqrt{2})$ and $(-\sqrt{2}, -\sqrt{2})$ .

(c) 領域は $x$ 方向に非有界であるが、被積分関数は指数的に減衰するため広義積分は収束する。まず $0\le x\le a$ で切ると

$$
\int_0^a \int_0^{2x} e^{-(x+y)} dy dx = \int_0^a e^{-x} \int_0^{2x} e^{-y} dy dx = \int_0^a e^{-x} [-e^{-y}]_0^{2x} dx = \int_0^a e^{-x}(-e^{-2x} + 1) dx
$$

$$
= \int_0^a (e^{-x} - e^{-3x}) dx
= \frac{2}{3}-e^{-a}+\frac{1}{3}e^{-3a}.
$$

$a\to\infty$ とすれば

$$
\boxed{\iint_D e^{-(x+y)}\,dx\,dy=\frac23}.
$$

(d) We want to evaluate $\int_0^1 \sin(x^2) dx$ .  There is no elementary antiderivative of $\sin(x^2)$ , so we must approximate using numerical integration.  We can use the trapezoidal rule or Simpson's rule.
Alternatively, we can expand $\sin(x^2)$ in a Maclaurin series: $\sin(x^2) = x^2 - \frac{x^6}{3!} + \frac{x^{10}}{5!} - \frac{x^{14}}{7!} + ...$
Then $\int_0^1 \sin(x^2) dx = \int_0^1 (x^2 - \frac{x^6}{3!} + \frac{x^{10}}{5!} - \frac{x^{14}}{7!} + ...) dx = [\frac{x^3}{3} - \frac{x^7}{7 \cdot 3!} + \frac{x^{11}}{11 \cdot 5!} - \frac{x^{15}}{15 \cdot 7!} + ...]_0^1$
$= \frac{1}{3} - \frac{1}{42} + \frac{1}{1320} - \frac{1}{75600} + ... \approx 0.31027$
Rounded to the second decimal place, the integral is approximately 0.31.
