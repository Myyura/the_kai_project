---
sidebar_label: "2019年8月実施 微积分"
tags:
  - Saitama-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Limit
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2019年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2. 以下の問に答えよ。[ Solve the following problems. ]

(a). 次の極限値を求めよ。[ Find the following limit. ]

$$
\lim_{x \to 0} \frac{x - \sin x}{x - \tan x}
$$

(b). 次の関数のマクローリン展開を $x^4$ の項まで求めよ。[ Find the Maclaurin expansion of the following function up to the term of $x^4$ . ]

$$
f(x) = e^x \cos x
$$

(c). 次の定積分を求めよ。[ Find the following definite integral. ]

$$
\int_0^{\frac{\pi}{2}} \frac{1}{1 + \cos x} dx
$$

(d). 次の2重積分の値を求めよ。[ Evaluate the following double integral. ]

$$
\iint_D x^2 y \ dxdy, \ D = \{ 0 \le x \le a, 0 \le y \le b \}
$$

### 题目描述

2. 回答下列问题。

(a) 求极限

$$
\lim_{x\to0}\frac{x-\sin x}{x-\tan x}.
$$

(b) 将函数

$$
f(x)=e^x\cos x
$$

作 Maclaurin 展开，写到 $x^4$ 项为止。

(c) 计算定积分

$$
\int_0^{\pi/2}\frac{1}{1+\cos x}\,dx.
$$

(d) 计算二重积分

$$
\iint_D x^2y\,dx\,dy,
$$

其中

$$
D=\left\{(x,y)\,\middle|\,
0\leq x\leq a,\;
0\leq y\leq b
\right\}.
$$

## **Kai**

## 2.

### (a)

$x=0$ のまわりで

$$
\sin x=x-\frac{x^3}{6}+O(x^5),\qquad \tan x=x+\frac{x^3}{3}+O(x^5)
$$

であるから、

$$
\lim_{x\to0}\frac{x-\sin x}{x-\tan x}
=\frac{1/6}{-1/3}=\boxed{-\frac12}.
$$

### (b)

$$
e^x=1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}+O(x^5),\qquad
\cos x=1-\frac{x^2}{2}+\frac{x^4}{24}+O(x^6).
$$

これらを掛け合わせると

$$
\boxed{e^x\cos x=1+x-\frac{x^3}{3}-\frac{x^4}{6}+O(x^5)}.
$$

したがって $x^2$ の係数は $0$ である。

### (c)

半角公式 $1+\cos x=2\cos^2(x/2)$ より、

$$
\int_0^{\pi/2}\frac{dx}{1+\cos x}
=\int_0^{\pi/2}\frac12\sec^2\frac{x}{2}\,dx
=\left[\tan\frac{x}{2}\right]_0^{\pi/2}
=\boxed{1}.
$$

### (d)

積分領域が長方形なので積分は積に分離できる。

$$
\iint_Dx^2y\,dx\,dy
=\left(\int_0^a x^2\,dx\right)\left(\int_0^b y\,dy\right)
=\frac{a^3}{3}\frac{b^2}{2}
=\boxed{\frac{a^3b^2}{6}}.
$$
