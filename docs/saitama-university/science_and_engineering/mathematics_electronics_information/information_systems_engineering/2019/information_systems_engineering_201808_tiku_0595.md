---
sidebar_label: "2018年8月実施 微分積分"
tags:
  - Saitama-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Indefinite-Integral
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2018年8月実施 微分積分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2. 以下の問に答えよ. [ Solve the following problems. ]

(a) 次の極限値を求めよ. [ Find the following limit. ]

$$
\lim_{x \to 0} \frac{\sin x^2}{1 - \cos x}
$$

(b) 以下の関数のマクローリン展開を $x^4$ の項まで求めよ. [ Find the Maclaurin expansion of the following function up to the term of $x^4$ . ]

$$
f(x) = x^2 \cos x
$$

(c) 次の不定積分を求めよ. [ Find the following indefinite integral. ]

$$
\int e^x \sin x \, dx
$$

(d) $a, b$ を定数とする。次の二重積分を求めよ. [ Let $a$ and $b$ be constants. Find the following double integral. ]

$$
\iint_D (ax^2 + by^2) \, dx \, dy, \quad D: x^2 + y^2 \leq 1
$$

### 题目描述

2. 回答下列问题。

(a) 求极限

$$
\lim_{x\to0}\frac{\sin x^2}{1-\cos x}.
$$

(b) 将函数

$$
f(x)=x^2\cos x
$$

作 Maclaurin 展开，写到 $x^4$ 项为止。

(c) 求不定积分

$$
\int e^x\sin x\,dx.
$$

(d) 设 $a,b$ 为常数，计算二重积分

$$
\iint_D(ax^2+by^2)\,dx\,dy,
$$

其中

$$
D:\quad x^2+y^2\leq1.
$$

## **Kai**

(a)

$$
\lim_{x \to 0} \frac{\sin x^2}{1 - \cos x} = \lim_{x \to 0} \frac{\sin x^2}{1 - \cos x} \cdot \frac{1 + \cos x}{1 + \cos x} = \lim_{x \to 0} \frac{\sin x^2 (1 + \cos x)}{\sin^2 x} = \lim_{x \to 0} \frac{\sin x^2}{x^2} \cdot \frac{x^2}{\sin^2 x} \cdot (1 + \cos x) = \lim_{x \to 0} \frac{\sin x^2}{x^2} \cdot \left(\frac{x}{\sin x}\right)^2 \cdot (1 + \cos x) = 1 \cdot 1^2 \cdot (1 + 1) = 2
$$

(b)

$$
\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \dots
$$

$$
f(x) = x^2 \cos x = x^2 \left(1 - \frac{x^2}{2} + \frac{x^4}{24} - \dots \right) = x^2 - \frac{x^4}{2} + O(x^6)
$$

So the Maclaurin expansion up to the term of $x^4$ is

$$
x^2 - \frac{x^4}{2}
$$

.

(c)
Let $I = \int e^x \sin x \, dx$ . Integrating by parts, we have

$$
I = e^x \sin x - \int e^x \cos x \, dx
$$

$$
I = e^x \sin x - \left( e^x \cos x - \int e^x (-\sin x) \, dx \right) = e^x \sin x - e^x \cos x - \int e^x \sin x \, dx = e^x \sin x - e^x \cos x - I
$$

Thus, $2I = e^x \sin x - e^x \cos x + C$ , so $I = \frac{1}{2} e^x (\sin x - \cos x) + C$ , where C is an arbitrary constant.

(d)
Using polar coordinates $x = r \cos \theta$ and $y = r \sin \theta$ , we have $x^2 + y^2 = r^2$ and $dx \, dy = r \, dr \, d\theta$ . The region $D$ is described by $0 \leq r \leq 1$ and $0 \leq \theta \leq 2\pi$ .

$$
\iint_D (ax^2 + by^2) \, dx \, dy = \int_0^{2\pi} \int_0^1 (a r^2 \cos^2 \theta + b r^2 \sin^2 \theta) r \, dr \, d\theta = \int_0^{2\pi} \int_0^1 (a \cos^2 \theta + b \sin^2 \theta) r^3 \, dr \, d\theta
$$

$$
= \int_0^{2\pi} (a \cos^2 \theta + b \sin^2 \theta) \left[ \frac{r^4}{4} \right]_0^1 d\theta = \frac{1}{4} \int_0^{2\pi} (a \cos^2 \theta + b \sin^2 \theta) d\theta = \frac{1}{4} \int_0^{2\pi} \left( a \frac{1 + \cos(2\theta)}{2} + b \frac{1 - \cos(2\theta)}{2} \right) d\theta
$$

$$
= \frac{1}{8} \int_0^{2\pi} (a + a\cos(2\theta) + b - b\cos(2\theta)) d\theta = \frac{1}{8} \int_0^{2\pi} ((a+b) + (a-b)\cos(2\theta)) d\theta = \frac{1}{8} \left[ (a+b)\theta + \frac{a-b}{2} \sin(2\theta) \right]_0^{2\pi}
$$

$$
= \frac{1}{8} (a+b) (2\pi) = \frac{\pi}{4} (a+b)
$$
