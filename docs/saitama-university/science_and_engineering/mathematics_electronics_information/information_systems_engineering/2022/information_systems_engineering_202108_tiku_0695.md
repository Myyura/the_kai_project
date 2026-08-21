---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Saitama-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Indefinite-Integral
  - Mathematics.Calculus.Limit
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2. 以下の問に答えよ。 [ Solve the following problems. ]

(a) 次の極限値を求めよ. [ Find the following limit. ]

$$
\lim_{x \to 0} \frac{e^x - 1}{\sin(\pi + x)}
$$

(b) 次の関数 $f(x)$ のマクローリン展開を $x^3$ の項まで求めよ. [ Find the Maclaurin expansion of the following function $f(x)$ up to the term of $x^3$ . ]

$$
f(x) = \log(2 + e^x)
$$

(c) 次の不定積分を求めよ. [ Find the following indefinite integral. ]

$$
\int 3e^{3x}(e^{3x} + 1)^3 dx
$$

(d) 次の曲線と直線によって囲まれた部分の面積を求めよ. [ Find the area of the region bounded by the following curve and lines. ]

$$
y = \log(1+x)
$$

$$
y = 0
$$

$$
x = \alpha \quad (\alpha \geq 0)
$$

### 题目描述

2. 回答下列问题。

(a) 求极限

$$
\lim_{x\to0}\frac{e^x-1}{\sin(\pi+x)}.
$$

(b) 将函数

$$
f(x)=\log(2+e^x)
$$

作 Maclaurin 展开，写到 $x^3$ 项为止。

(c) 求不定积分

$$
\int 3e^{3x}(e^{3x}+1)^3\,dx.
$$

(d) 求由下列曲线与直线围成的区域面积：

$$
y=\log(1+x),
$$

$$
y=0,
$$

$$
x=\alpha\qquad(\alpha\geq0).
$$

## **Kai**

(a)

$$
\lim_{x \to 0} \frac{e^x - 1}{\sin(\pi + x)} = \lim_{x \to 0} \frac{e^x - 1}{-\sin(x)} = \lim_{x \to 0} \frac{e^x}{-\cos(x)} = \frac{1}{-1} = -1
$$

(b) Let $f(x) = \log(2+e^x)$ .
$f(0) = \log(2+1) = \log(3)$ .
$f'(x) = \frac{e^x}{2+e^x}$ ,  $f'(0) = \frac{1}{3}$ .
$f''(x) = \frac{e^x(2+e^x) - e^{2x}}{(2+e^x)^2} = \frac{2e^x}{(2+e^x)^2}$ , $f''(0) = \frac{2}{9}$ .
$f'''(x) = \frac{2e^x(2+e^x)^2 - 2e^x \cdot 2(2+e^x)e^x}{(2+e^x)^4} = \frac{2e^x(2+e^x) - 4e^{2x}}{(2+e^x)^3} = \frac{4e^x + 2e^{2x} - 4e^{2x}}{(2+e^x)^3} = \frac{4e^x - 2e^{2x}}{(2+e^x)^3}$ , $f'''(0) = \frac{4-2}{27} = \frac{2}{27}$ .
Thus,

$$
f(x) = \log(3) + \frac{1}{3}x + \frac{2}{9} \cdot \frac{x^2}{2!} + \frac{2}{27} \cdot \frac{x^3}{3!} + O(x^4) = \log(3) + \frac{1}{3}x + \frac{1}{9}x^2 + \frac{1}{81}x^3 + O(x^4).
$$

(c) Let $u = e^{3x} + 1$ , then $du = 3e^{3x} dx$ .

$$
\int 3e^{3x}(e^{3x} + 1)^3 dx = \int u^3 du = \frac{u^4}{4} + C = \frac{(e^{3x} + 1)^4}{4} + C.
$$

(d) The area is

$$
\int_0^\alpha \log(1+x) dx = [x\log(1+x)]_0^\alpha - \int_0^\alpha \frac{x}{1+x} dx = \alpha \log(1+\alpha) - \int_0^\alpha (1 - \frac{1}{1+x}) dx = \alpha \log(1+\alpha) - [x - \log(1+x)]_0^\alpha = \alpha \log(1+\alpha) - (\alpha - \log(1+\alpha)) = (\alpha + 1)\log(1+\alpha) - \alpha.
$$
