---
sidebar_label: "2023年8月実施 数学A 1"
sidebar_position: 1
tags:
  - Tohoku-University
---
# 東北大学 量子エネルギー工学専攻 2023年8月実施 数学A 1

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
以下の問いに答えよ。

(1) 次の関数の $x=0$ 近傍における $3$ 次までのテイラー展開を求めよ。

$$
f(x) = e^{2x} \cos x
$$

(2) 次の不定積分を求めよ。

$$
\int \frac{1}{\sqrt{a^2 + x^2}}\ dx\ \ \ \ \ (a>0)
$$

(3) 次の重積分を求めよ。

$$
\iint_D \sin(x+y)\ dxdy,\ \ D=\{(x,y) \mid x \ge 0, y\ge 0, x+y \le \pi\}
$$

## **Kai**
### (1)

$$
\begin{aligned}
f(x)
&= \left( 1 + 2x + \frac{(2x)^2}{2} + \frac{(2x)^3}{6} + \cdots \right)
\left( 1 - \frac{x^2}{2} + \frac{x^4}{24} + \cdots \right)
\\
&= 1 + 2x + \frac{3}{2} x^2 + \frac{1}{3} x^3 + \cdots
\end{aligned}
$$

### (2)
$t = x + \sqrt{a^2 + x^2}$ とおくと、

$$
\begin{aligned}
\frac{dt}{dx}
&= 1 + \frac{x}{\sqrt{a^2 + x^2}}
\\
&= \frac{\sqrt{a^2 + x^2} + x}{\sqrt{a^2 + x^2}}
\\
&= \frac{t}{\sqrt{a^2 + x^2}}
\\
\therefore \ \ 
\frac{dx}{\sqrt{a^2 + x^2}} &= \frac{dt}{t}
\end{aligned}
$$

なので、

$$
\begin{aligned}
\int \frac{dx}{\sqrt{a^2 + x^2}}
&= \int \frac{dt}{t}
\\
&= \log \left| t \right| + C
\\
&= \log \left| x + \sqrt{a^2 + x^2} \right| + C
\ \ \ \ \ \ \ \ ( C \text{ は積分定数 } )
\end{aligned}
$$

である。

### (3)

$$
\begin{aligned}
\iint_D \sin (x+y) \ dx dy
&= \int_0^\pi dx \int_0^{\pi - x} dy \sin (x+y)
\\
&= \int_0^\pi dx \left[ - \cos (x+y) \right]_{y=0}^{y = \pi - x}
\\
&= \int_0^\pi dx \left( 1 + \cos x \right)
\\
&= \left[ x + \sin x \right]_0^\pi
\\
&= \pi
\end{aligned}
$$