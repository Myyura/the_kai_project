---
sidebar_label: "2024年8月実施 微積分"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Improper-Integral
  - Mathematics.Calculus.Multivariable-Differentiation
  - Mathematics.Calculus.Local-Extrema
  - Mathematics.Calculus.Differentiation
---
# 京都大学 情報学研究科 数理工学専攻 2024年8月実施 微積分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2024_amp.pdf)

以下の問いに答えよ。

(i) 関数 $f: \mathbb{R} \to \mathbb{R}$ を,

$$
f(x) = \begin{cases}
0 & (x \text{ は無理数}) \\
\frac{1}{q} & (x = \frac{p}{q} \text{ は有理数}, x \neq 0) \\
1 & (x = 0)
\end{cases}
$$

で定める. ただし, $\frac{p}{q} (p, q \in \mathbb{Z}, p \neq 0, q > 0)$ は既約分数とする. 関数 $f(x)$ は有理数 $x$ で連続か. また, 関数 $f(x)$ は無理数 $x$ で連続か.

(ii) 関数

$$
\frac{1}{x^4 - 1}
$$

の原始関数を求めよ。

(iii) $f(x, y) = x^2 + 4xy - y^2 + 3x + y + 2$ とする. $\mathbb{R}^3$ 内の曲面 $z = f(x, y)$ の点 $(x, y, z) = (1, 2, 12)$ における接平面の方程式を求めよ.

(iv) 関数

$$
f(x, y) = x^4 + 2x^2y^2 + y^4 + 2xy
$$

の極値をすべて求めよ。

(v) $D = \{(x, y) \in \mathbb{R}^2 | 0 \leq y \leq x\}$ とする. 広義積分

$$
\iint_D \frac{1}{(x^2 + y^2 + 1)^2} dxdy
$$

の値を求めよ。

### 题目描述

回答下列问题。

1. 定义函数 $f:\mathbb{R}\to\mathbb{R}$：

$$
f(x)
=
\begin{cases}
0,&x\text{ 为无理数},\\[2mm]
\dfrac1q,&x=\dfrac pq\text{ 为非零有理数},\\[2mm]
1,&x=0,
\end{cases}
$$

其中在非零有理数情形，
$p,q\in\mathbb{Z}$、$p\ne0$、$q>0$，且 $p/q$ 为既约分数。判断
$f$ 在有理点是否连续，并判断它在无理点是否连续。
2. 求函数

$$
\frac{1}{x^4-1}
$$

的一个一般原函数。
3. 令

$$
f(x,y)
=x^2+4xy-y^2+3x+y+2.
$$

求 $\mathbb{R}^3$ 中曲面 $z=f(x,y)$ 在点
$(1,2,12)$ 处的切平面方程。
4. 求函数

$$
f(x,y)
=x^4+2x^2y^2+y^4+2xy
$$

的全部极值。
5. 令

$$
D=
\{(x,y)\in\mathbb{R}^2
\mid0\leq y\leq x\}.
$$

求广义二重积分

$$
\iint_D
\frac{1}{(x^2+y^2+1)^2}\,dx\,dy
$$

的值。

## **Kai**

（i）

任意の $c\in\mathbb R$ に対して

$$
\lim_{x\to c}f(x)=0
$$

であることを示す。任意の $\varepsilon>0$ に対し、 $1/N<\varepsilon$ となる正の整数 $N$ を取る。既約分数 $p/q$ で $q\leq N$ となるものは、 $c$ の有界な近傍には有限個しかない。したがって、それらのうち $c$ と異なる点を避けるように $\delta>0$ を選べる。すると $0<|x-c|<\delta$ のとき、 $x$ が無理数なら $f(x)=0$ であり、 $x=p/q$ が有理数なら $q>N$ なので

$$
0\leq f(x)=\frac1q<\frac1N<\varepsilon
$$

となる。よって上の極限が成り立つ。

$c$ が無理数なら $f(c)=0$ なので $f$ は $c$ で連続である。一方、 $c$ が有理数なら、 $c=0$ の場合も含めて $f(c)>0$ であるから、極限値 $0$ と一致せず不連続である。したがって、 $f$ はすべての無理数で連続、すべての有理数で不連続である。

(ii)

$$
\frac{1}{x^4 - 1} = \frac{1}{(x^2 - 1)(x^2 + 1)} = \frac{1}{(x - 1)(x + 1)(x^2 + 1)}
$$

部分分数分解を行う。

$$
\frac{1}{x^4 - 1} = \frac{A}{x - 1} + \frac{B}{x + 1} + \frac{Cx + D}{x^2 + 1}
$$

$$
1 = A(x + 1)(x^2 + 1) + B(x - 1)(x^2 + 1) + (Cx + D)(x^2 - 1)
$$

$x = 1$ のとき、 $1 = A(2)(2) \implies A = \frac{1}{4}$
$x = -1$ のとき、 $1 = B(-2)(2) \implies B = -\frac{1}{4}$
$x = 0$ のとき、 $1 = A - B - D \implies 1 = \frac{1}{4} + \frac{1}{4} - D \implies D = -\frac{1}{2}$
$x = 2$ のとき、 $1 = A(3)(5) + B(1)(5) + (2C + D)(3) \implies 1 = \frac{15}{4} - \frac{5}{4} + 6C - \frac{3}{2} \implies 1 = \frac{10}{4} - \frac{6}{4} + 6C \implies 6C = \frac{0}{4} \implies C = 0$

$$
\frac{1}{x^4 - 1} = \frac{1}{4(x - 1)} - \frac{1}{4(x + 1)} - \frac{1}{2(x^2 + 1)}
$$

原始関数は

$$
\int \frac{1}{x^4 - 1} dx = \frac{1}{4} \ln |x - 1| - \frac{1}{4} \ln |x + 1| - \frac{1}{2} \arctan x + C = \frac{1}{4} \ln |\frac{x - 1}{x + 1}| - \frac{1}{2} \arctan x + C
$$

(iii)
$f_x = 2x + 4y + 3$
$f_y = 4x - 2y + 1$
$f_x(1, 2) = 2(1) + 4(2) + 3 = 2 + 8 + 3 = 13$
$f_y(1, 2) = 4(1) - 2(2) + 1 = 4 - 4 + 1 = 1$
接平面の方程式は
$z - 12 = 13(x - 1) + 1(y - 2)$ ,
$z = 13x + y - 13 - 2 + 12$ ,
$z = 13x + y - 3$ .
よって、接平面の方程式は $13x + y - z - 3 = 0$ である。

(iv) $r^2=x^2+y^2$ とおけば

$$
f_x=4xr^2+2y,\qquad f_y=4yr^2+2x.
$$

両式を加えると

$$
(x+y)(2r^2+1)=0,
$$

従って実数の停留点では $y=-x$ である。これを $f_x=0$ に代入すると

$$
8x^3-2x=2x(4x^2-1)=0.
$$

よって停留点は

$$
(0,0),\qquad
\left(\frac12,-\frac12\right),\qquad
\left(-\frac12,\frac12\right)
$$

である。二階偏導関数は

$$
f_{xx}=12x^2+4y^2,\qquad
f_{yy}=12y^2+4x^2,\qquad
f_{xy}=8xy+2.
$$

原点ではヘッセ行列式が $-4$ なので鞍点である。他の二点ではヘッセ行列が $4I$ となるため極小点であり、

$$
f\left(\frac12,-\frac12\right)
=f\left(-\frac12,\frac12\right)
=-\frac14.
$$

また $x^2+y^2\to\infty$ のとき $f=(x^2+y^2)^2+2xy\to+\infty$ なので、これらは大域的な最小点であり、極大値は存在しない。従って極小値は $\boxed{-1/4}$ である。

(v)
領域 $D$ において、

$$
\iint_D \frac{1}{(x^2 + y^2 + 1)^2} dxdy = \int_0^{\pi/4} \int_0^{\infty} \frac{r}{(r^2 + 1)^2} dr d\theta = \int_0^{\pi/4} [-\frac{1}{2(r^2 + 1)}]_0^{\infty} d\theta = \int_0^{\pi/4} \frac{1}{2} d\theta = \frac{\pi}{8}
$$
