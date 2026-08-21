---
sidebar_label: "2022年2月実施 微积分"
tags:
  - Saitama-University
  - Mathematics.Calculus.Taylor-Series
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Multivariable-Differentiation
---
# 埼玉大学 理工学研究科 数理電子情報系専攻 情報システム工学コース 2022年2月実施 微积分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

2. 以下の問に答えよ. [Solve the following problems.]

(a) 次の関数 $f(x)$ のマクローリン展開を $x^4$ の項まで求めよ. [Find the Maclaurin expansion of the following function $f(x)$ up to the term of $x^4$ .]

$$
f(x) = \cos(2x + \frac{\pi}{4})
$$

(b) 次の関数 $f(x, y)$ について、 $x$ に関する偏導関数 $\frac{\partial}{\partial x}f(x, y)$ と $y$ に関する偏導関数 $\frac{\partial}{\partial y}f(x, y)$ との差 $\frac{\partial}{\partial x}f(x, y) - \frac{\partial}{\partial y}f(x, y)$ を求めよ. [For the following function $f(x, y)$ , find the difference $\frac{\partial}{\partial x}f(x, y) - \frac{\partial}{\partial y}f(x, y)$ , where $\frac{\partial}{\partial x}f(x, y)$ is the partial derivative with respect to $x$ , and $\frac{\partial}{\partial y}f(x, y)$ is the partial derivative with respect to $y$ .]

$$
f(x, y) = e^{-y} \sin^3(x + y)
$$

(c) 次の無限積分の値を求めよ. [Find the value of the following infinite integral.]

$$
\int_{1}^{\infty} \frac{1}{x(2x^2 + 1)} dx
$$

(d) 次の2重積分の値を求めよ. [Find the value of the following double integral.]

$$
\iint_D x dxdy, \quad D = \{y + (x - 1)^2 \leq 1, x \geq 0, y \geq 0\}
$$

### 题目描述

2. 回答下列问题。

(a) 将函数

$$
f(x)=\cos\left(2x+\frac{\pi}{4}\right)
$$

作 Maclaurin 展开，写到 $x^4$ 项为止。

(b) 对函数

$$
f(x,y)=e^{-y}\sin^3(x+y),
$$

求关于 $x$ 的偏导数与关于 $y$ 的偏导数之差

$$
\frac{\partial}{\partial x}f(x,y)
-\frac{\partial}{\partial y}f(x,y).
$$

(c) 计算反常积分

$$
\int_1^\infty\frac{1}{x(2x^2+1)}\,dx.
$$

(d) 计算二重积分

$$
\iint_D x\,dx\,dy,
$$

其中

$$
D=\left\{(x,y)\,\middle|\,
y+(x-1)^2\leq1,\;
x\geq0,\;
y\geq0
\right\}.
$$

## **Kai**

(a) $f(x) = \cos(2x + \frac{\pi}{4})$

$$
\begin{aligned}
f(0) &= \cos(\frac{\pi}{4}) = \frac{\sqrt{2}}{2} \\
f'(x) &= -2\sin(2x + \frac{\pi}{4}) \implies f'(0) = -2\sin(\frac{\pi}{4}) = -2\frac{\sqrt{2}}{2} = -\sqrt{2} \\
f''(x) &= -4\cos(2x + \frac{\pi}{4}) \implies f''(0) = -4\cos(\frac{\pi}{4}) = -4\frac{\sqrt{2}}{2} = -2\sqrt{2} \\
f'''(x) &= 8\sin(2x + \frac{\pi}{4}) \implies f'''(0) = 8\sin(\frac{\pi}{4}) = 8\frac{\sqrt{2}}{2} = 4\sqrt{2} \\
f^{(4)}(x) &= 16\cos(2x + \frac{\pi}{4}) \implies f^{(4)}(0) = 16\cos(\frac{\pi}{4}) = 16\frac{\sqrt{2}}{2} = 8\sqrt{2}
\end{aligned}
$$

Maclaurin expansion up to $x^4$ :

$$
f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \frac{f'''(0)}{3!}x^3 + \frac{f^{(4)}(0)}{4!}x^4 + ...
$$

$$
f(x) = \frac{\sqrt{2}}{2} - \sqrt{2}x - \frac{2\sqrt{2}}{2}x^2 + \frac{4\sqrt{2}}{6}x^3 + \frac{8\sqrt{2}}{24}x^4 + ...
$$

$$
f(x) = \frac{\sqrt{2}}{2} - \sqrt{2}x - \sqrt{2}x^2 + \frac{2\sqrt{2}}{3}x^3 + \frac{\sqrt{2}}{3}x^4 + ...
$$

(b) $f(x, y) = e^{-y} \sin^3(x + y)$

$$
\begin{aligned}
\frac{\partial f}{\partial x} &= e^{-y} \cdot 3\sin^2(x + y) \cdot \cos(x + y) = 3e^{-y} \sin^2(x + y) \cos(x + y) \\
\frac{\partial f}{\partial y} &= -e^{-y} \sin^3(x + y) + e^{-y} \cdot 3\sin^2(x + y) \cdot \cos(x + y) = e^{-y}[3\sin^2(x + y)\cos(x + y) - \sin^3(x + y)] \\
\frac{\partial f}{\partial x} - \frac{\partial f}{\partial y} &= 3e^{-y} \sin^2(x + y)\cos(x + y) - e^{-y}[3\sin^2(x + y)\cos(x + y) - \sin^3(x + y)] \\
&= 3e^{-y} \sin^2(x + y)\cos(x + y) - 3e^{-y} \sin^2(x + y)\cos(x + y) + e^{-y}\sin^3(x + y) \\
&= e^{-y}\sin^3(x + y)
\end{aligned}
$$

(c) $\int_{1}^{\infty} \frac{1}{x(2x^2 + 1)} dx$
Let $u = x^2, du = 2xdx \implies dx = \frac{du}{2x}$

$$
\int_{1}^{\infty} \frac{1}{x(2x^2 + 1)} dx = \int_{1}^{\infty} \frac{1}{x(2u + 1)} \frac{du}{2x} = \frac{1}{2}\int_{1}^{\infty} \frac{1}{x^2(2u + 1)} du = \frac{1}{2}\int_{1}^{\infty} \frac{1}{u(2u + 1)} du
$$

$$
\frac{1}{u(2u + 1)} = \frac{A}{u} + \frac{B}{2u + 1}
$$

$$
1 = A(2u + 1) + Bu \implies 1 = (2A + B)u + A
$$

So, $A = 1$ , $2A + B = 0 \implies B = -2$

$$
\frac{1}{2}\int_{1}^{\infty} (\frac{1}{u} - \frac{2}{2u + 1}) du = \frac{1}{2} [\ln|u| - \ln|2u + 1|]_{1}^{\infty} = \frac{1}{2} [\ln|x^2| - \ln|2x^2 + 1|]_{1}^{\infty}
$$

$$
= \frac{1}{2} [\ln(\frac{x^2}{2x^2 + 1})]_{1}^{\infty} = \frac{1}{2} [\lim_{x \to \infty} \ln(\frac{x^2}{2x^2 + 1}) - \ln(\frac{1}{3})] = \frac{1}{2} [\ln(\frac{1}{2}) - \ln(\frac{1}{3})] = \frac{1}{2} \ln(\frac{1/2}{1/3}) = \frac{1}{2} \ln(\frac{3}{2})
$$

(d) $\iint_D x dxdy, \quad D = \{y + (x - 1)^2 \leq 1, x \geq 0, y \geq 0\}$

$$
y \leq 1 - (x - 1)^2 = 1 - (x^2 - 2x + 1) = -x^2 + 2x
$$

When $y = 0$ , $0 \leq -x^2 + 2x = x(2 - x) \implies 0 \leq x \leq 2$

$$
\int_{0}^{2} \int_{0}^{2x - x^2} x dy dx = \int_{0}^{2} x[y]_{0}^{2x - x^2} dx = \int_{0}^{2} x(2x - x^2) dx = \int_{0}^{2} (2x^2 - x^3) dx = [\frac{2x^3}{3} - \frac{x^4}{4}]_{0}^{2} = \frac{2(2^3)}{3} - \frac{2^4}{4} = \frac{16}{3} - \frac{16}{4} = \frac{16}{3} - 4 = \frac{16 - 12}{3} = \frac{4}{3}
$$
