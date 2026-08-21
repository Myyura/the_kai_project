---
sidebar_label: "2021年8月実施 微积分"
tags:
  - Saitama-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Limit
  - Mathematics.Calculus.Differentiation
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2021年8月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2. 以下の問に答えよ. [Solve the following problems.]

(a) 次の関数の $\frac{dy}{dx}$ を求めよ. [Find $\frac{dy}{dx}$ of the following function.]

$$
y = \int_{3x^2+1}^4 \frac{1}{t^2+2} dt
$$

(b) 次の定積分を求めよ. [Find the following definite integral.]

$$
\int_0^{+\infty} e^{-ax} \cos bx dx \quad (a > 0)
$$

(c) 次の極限を求めよ. [Find the following limit.]

$$
\lim_{x \to 0} \frac{\cos x^4 - 1 + \frac{1}{2}x^8}{x^{16}}
$$

(d) 次の二重積分の値を求めよ. [Find the following double integral.]

$$
\iint_D ye^{xy} dxdy, \quad D = \{(x,y) | 1 \leq x \leq 2, \frac{1}{x} \leq y \leq 2\}
$$

### 题目描述

2. 回答下列问题。

(a) 对函数

$$
y=\int_{3x^2+1}^{4}\frac{1}{t^2+2}\,dt,
$$

求 $\dfrac{dy}{dx}$。

(b) 计算反常积分

$$
\int_0^{+\infty}e^{-ax}\cos bx\,dx
\qquad(a>0).
$$

(c) 求极限

$$
\lim_{x\to0}
\frac{\cos x^4-1+\frac12x^8}{x^{16}}.
$$

(d) 计算二重积分

$$
\iint_D ye^{xy}\,dx\,dy,
$$

其中

$$
D=\left\{(x,y)\,\middle|\,
1\leq x\leq2,\;
\frac1x\leq y\leq2
\right\}.
$$

## **Kai**

(a) Let $y = \int_{3x^2+1}^4 \frac{1}{t^2+2} dt$ . Using the Fundamental Theorem of Calculus and the chain rule, we have:

$$
\frac{dy}{dx} = -\frac{1}{(3x^2+1)^2 + 2} \cdot \frac{d}{dx}(3x^2+1) = -\frac{6x}{(3x^2+1)^2 + 2}
$$

(b) $b=0$ のときは直接

$$
I=\int_0^\infty e^{-ax}\,dx=\frac1a
$$

であり、これは最終公式 $a/(a^2+b^2)$ と一致する。以下では $b\ne0$ とする。Let $I = \int_0^{\infty} e^{-ax} \cos(bx) dx$ . We can integrate by parts twice. Let $u = e^{-ax}$ , $dv = \cos(bx) dx$ , then $du = -ae^{-ax} dx$ , $v = \frac{1}{b} \sin(bx)$ .

$$
I = \left[ \frac{1}{b} e^{-ax} \sin(bx) \right]_0^{\infty} + \frac{a}{b} \int_0^{\infty} e^{-ax} \sin(bx) dx = \frac{a}{b} \int_0^{\infty} e^{-ax} \sin(bx) dx
$$

Now let $u = e^{-ax}$ , $dv = \sin(bx) dx$ , then $du = -ae^{-ax} dx$ , $v = -\frac{1}{b} \cos(bx)$ .

$$
\int_0^{\infty} e^{-ax} \sin(bx) dx = \left[ -\frac{1}{b} e^{-ax} \cos(bx) \right]_0^{\infty} - \frac{a}{b} \int_0^{\infty} e^{-ax} \cos(bx) dx = \frac{1}{b} - \frac{a}{b} I
$$

So, $I = \frac{a}{b} (\frac{1}{b} - \frac{a}{b} I) = \frac{a}{b^2} - \frac{a^2}{b^2} I$ . Then $I (1 + \frac{a^2}{b^2}) = \frac{a}{b^2}$ , so $I = \frac{a}{b^2 + a^2}$ .

(c) Using Taylor series expansion for $\cos x$ , we have $\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + ...$ . Then $\cos x^4 = 1 - \frac{x^8}{2} + \frac{x^{16}}{24} - \frac{x^{24}}{720} + ...$

$$
\lim_{x \to 0} \frac{\cos x^4 - 1 + \frac{1}{2}x^8}{x^{16}} = \lim_{x \to 0} \frac{(1 - \frac{x^8}{2} + \frac{x^{16}}{24} - ...) - 1 + \frac{1}{2}x^8}{x^{16}} = \lim_{x \to 0} \frac{\frac{x^{16}}{24} - \frac{x^{24}}{720} + ...}{x^{16}} = \frac{1}{24}
$$

(d) $y e^{xy}$ は $x$ について積分すると $e^{xy}$ になるため、積分順序を入れ替える。領域は

$$
D=
\left\{\frac12\le y\le1,\ \frac1y\le x\le2\right\}
\cup
\left\{1\le y\le2,\ 1\le x\le2\right\}
$$

と書ける。したがって

$$
\begin{aligned}
\iint_D ye^{xy}\,dx\,dy
&=\int_{1/2}^{1}\int_{1/y}^{2}ye^{xy}\,dx\,dy
+\int_{1}^{2}\int_{1}^{2}ye^{xy}\,dx\,dy\\
&=\int_{1/2}^{1}(e^{2y}-e)\,dy
+\int_{1}^{2}(e^{2y}-e^y)\,dy\\
&=\left(\frac{e^2}{2}-e\right)
+\left(\frac{e^4}{2}-\frac{3e^2}{2}+e\right)\\
&=\boxed{\frac{e^4}{2}-e^2}.
\end{aligned}
$$
