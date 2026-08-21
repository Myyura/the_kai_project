---
sidebar_label: "2019年2月実施 微积分"
tags:
  - Saitama-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Limit
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2019年2月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2. 以下の問に答えよ。[ Solve the following problems. ]

(a). 次の極限値を求めよ。[ Find the following limit. ]

$$
\lim_{x \to 0} \frac{\sqrt{x + 4} - 2}{x}
$$

(b). 次の関数のマクローリン展開を $x^6$ の項まで求めよ。[ Find the Maclaurin expansion of the following function up to the term of $x^6$ . ]

$$
f(x) = x \sin x
$$

(c). 次の定積分を求めよ。[ Find the following definite integral. ]

$$
\int_0^1 \sqrt{\frac{x}{1 - x}} dx
$$

(d). 次の2重積分の値を求めよ。[ Evaluate the following double integral. ]

$$
\iint_D (x^2 + 8y) \ dxdy, D = \{ 1 \le x \le 2, 2 - x \le y \le x^2 \}
$$

### 题目描述

2. 回答下列问题。

(a) 求极限

$$
\lim_{x\to0}\frac{\sqrt{x+4}-2}{x}.
$$

(b) 将函数

$$
f(x)=x\sin x
$$

作 Maclaurin 展开，写到 $x^6$ 项为止。

(c) 计算定积分

$$
\int_0^1\sqrt{\frac{x}{1-x}}\,dx.
$$

(d) 计算二重积分

$$
\iint_D(x^2+8y)\,dx\,dy,
$$

其中

$$
D=\left\{(x,y)\,\middle|\,
1\leq x\leq2,\;
2-x\leq y\leq x^2
\right\}.
$$

## **Kai**

## 2.

### (a)

分子を有理化すると

$$
\frac{\sqrt{x+4}-2}{x}
=\frac{1}{\sqrt{x+4}+2}\quad(x\ne0).
$$

よって

$$
\boxed{\lim_{x\to0}\frac{\sqrt{x+4}-2}{x}=\frac14}.
$$

### (b)

$$
\sin x=x-\frac{x^3}{6}+\frac{x^5}{120}+O(x^7)
$$

より、

$$
\boxed{x\sin x=x^2-\frac{x^4}{6}+\frac{x^6}{120}+O(x^8)}.
$$

### (c)

$x=\sin^2\theta$ （ $0\leq\theta\leq\pi/2$ ）とおくと、

$$
dx=2\sin\theta\cos\theta\,d\theta,\qquad
\sqrt{\frac{x}{1-x}}=\tan\theta.
$$

したがって

$$
\int_0^1\sqrt{\frac{x}{1-x}}\,dx
=2\int_0^{\pi/2}\sin^2\theta\,d\theta
=\boxed{\frac{\pi}{2}}.
$$

### (d)

$$
\begin{aligned}
\iint_D(x^2+8y)\,dx\,dy
&=\int_1^2\int_{2-x}^{x^2}(x^2+8y)\,dy\,dx\\
&=\int_1^2\left(5x^4+x^3-6x^2+16x-16\right)dx\\
&=\left[x^5+\frac{x^4}{4}-2x^3+8x^2-16x\right]_1^2\\
&=20-\left(-\frac{35}{4}\right)
=\boxed{\frac{115}{4}}.
\end{aligned}
$$
