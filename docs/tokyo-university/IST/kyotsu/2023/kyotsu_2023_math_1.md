---
sidebar_label: "2023年度 数学 第1問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2023年度 数学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**
以下の問いに答えよ。

(1) 実数変数 $x, y$ の関数 $f(x, y)$ を以下のように定義する。

$$
f(x,y) = \begin{vmatrix} 1 & x_1 & y_1 \\ 1 & x_2 & y_2 \\ 1 & x & y \end{vmatrix}
$$

方程式 $f(x, y) = 0$ の解の集合は、$xy$ 平面上の $2$ 点 $(x_1, y_1)$, $(x_2, y_2)$ を通る直線となることを示せ。ただし、$x_1 \neq x_2$ とする。

(2) 行列式

$$
\begin{vmatrix} 1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2 \end{vmatrix}
$$

の値を因数分解した形で求めよ。

(3) $xy$ 平面上の $3$ 点 $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$ を通る曲線 $y = a_0 + a_1x + a_2x^2$ が唯一存在することを示せ。ただし、$a_0, a_1, a_2$ は定数で、$x_1, x_2, x_3$ は互いに異なるとする。

(4) (3) の曲線は $y = c_1y_1 + c_2y_2 + c_3y_3$ の形で表せる。ただし、$c_1, c_2, c_3$ は $y_1, y_2, y_3$ に依存しないものとする。$c_1, c_2, c_3$ を求めよ。

(5) $xy$ 平面上の $5$ 点 $(x_1, y_1), \ldots, (x_5, y_5)$ を通る曲線 $y = a_0 + a_1x + a_2x^2 + a_3x^3 + a_4x^4$ を $y = c_1y_1 + \cdots + c_5y_5$ の形で表す。
ただし、$c_1, \ldots, c_5$ は $y_1, \ldots, y_5$ に依存しせず、$x_1, \ldots, x_5$ はお互いに異なるとする。$c_1$ を求めよ。


## **Kai**
### (1)
$f(x,y)$ は $x,y$ のそれぞれに関して1次式である。

また、2つの行が同じとき行列式は $0$ であるので、

$f(x_1, y_1)=0, \ f(x_2,y_2)=0$ もわかる。

よって、 $f(x,y)=0$ は2点 $(x_1,y_1),(x_2,y_2)$ を通る直線である。

### (2)

$$
\begin{aligned}
\begin{vmatrix}
1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2
\end{vmatrix}
&= \begin{vmatrix}
1 & x_1 & x_1^2 \\
0 & x_2-x_1 & (x_1+x_2)(x_2-x_1) \\
0 & x_3-x_1 & (x_1+x_3)(x_3-x_1)
\end{vmatrix}
\\
&= \begin{vmatrix}
x_2-x_1 & (x_1+x_2)(x_2-x_1) \\
x_3-x_1 & (x_1+x_3)(x_3-x_1)
\end{vmatrix}
\\
&= (x_2-x_1) (x_3-x_1)
\begin{vmatrix} 1 & x_1+x_2 \\ 1 & x_3+x_1 \end{vmatrix}
\\
&= (x_2-x_1) (x_3-x_1) (x_3-x_2)
\\
&= (x_1-x_2) (x_2-x_3) (x_3-x_1)
\end{aligned}
$$

### (3)
$a_0, a_1, a_2$ が満たすべき条件は

$$
\begin{aligned}
\begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix}
=
\begin{pmatrix}
1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2
\end{pmatrix}
\begin{pmatrix} a_0 \\ a_1 \\ a_2 \end{pmatrix}
\end{aligned}
$$

である。
$x_1, x_2, x_3$ が互いに異なるとき、 (2) より、

$$
\begin{aligned}
\begin{vmatrix}
1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2
\end{vmatrix}
\ne 0
\end{aligned}
$$

であるから、逆行列

$$
\begin{aligned}
\begin{pmatrix}
1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2
\end{pmatrix}^{-1}
\end{aligned}
$$

が唯一存在し、 $a_0,a_1,a_2$ は

$$
\begin{aligned}
\begin{pmatrix} a_0 \\ a_1 \\ a_2 \end{pmatrix}
=
\begin{pmatrix}
1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2
\end{pmatrix}^{-1}
\begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix}
\end{aligned}
$$

のみである。
よって、条件を満たす曲線は唯一存在する。

### (4)

$$
\begin{aligned}
y
&= a_0 + a_1 x + a_2 x^2
\\
&= \begin{pmatrix} 1 & x & x^2 \end{pmatrix}
\begin{pmatrix} a_0 \\ a_1 \\ a_2 \end{pmatrix}
\\
&= \begin{pmatrix} 1 & x & x^2 \end{pmatrix}
\begin{pmatrix}
1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2
\end{pmatrix}^{-1}
\begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix}
\\
\therefore \ \ 
\begin{pmatrix} c_1 & c_2 & c_3 \end{pmatrix}
&= \begin{pmatrix} 1 & x & x^2 \end{pmatrix}
\begin{pmatrix}
1 & x_1 & x_1^2 \\ 1 & x_2 & x_2^2 \\ 1 & x_3 & x_3^2
\end{pmatrix}^{-1}
\\
&= \frac{1}{(x_1-x_2)(x_2-x_3)(x_3-x_1)}
\begin{pmatrix} 1 & x & x^2 \end{pmatrix}
\begin{pmatrix}
  x_2 x_3 \begin{vmatrix} 1 & x_2 \\ 1 & x_3 \end{vmatrix} &
- x_1 x_3 \begin{vmatrix} 1 & x_1 \\ 1 & x_3 \end{vmatrix} &
  x_1 x_2 \begin{vmatrix} 1 & x_1 \\ 1 & x_2 \end{vmatrix} \\
- \begin{vmatrix} 1 & x_2^2 \\ 1 & x_3^2 \end{vmatrix} &
  \begin{vmatrix} 1 & x_1^2 \\ 1 & x_3^2 \end{vmatrix} &
- \begin{vmatrix} 1 & x_1^2 \\ 1 & x_2^2 \end{vmatrix} \\
  \begin{vmatrix} 1 & x_2 \\ 1 & x_3 \end{vmatrix} &
- \begin{vmatrix} 1 & x_1 \\ 1 & x_3 \end{vmatrix} &
  \begin{vmatrix} 1 & x_1 \\ 1 & x_2 \end{vmatrix}
\end{pmatrix}
\\
&= \frac{1}{(x_1-x_2)(x_2-x_3)(x_3-x_1)}
\begin{pmatrix} 1 & x & x^2 \end{pmatrix}
\begin{pmatrix}
- x_2 x_3 (x_2-x_3) &
- x_1 x_3 (x_3-x_1) &
- x_1 x_2 (x_1-x_2) \\
  (x_2+x_3)(x_2-x_3) &
  (x_3+x_1)(x_3-x_1) &
  (x_1+x_2)(x_1-x_2) \\
- (x_2-x_3) &
- (x_3-x_1) &
- (x_1-x_2)
\end{pmatrix}
\\
&=
\begin{pmatrix}
\frac{-x_2x_3 + (x_2+x_3)x - x^2}{(x_1-x_2)(x_3-x_1)} &
\frac{-x_3x_1 + (x_3+x_1)x - x^2}{(x_1-x_2)(x_2-x_3)} &
\frac{-x_1x_2 + (x_1+x_2)x - x^2}{(x_2-x_3)(x_3-x_1)}
\end{pmatrix}
\end{aligned}
$$

### (5)

$$
\begin{aligned}
y
&= a_0 + a_1 x + a_2 x^2 + a_3 x^3 + a_4 x^4
\\
&= \begin{pmatrix} 1 & x & x^2 & x^3 & x^4 \end{pmatrix}
\begin{pmatrix} a_0 \\ a_1 \\ a_2 \\ a_3 \\ a_4 \end{pmatrix}
\\
&= \begin{pmatrix} 1 & x & x^2 & x^3 & x^4 \end{pmatrix}
\begin{pmatrix}
1 & x_1 & x_1^2 & x_1^3 & x_1^4 \\
1 & x_2 & x_2^2 & x_2^3 & x_2^4 \\
1 & x_3 & x_3^2 & x_3^3 & x_3^4 \\
1 & x_4 & x_4^2 & x_4^3 & x_4^4 \\
1 & x_5 & x_5^2 & x_5^3 & x_5^4
\end{pmatrix}^{-1}
\begin{pmatrix} y_1 \\ y_2 \\ y_3 \\ y_4 \\ y_5 \end{pmatrix}
\\
\therefore \ \ 
\begin{pmatrix} c_1 & c_2 & c_3 & c_4 & c_5 \end{pmatrix}
&= \begin{pmatrix} 1 & x & x^2 & x^3 & x^4 \end{pmatrix}
\begin{pmatrix}
1 & x_1 & x_1^2 & x_1^3 & x_1^4 \\
1 & x_2 & x_2^2 & x_2^3 & x_2^4 \\
1 & x_3 & x_3^2 & x_3^3 & x_3^4 \\
1 & x_4 & x_4^2 & x_4^3 & x_4^4 \\
1 & x_5 & x_5^2 & x_5^3 & x_5^4
\end{pmatrix}^{-1}
\\
\therefore \ \ 
c_1
&= \frac{1}{(x_1-x_2)(x_1-x_3)(x_1-x_4)(x_1-x_5)
(x_2-x_3)(x_2-x_4)(x_2-x_5)(x_3-x_4)(x_3-x_5)(x_4-x_5)}
\\
& \ \ \ \ \times
\begin{pmatrix} 1 & x & x^2 & x^3 & x^4 \end{pmatrix}
\begin{pmatrix}
x_2 x_3 x_4 x_5
\begin{vmatrix}
1 & x_2 & x_2^2 & x_2^3 \\
1 & x_3 & x_3^2 & x_3^3 \\
1 & x_4 & x_4^2 & x_4^3 \\
1 & x_5 & x_5^2 & x_5^3
\end{vmatrix} \\
- \begin{vmatrix}
1 & x_2^2 & x_2^3 & x_2^4 \\
1 & x_3^2 & x_3^3 & x_3^4 \\
1 & x_4^2 & x_4^3 & x_4^4 \\
1 & x_5^2 & x_5^3 & x_5^4
\end{vmatrix} \\
\begin{vmatrix}
1 & x_2 & x_2^3 & x_2^4 \\
1 & x_3 & x_3^3 & x_3^4 \\
1 & x_4 & x_4^3 & x_4^4 \\
1 & x_5 & x_5^3 & x_5^4
\end{vmatrix} \\
- \begin{vmatrix}
1 & x_2 & x_2^2 & x_2^4 \\
1 & x_3 & x_3^2 & x_3^4 \\
1 & x_4 & x_4^2 & x_4^4 \\
1 & x_5 & x_5^2 & x_5^4
\end{vmatrix} \\
\begin{vmatrix}
1 & x_2 & x_2^2 & x_2^3 \\
1 & x_3 & x_3^2 & x_3^3 \\
1 & x_4 & x_4^2 & x_4^3 \\
1 & x_5 & x_5^2 & x_5^3
\end{vmatrix}
\end{pmatrix}
\\
&= \frac{1}{(x_1-x_2)(x_1-x_3)(x_1-x_4)(x_1-x_5)
(x_2-x_3)(x_2-x_4)(x_2-x_5)(x_3-x_4)(x_3-x_5)(x_4-x_5)}
\\
& \ \ \ \ \times
\begin{pmatrix} 1 & x & x^2 & x^3 & x^4 \end{pmatrix}
\begin{pmatrix}
x_2 x_3 x_4 x_5 (x_2-x_3)(x_2-x_4)(x_2-x_5)(x_3-x_4)(x_3-x_5)(x_4-x_5)
\\
- (x_2-x_3)(x_2-x_4)(x_2-x_5)(x_3-x_4)(x_3-x_5)(x_4-x_5)
(x_2x_3x_4 + x_2x_3x_5 + x_2x_4x_5 + x_3x_4x_5)
\\
(x_2-x_3)(x_2-x_4)(x_2-x_5)(x_3-x_4)(x_3-x_5)(x_4-x_5)
(x_2x_3 + x_2x_4 + x_2x_5 + x_3x_4 + x_3x_5 + x_4x_5)
\\
- (x_2-x_3)(x_2-x_4)(x_2-x_5)(x_3-x_4)(x_3-x_5)(x_4-x_5)
(x_2 + x_3 + x_4 + x_5)
\\
(x_2-x_3)(x_2-x_4)(x_2-x_5)(x_3-x_4)(x_3-x_5)(x_4-x_5)
\end{pmatrix}
\\
&= \frac{
x_2 x_3 x_4 x_5
- (x_2x_3x_4 + x_2x_3x_5 + x_2x_4x_5 + x_3x_4x_5) x
+ (x_2x_3 + x_2x_4 + x_2x_5 + x_3x_4 + x_3x_5 + x_4x_5) x^2
- (x_2 + x_3 + x_4 + x_5) x^3
+ x^4
}
{(x_1-x_2)(x_1-x_3)(x_1-x_4)(x_1-x_5)}
\end{aligned}
$$
